import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Icon from "../Global/Icon";
const FeatureCard = ({ title, desc, icon }) => {
  return (
    <Card className="h-52 w-80 border-[5px] border-green-200">
      <CardHeader>
        <CardTitle className="redf flex items-center justify-center gap-3">
          {icon}
          {title}
        </CardTitle>
        <CardDescription hidden>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{desc}</p>
      </CardContent>
      {/* <CardFooter hidden>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export default FeatureCard;
