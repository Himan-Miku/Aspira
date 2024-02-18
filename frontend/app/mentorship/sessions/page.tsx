import React from "react";
import Sessioncard from "../Sessioncard";

const page = () => {
  let data = [
    {
      name: "Instagram Hacks",
      author: "Laxman Sinha ,Instagram Marketing Community",
      start: "Wed ,Aug 24",
      time: "9:30 -10:00PM",
      desc: "Curious to know how to grow as a Marketeer, who has a good design background. Also what path to follow to be a designer ? ",
    },
    {
      name: "Web Design Workshop",
      author: "Sarah Thompson, Design Guru",
      start: "Fri, Sep 15",
      time: "3:00 - 4:30PM",
      desc: "Explore the fundamentals of web design and learn the latest trends in UI/UX. Perfect for beginners and enthusiasts!",
    },
    {
      name: "Instagram Hacks",
      author: "Laxman Sinha ,Instagram Marketing Community",
      start: "Wed ,Aug 24",
      time: "9:30 -10:00PM",
      desc: "Curious to know how to grow as a Marketeer, who has a good design background. Also what path to follow to be a designer ? ",
    },
    {
      name: "Web Design Workshop",
      author: "Sarah Thompson, Design Guru",
      start: "Fri, Sep 15",
      time: "3:00 - 4:30PM",
      desc: "Explore the fundamentals of web design and learn the latest trends in UI/UX. Perfect for beginners and enthusiasts!",
    },
    {
      name: "Instagram Hacks",
      author: "Laxman Sinha ,Instagram Marketing Community",
      start: "Wed ,Aug 24",
      time: "9:30 -10:00PM",
      desc: "Curious to know how to grow as a Marketeer, who has a good design background. Also what path to follow to be a designer ? ",
    },
    {
      name: "Digital Marketing Masterclass",
      author: "Alex Rodriguez, Marketing Strategist",
      start: "Mon, Oct 10",
      time: "2:00 - 4:00PM",
      desc: "Unlock the secrets of successful digital marketing campaigns. Discover strategies, tools, and tips for effective online promotion.",
    },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
      {data?.map((ele) => {
        return (
          <div className="">
            <Sessioncard {...ele}></Sessioncard>;
          </div>
        );
      })}
    </div>
  );
};

export default page;
