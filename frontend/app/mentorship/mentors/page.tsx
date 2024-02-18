import Image from "next/image";
import { Input } from "@/components/ui/input";
import MentorCard from "../MentorCard";

// import { cn } from "@/utils";

const page = () => {
  let sampleData = [
    {
      name: "Zara Larson",
      role: "UX Researcher, Specalist at Cogna Education",
      exp: "9 years",
      attendance: "100%",
    },
    {
      name: "Zara Larson",
      role: "UX Researcher, Specalist at Cogna Education",
      exp: "9 years",
      attendance: "100%",
    },
    {
      name: "Zara Larson",
      role: "UX Researcher, Specalist at Cogna Education",
      exp: "9 years",
      attendance: "100%",
    },
    {
      name: "Zara Larson",
      role: "UX Researcher, Specalist at Cogna Education",
      exp: "9 years",
      attendance: "100%",
    },
    {
      name: "Zara Larson",
      role: "UX Researcher, Specalist at Cogna Education",
      exp: "9 years",
      attendance: "100%",
    },
    {
      name: "Zara Larson",
      role: "UX Researcher, Specalist at Cogna Education",
      exp: "9 years",
      attendance: "100%",
    },
  ];
  return (
    <div>
      <div className="mt-6  grid xl:grid-cols-2  gap-4 grid-cols-1">
        {sampleData?.map((elem) => {
          return <MentorCard {...elem}></MentorCard>;
        })}
      </div>
    </div>
  );
};

export default page;
