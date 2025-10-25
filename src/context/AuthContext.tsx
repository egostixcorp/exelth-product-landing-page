"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Session, User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";

const ROLE_KEY = "user_role";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  role: string | null;
  avatarUrl: string | null;
  signUpWithPhone: (phone: string, password: string) => Promise<any>;
  sendOtp: (phone: string) => Promise<any>;
  verifyOtp: (phone: string, token: string) => Promise<any>;
  signInWithPhone: (phone: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
  toggleRole: () => Promise<void>;
  updateAvatar: (url: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const supabase = createClient();
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  // Load initial session and role
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      const currentSession = data?.session ?? null;

      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setAvatarUrl(currentSession?.user?.user_metadata?.avatar_url || null);

      const savedRole =
        typeof window !== "undefined"
          ? localStorage.getItem(ROLE_KEY)
          : "patient";
      setRole(savedRole || "patient");

      setLoading(false);
    };

    getSession();

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setAvatarUrl(session?.user?.user_metadata?.avatar_url || null);
      },
    );

    return () => subscription.subscription.unsubscribe();
  }, []);

  // --- Auth Functions ---
  const signUpWithPhone = async (phone: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      phone,
      password,
      options: {
        data: {
          type: "b2c-patient",
          register_user: false,
        },
      },
    });

    if (error) {
      console.error("Signup Error:", error.message);
      return { error };
    }

    return { data };
  };

  const sendOtp = async (phone: string) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      phone,
      options: { shouldCreateUser: false },
    });

    if (error) {
      console.error("OTP Error:", error.message);
      return { error };
    }

    return { data };
  };

  const verifyOtp = async (phone: string, token: string) => {
    const { data, error } = await supabase.auth.verifyOtp({
      phone,
      token,
      type: "sms",
    });

    if (error) {
      console.error("Verification Error:", error.message);
      return { error };
    }

    return { data };
  };

  const signInWithPhone = async (phone: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      phone,
      password,
    });

    if (error) {
      console.error("Login Error:", error.message);
      return { error };
    }

    return { data };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout Error:", error.message);
      return;
    }

    setSession(null);
    setUser(null);
    setRole(null);

    if (typeof window !== "undefined") {
      localStorage.removeItem(ROLE_KEY);
    }

    router.push("/login");
  };

  const updateAvatar = async (url: string) => {
    if (!user) return;

    const { error } = await supabase
      .from("users")
      .update({ avatar_url: url })
      .eq("id", user.id);

    if (error) {
      console.error("Failed to update avatar:", error.message);
      throw error;
    }

    setAvatarUrl(url);
    setUser({
      ...user,
      user_metadata: { ...user.user_metadata, avatar_url: url },
    });
  };

  const toggleRole = async () => {
    const newRole = role === "patient" ? "doctor" : "patient";
    setRole(newRole);
    if (typeof window !== "undefined") {
      localStorage.setItem(ROLE_KEY, newRole);
    }
    router.replace("/switch");
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        loading,
        role,
        avatarUrl,
        signUpWithPhone,
        sendOtp,
        verifyOtp,
        signInWithPhone,
        signOut,
        toggleRole,
        updateAvatar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
