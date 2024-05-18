"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

interface NaviganeButtonProps {
  text: string;
  redirectTo: string;
  className?: string;
}

const NaviganeButton = ({
  text,
  redirectTo,
  className,
}: NaviganeButtonProps) => {
  const router = useRouter();

  return (
    <Button className={className}>
      <Link href={redirectTo}>{text}</Link>
    </Button>
  );
};

export default NaviganeButton;
