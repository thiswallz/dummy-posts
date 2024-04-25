"use client";

import React from "react";
import { animatePageOut } from "@/extensions/animations";
import { useRouter } from "next/navigation";
import styles from "./TransitionLink.module.scss";

interface TransitionLink extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  children: React.ReactNode;
  restProps?: any;
}

export default function TransitionLink({
  href,
  children,
  ...restProps
}: TransitionLink) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <button onClick={handleClick} className={styles.link} {...restProps}>
      {children}
    </button>
  );
}
