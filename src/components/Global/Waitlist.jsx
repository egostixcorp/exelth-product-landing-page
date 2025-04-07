import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const Waitlist = () => {
  return (
    <div className="relative">
      <form
        action=""
        className="flex flex-col items-center justify-center gap-2"
      >
        <Input
          placeholder="Email address.."
          type="email"
          required
          className="h-12 w-72 focus:border-green-500 focus-visible:ring-green-500"
        ></Input>
        <Button
          variant={""}
          className="right-1 top-1 h-10 w-full bg-green-500 hover:bg-green-600 laptop:absolute laptop:w-fit"
        >
          Join Waitlist
        </Button>
      </form>
    </div>
  );
};

export default Waitlist;
