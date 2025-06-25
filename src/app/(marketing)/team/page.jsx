import React from "react";
import ContainerWrapper from "@/components/Layouts/container-wrapper";
import TeamCard from "@/components/Cards/team-card";
import { exelthTeam } from "@/data/team";
export const metadata = {
  title: "Team",
};
const TeamPage = () => {
  return (
    <div className="my-5 flex min-h-screen w-full items-center justify-center">
      <ContainerWrapper>
        <div className="relative mt-32 flex min-h-[55vh] w-full flex-col items-center justify-center gap-10 text-center">
          <div class="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          <h1 className="text-3xl font-bold laptop:text-6xl">
            Meet the People Behind Exelth <br /> Transforming Healthcare
            Together
          </h1>
          <p className="text-sm tablet:text-base laptop:px-[12%]">
            At Exelth, we&apos;re a multidisciplinary team of designers,
            engineers, healthcare experts, and product thinkers. We&apos;re
            united by one goal: to simplify healthcare and build technology that
            empowers both patients and providers.
          </p>
        </div>
        <div className="redd grid w-full grid-cols-2 place-items-center gap-10 laptop:px-[20%]">
          {exelthTeam.map((data, i) => {
            return <TeamCard key={i} {...data} />;
          })}
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default TeamPage;
