import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
  isInside: boolean;
}

export function useMouse(parentRef: React.RefObject<HTMLElement>) {
  const [mouse, setMouse] = useState<MousePosition>({
    x: 0,
    y: 0,
    isInside: false,
  });

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isInside: true,
      });
    };

    const handleMouseLeave = () => {
      setMouse((prev) => ({ ...prev, isInside: false }));
    };

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [parentRef]);

  return mouse;
}
