import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Final Bossa",
  description: "Final Bossa",
};

export default function VgmLayout({ children }: { children: React.ReactNode }) {
  return children;
}
