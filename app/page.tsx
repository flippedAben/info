import React from "react";
import { Flex } from "@radix-ui/themes";

type Song = {
  game: string;
  name: string;
  videoLink: string;
  videoStyle: string;
  sheetMusicLink: string;
};

export default function Home() {
  return (
    <Flex direction="column" gap="2" p="5">
      TODO
    </Flex>
  );
}
