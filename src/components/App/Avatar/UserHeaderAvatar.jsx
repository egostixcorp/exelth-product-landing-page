import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
const UserHeaderAvatar = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      <Link href={"/profile"}>
        <Avatar className="size-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
};

export default UserHeaderAvatar;
