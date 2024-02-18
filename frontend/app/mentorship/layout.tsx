import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:px-20 pt-7 px-6 flex flex-col gap-4">
      <div className="  py-4 flex justify-center font-semibold items-center gap-2 text-2xl ">
        <Link
          href={"/mentorship/mentors"}
          className="hover:text-orange-500 cursor-pointer"
        >
          Mentors
        </Link>
        <Link
          href={"/mentorship/sessions"}
          className="hover:text-orange-500 cursor-pointer"
        >
          Sessions
        </Link>
        {/* <div>Mentors</div> */}
      </div>
      <div className="flex gap-4">
        <Input type="text" placeholder="Search Something"></Input>
        <div className="w-full flex justify-center items-center border rounded-md text-slate-500">
          Display one to one Mentor Session
        </div>
      </div>
      <div className="flex mt-6 justify-between text-sm p-2 shadow-md cursor-pointer border">
        <div className="flex flex-col justify-center items-center">
          <Image
            width={50}
            height={50}
            alt="img"
            src={"/all-filters.svg.svg"}
          ></Image>
          <div>All</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image width={50} height={50} alt="img" src={"/Web.svg"}></Image>
          <div>Web Development</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image width={50} height={50} alt="img" src={"/Android.svg"}></Image>
          <div>Android</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            width={50}
            height={50}
            alt="img"
            src={"/all-filters.svg.svg"}
          ></Image>
          <div>All</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            width={50}
            height={50}
            alt="img"
            src={"/all-filters.svg.svg"}
          ></Image>
          <div>Web Dev</div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default layout;
