import React from "react";
import NavPopover from "@/components/App/Global/NavPopover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
const UserHeaderAvatar = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Link href={"/profile"}>
        <Avatar className="size-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
      <NavPopover />
    </div>
  );
};

export default UserHeaderAvatar;
