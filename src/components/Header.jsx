import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { DarkModeIcon } from "./icon component/DarkModeIcon";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === `light` ? `dark` : `light`);
  };

  return (
    <div className="w-full flex justify-between">
      <h2 className="drop-shadow-md">Header</h2>
      <button onClick={changeThemeHandler}>
        <DarkModeIcon width={30} height={30} />
      </button>
    </div>
  );
};
