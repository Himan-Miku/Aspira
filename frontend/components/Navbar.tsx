"use client";
import { useAuthContext } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = () => {
  const { user } = useAuthContext();
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div className="flex justify-around p-4 items-center">
      <div>
        <Link href={"/"}>
          <Image src={"/Logo.svg"} alt={"logo"} width={130} height={30}></Image>
        </Link>
      </div>
      <div className="flex justify-between items-center gap-12">
        <ul className="flex gap-4 text-lg font-semibold text-gray-700">
          <Link href="/" className="hover:text-orange-400">
            Home
          </Link>
          <Link href="/assesment" className="hover:text-orange-400">
            Assesment
          </Link>
          <Link href="/mentorship" className="hover:text-orange-400">
            Mentorship
          </Link>
        </ul>
        <div>
          <FaMagnifyingGlass size={20}></FaMagnifyingGlass>
        </div>
      </div>

      <div>
        <Avatar>
          <AvatarImage src={user?.photoURL || ""} alt="@shadcn" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
