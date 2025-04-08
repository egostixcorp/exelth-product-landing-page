import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const WaitlistModel = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="tablet:max-w-md max-w-80 rounded-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            Join Our Waitlist
          </DialogTitle>
          <DialogDescription className="text-center">
            Be the first to know when we launch. Enter your email below to get notified.
          </DialogDescription>
        </DialogHeader>

        <form className="mt-4 flex flex-col items-center gap-4">
          <Input
            placeholder="Enter your email address"
            type="email"
            required
            className="h-12 w-full focus:border-green-500 focus-visible:ring-green-500"
          />
          <Button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600"
          >
            Join Waitlist
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModel;
