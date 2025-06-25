import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { exelthTeam } from "../../data/team";
function TeamCard({ name, photo, designation, twitter, github, linkedin }) {
  return (
    <div className="z-50 flex h-60 w-40 flex-col items-center justify-between rounded-md border bg-white p-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-md hover:shadow-green-200 tablet:h-64 tablet:w-48">
      <div className="w-full">
        <div className="redd h-36 w-full overflow-hidden rounded-md border">
          <Image
            src={photo}
            alt={name}
            width={800}
            height={500}
            className="size-full object-cover"
          />
        </div>
        <h1 className="font-medium">{name}</h1>
        <p className="text-sm">{designation}</p>
      </div>
      <div className="flex w-full items-center justify-start gap-3 text-left">
        {twitter && (
          <Link href={twitter} target="_blank">
            <FaSquareXTwitter className="size-5" />
          </Link>
        )}
        {github && (
          <Link href={github} target="_blank">
            <FaGithub className="size-5" />
          </Link>
        )}
        {linkedin && (
          <Link href={linkedin} target="_blank">
            <FaLinkedin className="size-5" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default TeamCard;
export function TeamTooltip({ name, children }) {
  const member = exelthTeam.find((person) => person.name === name);

  if (!member) return children;
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent side="bottom" className="bg-transparent text-black">
        <Link href={'/team'}>
          <TeamCard {...member} />
        </Link>
      </TooltipContent>
    </Tooltip>
  );
}
