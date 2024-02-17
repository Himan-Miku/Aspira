"use client";
import { useAuthContext } from "@/context/AuthContext";
import React, { useEffect } from "react";

const Navbar = () => {
  const { user } = useAuthContext();
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div>
      Navbar
      <div>{user?.email}</div>
    </div>
  );
};

export default Navbar;
