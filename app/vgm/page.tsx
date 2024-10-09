import React from "react";
import { Flex, Text, Heading, Link, Table } from "@radix-ui/themes";

type Song = {
  game: string;
  name: string;
  videoLink: string;
  videoStyle: string;
  sheetMusicLink: string;
};

export default function Vgm() {
  const arrangedSongs: Song[] = [
    {
      game: "Zelda: Breath of the Wild",
      name: "Hateno Village Theme",
      videoLink: "https://www.youtube.com/watch?v=Uj07-YU5cTk",
      videoStyle: "Original",
      sheetMusicLink:
        "https://drive.google.com/drive/folders/1qmwvRJHjK6IOrFF7IiSFeXy-cCyC5KZR?usp=sharing",
    },
    {
      game: "Pikmin 2",
      name: "Perplexing Pool",
      videoLink: "https://www.youtube.com/watch?v=gw5QPreqViE",
      videoStyle: "8-bit Music Theory Cover",
      sheetMusicLink:
        "https://drive.google.com/drive/u/0/folders/1sf3Jlr16JhZb9w9tdj2N7md6LUqZcN1l",
    },
    {
      game: "Final Fantasy VII",
      name: "Tifa's Theme",
      videoLink: "https://www.youtube.com/watch?v=cO_ftxA28Y8",
      videoStyle: "Original",
      sheetMusicLink:
        "https://drive.google.com/drive/folders/1grSwc9T8W-KhsQ1Ke7Qmbo1hmsxKcLbl",
    },
    {
      game: "Chrono Trigger",
      name: "Corridors Of Time",
      videoLink: "https://www.youtube.com/watch?v=BXo3DrXHY8w",
      videoStyle: "Original",
      sheetMusicLink:
        "https://drive.google.com/drive/folders/1d7xxRg-0WrN29jzTUoTZ_bGSDjjZFpSN?usp=sharing",
    },
    {
      game: "Super Smash Bros Brawl",
      name: "Bramble Blast",
      videoLink: "https://www.youtube.com/watch?v=qco0o3MDCL4",
      videoStyle: "insaneintherain cover",
      sheetMusicLink:
        "https://drive.google.com/drive/folders/1sl_0eWCK177_dvdY47VrmQ1w0QHbpvhu",
    },
    {
      game: "Xenoblade Chronicles",
      name: "You Will Know Our Names",
      videoLink: "https://www.youtube.com/watch?v=g7yNyhLOIa4",
      videoStyle: "Original",
      sheetMusicLink:
        "https://drive.google.com/drive/folders/1jo7lMU6LZKrD0Ubbiw5773mub-PyJ9s_",
    },
    {
      game: "Mega Man 2",
      name: "Air Man",
      videoLink: "https://www.youtube.com/watch?v=IWcLXF2eyD4",
      videoStyle: "Cover",
      sheetMusicLink:
        "https://drive.google.com/drive/folders/16TLhCsBAYKHETgNfAmns28iHjVdWJxYH",
    },
  ].sort((songA, songB) => (songA.name < songB.name ? -1 : 1));

  const playedSongs: Song[] = [
    {
      game: "Pokemon Gold & Silver",
      name: "Azalea Town",
      videoLink:
        "https://www.youtube.com/watch?v=fbcjFvXGXYQ&ab_channel=pokemonmusicmaster",
      videoStyle: "Original",
      sheetMusicLink:
        "https://www.vgleadsheets.com/view/pokmon-gold-silver/azalea-town?transposition=C#",
    },
    {
      game: "Super Mario 64",
      name: "Bob-omb Battlefield",
      videoLink: "https://www.youtube.com/watch?v=LPq8_HB8QBA",
      videoStyle: "8-Bit Big Band Cover",
      sheetMusicLink:
        "https://www.vgleadsheets.com/view/super-mario-64/main-theme?transposition=C#",
    },
    {
      game: "Zelda: The Wind Waker",
      name: "Dragon Roost Island",
      videoLink: "https://www.youtube.com/watch?v=QtcgZGp3FGs",
      videoStyle: "Original",
      sheetMusicLink:
        "https://www.vgleadsheets.com/view/the-legend-of-zelda-the-wind-waker/dragon-roost-island?transposition=C#",
    },
    {
      game: "Chrono Trigger",
      name: "Secret Of The Forest",
      videoLink: "https://www.youtube.com/watch?v=pYgQEjcosP0",
      videoStyle: "Contraband Cover",
      sheetMusicLink:
        "https://www.vgleadsheets.com/view/chrono-trigger/secret-of-the-forest?transposition=C#",
    },
    {
      game: "N/A",
      name: "Wii Shop Channel Theme",
      videoLink: "https://www.youtube.com/watch?v=yyjUmv1gJEg",
      videoStyle: "Original",
      sheetMusicLink:
        "https://www.vgleadsheets.com/view/wii/wii-shop-channel?transposition=C#",
    },
    {
      game: "Undertale",
      name: "Once Upon A Time",
      videoLink: "https://www.youtube.com/watch?v=s7RRgF5Ve_E",
      videoStyle: "Original",
      sheetMusicLink:
        "https://www.vgleadsheets.com/view/undertale/once-upon-a-time?transposition=C#",
    },
    {
      game: "Mario Cart 64",
      name: "Rainbow Road",
      videoLink: "https://www.youtube.com/watch?v=E5lAfUJdzzc",
      videoStyle: "Original",
      sheetMusicLink:
        "https://www.vgleadsheets.com/view/mario-kart-64/rainbow-road?transposition=C#",
    },
    {
      game: "Donkey Kong Country 2: Diddy's Kong Quest",
      name: "Stickerbush Symphony",
      videoLink: "https://www.youtube.com/watch?v=mdPlcKg-qFs",
      videoStyle: "Original",
      sheetMusicLink:
        "https://www.vgleadsheets.com/view/donkey-kong-country-2-diddys-kong-quest/stickerbush-symphony?transposition=C#",
    },
    {
      game: "Hollow Knight",
      name: "Dirtmouth",
      videoLink: "https://www.youtube.com/watch?v=NSlkW1fFkyo",
      videoStyle: "Original",
      sheetMusicLink:
        "https://www.vgleadsheets.com/view/hollow-knight/dirtmouth?transposition=C#",
    },
    {
      game: "Castlevania",
      name: "Bloody Tears",
      videoLink: "https://www.youtube.com/watch?v=e2oZtvjg5oA",
      videoStyle: "Original",
      sheetMusicLink:
        "https://www.vgleadsheets.com/view/castlevania-ii-simons-quest/bloody-tears?transposition=C#",
    },
    {
      game: "Persona 5",
      name: "Layer Cake",
      videoLink: "https://www.youtube.com/watch?v=C4nTv-pVk0k",
      videoStyle: "Original",
      sheetMusicLink:
        "https://www.vgleadsheets.com/view/persona-5/layer-cake?transposition=C#",
    },
  ];

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
      <Text>All experience levels welcome. Recommended skills:</Text>
      <Text ml="2">
        <li>Can read sheet music or learn by ear.</li>
        <li>Know basic chords.</li>
      </Text>
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
        Arranged songs
      </Heading>
      We have custom arrangements for these songs:
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Sheet music</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>YouTube link</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Game</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {arrangedSongs.map((song) => (
            <Table.Row>
              <Table.Cell>
                <Link href={song.sheetMusicLink}>{song.name}</Link>
              </Table.Cell>
              <Table.Cell>
                <Link href={song.videoLink}>{song.videoStyle}</Link>
              </Table.Cell>
              <Table.Cell>{song.game}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
}
