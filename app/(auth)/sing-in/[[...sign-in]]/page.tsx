import { SignIn } from "@clerk/nextjs";
import React from "react";

const signInPage = () => {
  return <div className="flex justify-center items-center h-screen w-full">
    <SignIn />
  </div>;
};

export default signInPage;
