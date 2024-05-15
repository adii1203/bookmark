"use client";

import React from "react";
import { useRouter } from "next/navigation";

const AuthCtaButton = ({
  redirectPath,
  children,
}: {
  children: React.ReactNode;
  redirectPath: string;
}) => {
  const router = useRouter();
  const handelClick = () => {
    router.push(redirectPath);
  };

  return <span onClick={handelClick}>{children}</span>;
};

export default AuthCtaButton;
