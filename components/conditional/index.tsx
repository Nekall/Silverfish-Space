"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ConditionalProps {
  children: ReactNode;
}

const Conditional = ({ children }: ConditionalProps) => {
  const pathname = usePathname();

  const allowedPaths = [
    "/",
    "/players",
    "/advancements",
    "/statistics",
    "/informations",
    "/options",
  ];

  const isAllowedPath = allowedPaths.includes(pathname);

  if (!isAllowedPath) {
    return null;
  }

  return <>{children}</>;
};

export default Conditional;
