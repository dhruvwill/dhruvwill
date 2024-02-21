"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return resolvedTheme == "light" ? (
    <Button onClick={() => setTheme("dark")}>
      <Image src="/icons/moon.svg" width={20} height={20} alt="moon" />
    </Button>
  ) : (
    <Button onClick={() => setTheme("light")}>
      <Image src="/icons/sun.svg" width={20} height={20} alt="sun" />
    </Button>
  );
};

export default ThemeToggler;
