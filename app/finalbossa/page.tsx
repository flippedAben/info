import React from "react";
import { Flex, Heading, Link, Table, Box } from "@radix-ui/themes";
import { VideoIcon, KeyboardIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { Setlist, Song } from "../data";

export default function Vgm() {
  return (
    <Flex direction="column" gap="2" p="5">
      <Heading size="8" weight="regular">
        Final Bossa setlist
      </Heading>

      <Box p="3">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Sheet music</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Soloists</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <VideoIcon color="#E5484D" />
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <KeyboardIcon />
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {Setlist.map((song, index) => (
              <Table.Row key={index}>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>
                  <Link href={song.sheetMusicLink}>
                    {song.name} {song.arranged && <Pencil2Icon color="gold" />}
                  </Link>
                </Table.Cell>
                <Table.Cell>{song.soloists?.join(", ") ?? null}</Table.Cell>
                <Table.Cell>
                  <Link href={song.videoLink}>{song.videoStyle}</Link>
                </Table.Cell>
                <Table.Cell>{song.game}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Flex>
  );
}
