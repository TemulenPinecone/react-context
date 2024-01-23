import React from "react";
import { useTheme } from "@/context/ThemeContext";

export const Left = () => {
  const { theme } = useTheme();

  const divClassName =
    theme == `light` ? `w-1/4 bg-white` : `w-1/4 bg-gray-700`;
  const pClasssName = theme == `light` ? `text-black` : `text-white`;

  return (
    <div className={divClassName}>
      <p className={pClasssName}>Left</p>
    </div>
  );
};
