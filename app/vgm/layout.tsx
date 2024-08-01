import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "VGM jam",
  description: "VGM jam",
};

export default function VgmLayout({ children }: { children: React.ReactNode }) {
  return children;
}
