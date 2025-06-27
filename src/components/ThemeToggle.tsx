"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-16 h-8 rounded-full bg-gray-300 dark:bg-[#0f1629] relative flex items-center justify-between px-2 transition-colors duration-300"
    >
      <Sun
        className="w-4 h-4 text-yellow-500 dark:text-white z-10"
      />
      <Moon
        className="w-4 h-4 text-gray-700 dark:text-white z-10"
      />
      <div
        className={`w-6 h-6 rounded-full bg-black dark:bg-white absolute top-1 left-1 transition-transform duration-300 z-20 ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
