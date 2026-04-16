import React from "react";
import { Flex, Link } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex direction="column" gap="2" p="5">
      <Link href="./vgm">VGM jam</Link>
      <Link href="./finalbossa">Final Bossa setlist</Link>
    </Flex>
  );
}
