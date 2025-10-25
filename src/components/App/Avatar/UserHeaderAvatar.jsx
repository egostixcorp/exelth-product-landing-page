"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import NavPopover from "@/components/App/Global/NavPopover";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const UserHeaderAvatar = () => {
  const { user, avatarUrl } = useAuth();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      if (!user?.id) return;
      const supabase = createClient();

      const { data, error } = await supabase
        .from("patient_users")
        .select("*, user:user_id(*)")
        .eq("user_id", user.id)
        .single();

      if (error) {
        console.error("Error fetching patient details:", error.message);
      } else {
        setPatient(data);
      }
    };

    fetchPatient();
  }, [user?.id]);

  return (
    <div className="flex items-center justify-center gap-2">
      <Link href={user ? "/profile" : "/login"}>
        <Avatar className="size-8">
          <AvatarImage src={avatarUrl || patient?.user?.avatar_url || ""} />
          <AvatarFallback>EX</AvatarFallback>
        </Avatar>
      </Link>
      <NavPopover />
    </div>
  );
};

export default UserHeaderAvatar;
