import React from "react";
import { LayoutProps } from "../../../.next/types/app/layout";

const layout = ({ children }: LayoutProps) => {
  return <div className="mx-auto w-fit p-4">{children}</div>;
};

export default layout;
