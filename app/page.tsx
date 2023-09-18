import React from "react";
import { Flex, Text, Heading, Link, Table } from "@radix-ui/themes";

export default function Home() {
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
      <Text>All experience levels welcome.</Text>
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
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Game</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Song</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>YouTube link</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Sheet music link</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Super Mario 64</Table.RowHeaderCell>
            <Table.Cell>Bob-Omb Battlefield</Table.Cell>
            <Table.Cell>
              <Link href="https://www.youtube.com/watch?v=LPq8_HB8QBA">
                Cover
              </Link>
            </Table.Cell>
            <Table.Cell>
              <Link href="https://www.vgleadsheets.com/view/super-mario-64/main-theme?transposition=C#">
                VG Lead Sheets
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Zelda: Breath of the Wild</Table.RowHeaderCell>
            <Table.Cell>Hateno Village Theme</Table.Cell>
            <Table.Cell>
              <Link href="https://www.youtube.com/watch?v=Uj07-YU5cTk">
                Original
              </Link>
            </Table.Cell>
            <Table.Cell>
              <Link href="https://www.vgleadsheets.com/view/the-legend-of-zelda-breath-of-the-wild/hateno-village-day?transposition=C#">
                VG Lead Sheets
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Zelda: The Wind Waker</Table.RowHeaderCell>
            <Table.Cell>Dragon Roost Island</Table.Cell>
            <Table.Cell>
              <Link href="https://www.youtube.com/watch?v=QtcgZGp3FGs">
                Original
              </Link>
            </Table.Cell>
            <Table.Cell>
              <Link href="https://www.vgleadsheets.com/view/the-legend-of-zelda-the-wind-waker/dragon-roost-island?transposition=C#">
                VG Lead Sheets
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Chrono Trigger</Table.RowHeaderCell>
            <Table.Cell>Secret of the Forest</Table.Cell>
            <Table.Cell>
              <Link href="https://www.youtube.com/watch?v=pYgQEjcosP0">
                Cover
              </Link>
            </Table.Cell>
            <Table.Cell>
              <Link href="https://www.vgleadsheets.com/view/chrono-trigger/secret-of-the-forest?transposition=C#">
                VG Lead Sheets
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Wii</Table.RowHeaderCell>
            <Table.Cell>Wii Shop Channel Theme</Table.Cell>
            <Table.Cell>
              <Link href="https://www.youtube.com/watch?v=yyjUmv1gJEg">
                Original
              </Link>
            </Table.Cell>
            <Table.Cell>
              <Link href="https://www.vgleadsheets.com/view/wii/wii-shop-channel?transposition=C#">
                VG Lead Sheets
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Undertale</Table.RowHeaderCell>
            <Table.Cell>Once Upon A Time</Table.Cell>
            <Table.Cell>
              <Link href="https://www.youtube.com/watch?v=s7RRgF5Ve_E">
                Original
              </Link>
            </Table.Cell>
            <Table.Cell>
              <Link href="https://www.vgleadsheets.com/view/undertale/once-upon-a-time?transposition=C#">
                VG Lead Sheets
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Pikmin 2</Table.RowHeaderCell>
            <Table.Cell>Perplexing Pool</Table.Cell>
            <Table.Cell>
              <Link href="https://www.youtube.com/watch?v=gw5QPreqViE">
                Cover
              </Link>
            </Table.Cell>
            <Table.Cell>
              <Link href="https://drive.google.com/drive/u/0/folders/1sf3Jlr16JhZb9w9tdj2N7md6LUqZcN1l">
                Google Drive
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Mario Cart 64</Table.RowHeaderCell>
            <Table.Cell>Rainbow Road</Table.Cell>
            <Table.Cell>
              <Link href="https://www.youtube.com/watch?v=E5lAfUJdzzc">
                Cover
              </Link>
            </Table.Cell>
            <Table.Cell>
              <Link href="https://www.vgleadsheets.com/view/mario-kart-64/rainbow-road?transposition=C#">
                VG Lead Sheets
              </Link>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <Heading size="6" weight="regular">
        What to bring
      </Heading>
      <Text ml="2">
        <li>Hearing protection (hopefully not necessary)</li>
        <li>Water!</li>
        <li>
          Drummers. Sticks, brushes, mallets, aux precussion. Optionally, bring
          cymbals. I will rent out a drum set (bass, snare, two toms), and
          cymbals (ride, crash), unless otherwise noted.
        </li>
        <li>
          Keyboard players. Instrument and cables to plug into soundboard.
        </li>
        <li>Guitar and bass players. Instrument and amp.</li>
      </Text>
      <Heading size="6" weight="regular">
        Cost
      </Heading>
      <Text>
        I would appreciate if you contributed $5-12 dollars to cover the room
        cost and drum rental.
      </Text>
    </Flex>
  );
}
