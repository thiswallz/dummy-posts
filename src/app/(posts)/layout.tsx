import type { Metadata } from "next";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "Post",
  description: "Post Description",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={styles.main}>{children}</main>;
}
