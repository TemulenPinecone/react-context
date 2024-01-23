import React from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Question() {
  const { theme } = useTheme();

  const pClasssName = theme == `light` ? `text-black` : `text-white`;

  return (
    <div>
      <p className={pClasssName}>Question</p>
    </div>
  );
}
