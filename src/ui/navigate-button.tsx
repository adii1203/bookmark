"use client";

import { Button } from "@/components/ui/button";

interface NaviganeButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const NaviganeButton = ({ className, children }: NaviganeButtonProps) => {
  return <Button className={className}>{children}</Button>;
};

export default NaviganeButton;
