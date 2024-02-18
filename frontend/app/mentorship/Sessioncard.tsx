import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Event = {
  name: string;
  author: string;
  start: string;
  time: string;
  desc: string;
};
const Sessioncard = (Prop: Event) => {
  return (
    <div className=" border  p-5 flex  flex-col gap-3">
      <div className="w-full grid place-items-center">
        <Image
          src={"/imgsession.png"}
          className="w-full"
          alt="img"
          width={200}
          height={200}
        ></Image>
      </div>
      <div>
        <div className="text-2xl font-semibold">
          <div>{Prop?.name}</div>
        </div>
        <div>{Prop?.author}</div>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-2 items-center">
          <Image src={"/Date.svg"} width={40} height={40} alt="date"></Image>
          <div>{Prop?.start}</div>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            className="bg-orange-500 rounded-full"
            src={"/Time.svg"}
            width={35}
            height={20}
            alt="time"
          ></Image>
          <div>{Prop?.time}</div>
        </div>
      </div>
      <div>{Prop?.desc}</div>
      <div>
        <Button className="text-white bg-orange-500">View Session</Button>
      </div>
    </div>
  );
};

export default Sessioncard;
