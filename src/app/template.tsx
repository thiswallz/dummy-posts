"use client";

import { animatePageIn } from "@/extensions/animations";
import { useEffect } from "react";
import styles from "./template.module.scss";

// simple transition wrapper
export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div id="transition-element" className={styles.transitionElement}>
      {children}
    </div>
  );
}
