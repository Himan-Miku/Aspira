import React from "react";
import Image from "next/image";
import { BsSuitcaseLg } from "react-icons/bs";
import { Button } from "@/components/ui/button";

interface Prop {
  name: string;
  role: string;
  exp: string;
  attendance: string;
}

const MentorCard = (Prop: Prop) => {
  return (
    <div className="border w-full shadow-md  gap-4 border-slate-100 flex rounded-sm p-2">
      {/* <div className="flex w-full">
  </div> */}
      <Image src={"/Zara.png"} width={160} height={80} alt="img"></Image>

      <div className="flex w-full flex-col gap-4 ">
        <div className="text-xl font-semibold">{Prop?.name}</div>
        <div className="flex justify-start gap-2 text-sm">
          <BsSuitcaseLg />
          <div>{Prop?.role}</div>
        </div>
        <div className="flex bg-orange-50 rounded-md p-2 gap-4">
          <div>
            <div>Experience</div>
            <div className="font-semibold">{Prop?.exp}</div>
          </div>
          <div>
            <div>Avg.Attendance</div>
            <div className="font-semibold">{Prop?.attendance}</div>
          </div>
        </div>
        <div>
          <Button className="bg-orange-500 text-white">View Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
