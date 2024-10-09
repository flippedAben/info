import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import React from "react";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TODO",
  description: "TODO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          accentColor="blue"
          grayColor="sand"
          radius="large"
          scaling="100%"
          appearance="dark"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
