import React from "react";
import { Flex, Text, Heading, Link, Table, Box } from "@radix-ui/themes";
import { VideoIcon, KeyboardIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { Setlist, JamSongs } from "../data";

export default function Vgm() {
  const songs = Setlist.concat(JamSongs);
  return (
    <Flex direction="column" gap="2" p="5">
      <Heading size="8" weight="regular">
        Video game music jam
      </Heading>
      <Heading size="6" weight="regular">
        What
      </Heading>
      <Text>Come jam to video game tunes with us.</Text>
      <Heading size="6" weight="regular">
        Who
      </Heading>
      <Text ml="2">
        <li>Can play an instrument.</li>
        <li>Can read sheet music or learn by ear.</li>
        <li>Know basic chords.</li>
      </Text>
      Current group is 5 - 8 people, consisting of 2-4 sax/trumpet players, 1-2
      pianists, 1 bassist, 1-2 drummers.
      <Heading size="6" weight="regular">
        When
      </Heading>
      <Text>Certain Saturdays, 2 - 5 pm</Text>
      <Heading size="6" weight="regular">
        Where
      </Heading>
      <Text>Listed in Discord.</Text>
      <Heading size="6" weight="regular">
        What to bring
      </Heading>
      <Text ml="2">
        <li>Music stands</li>
        <li>Hearing protection (aka musician's earplugs)</li>
        <li>
          <Text weight="bold">Drummers.</Text> Sticks, brushes, mallets, aux
          precussion. A full drum kit is provided.
        </li>
        <li>
          <Text weight="bold">Pianists.</Text> Instrument and cables to plug
          into provided amp. Synths are provided, as well.
        </li>
        <li>
          <Text weight="bold">Guitar/bass players.</Text> Instrument and amp.
        </li>
      </Text>
      <Heading size="6" weight="regular">
        Music
      </Heading>
      <Text>
        The format of the jam:
        <li>
          Play some songs from "setlist" tab (record some if we feel good).
        </li>
        <li>Play some songs from the "jam" tab.</li>
        <li>Discovery time. People suggest songs we can sight read.</li>
      </Text>
      <Text size="1">
        <Pencil2Icon color="gold" /> indicates we have a custom arrangement for
        the song.
      </Text>
      <Box p="3">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Sheet music</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <VideoIcon color="#E5484D" />
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <KeyboardIcon />
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {songs.map((song) => (
              <Table.Row key={song.game + song.name}>
                <Table.Cell>
                  <Link href={song.sheetMusicLink}>
                    {song.name} {song.arranged && <Pencil2Icon color="gold" />}
                  </Link>
                </Table.Cell>
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
