import React from "react";
import { Flex, Text, Heading, Link, Table } from "@radix-ui/themes";

type Song = {
  game: string;
  name: string;
  videoLink: string;
  videoStyle: string;
  sheetMusicLink: string;
};

export default function Home() {
  const songs: Song[] = [
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
      game: "Zelda: Breath of the Wild",
      name: "Hateno Village Theme",
      videoLink: "https://www.youtube.com/watch?v=Uj07-YU5cTk",
      videoStyle: "Original",
      sheetMusicLink:
        "https://drive.google.com/drive/folders/1qmwvRJHjK6IOrFF7IiSFeXy-cCyC5KZR?usp=sharing",
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
      game: "Pikmin 2",
      name: "Perplexing Pool",
      videoLink: "https://www.youtube.com/watch?v=gw5QPreqViE",
      videoStyle: "8-bit Music Theory Cover",
      sheetMusicLink:
        "https://drive.google.com/drive/u/0/folders/1sf3Jlr16JhZb9w9tdj2N7md6LUqZcN1l",
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
      game: "Final Fantasy VII",
      name: "Tifa's Theme",
      videoLink: "https://www.youtube.com/watch?v=cO_ftxA28Y8",
      videoStyle: "Original",
      sheetMusicLink:
        "https://drive.google.com/drive/folders/1grSwc9T8W-KhsQ1Ke7Qmbo1hmsxKcLbl",
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
      game: "Chrono Trigger",
      name: "Corridors Of Time",
      videoLink: "https://www.youtube.com/watch?v=BXo3DrXHY8w",
      videoStyle: "Original",
      sheetMusicLink:
        "https://drive.google.com/drive/folders/1d7xxRg-0WrN29jzTUoTZ_bGSDjjZFpSN?usp=sharing",
    },
    // {
    //   game: "Hollow Knight",
    //   name: "Dirtmouth",
    //   videoLink: "https://www.youtube.com/watch?v=NSlkW1fFkyo",
    //   videoStyle: "Original",
    //   sheetMusicLink:
    //     "https://www.vgleadsheets.com/view/hollow-knight/dirtmouth?transposition=C#",
    // },
    // {
    //   game: "Castlevania",
    //   name: "Bloody Tears",
    //   videoLink: "https://www.youtube.com/watch?v=e2oZtvjg5oA",
    //   videoStyle: "Original",
    //   sheetMusicLink:
    //     "https://www.vgleadsheets.com/view/castlevania-ii-simons-quest/bloody-tears?transposition=C#",
    // },
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
      <Text>
        <Link href="https://waveformaustin.com/" color="blue">
          Waveform Austin - Photography Studio Rental and Band Rehearsal Studios
        </Link>
      </Text>
      <Heading size="6" weight="regular">
        Setlist
      </Heading>
      We will play {songs.length} songs.
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Sheet music</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>YouTube link</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Game</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {songs.map((song) => (
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
      <Heading size="6" weight="regular">
        What to bring
      </Heading>
      <Text ml="2">
        <li>Music stands</li>
        <li>Hearing protection (aka musician's earplugs)</li>
        <li>
          <Text weight="bold">Drummers.</Text> Sticks, brushes, mallets, aux
          precussion. Optionally, bring cymbals. I will rent out a drum set
          (bass, snare, two toms), and cymbals (ride, crash), unless otherwise
          noted.
        </li>
        <li>
          <Text weight="bold">Pianists.</Text> Instrument and cables to plug
          into mixer.
        </li>
        <li>
          <Text weight="bold">Guitar/bass players.</Text> Instrument and amp.
        </li>
      </Text>
      <Heading size="6" weight="regular">
        Cost
      </Heading>
      <Text>
        I would appreciate if you contributed{" "}
        <code>$60/(number of people) ~ $10 </code> to cover the room cost and
        drum rental.
      </Text>
    </Flex>
  );
}
