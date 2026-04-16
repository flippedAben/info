export type Song = {
  game: string;
  name: string;
  videoLink: string;
  videoStyle: string;
  sheetMusicLink: string;
  arranged?: boolean;
};

export const Setlist: Song[] = [
  {
    game: "Super Mario Bros 2",
    name: "Overworld Theme",
    videoLink: "https://www.youtube.com/watch?v=yBISfv-6hfo",
    videoStyle: "Original",
    sheetMusicLink:
      "https://drive.google.com/drive/folders/17CGOKSG_mwKK7DOBDGIQTa97qsq4Yn1h?usp=drive_link",
    arranged: true,
  },
  {
    game: "Pokemon",
    name: "Rustboro City",
    videoLink: "https://www.youtube.com/watch?v=Y3auFhxfsmI",
    videoStyle: "Original",
    sheetMusicLink:
      "https://www.vgleadsheets.com/view/pokmon-ruby-sapphire/rustboro-city?transposition=C#",
  },
  {
    game: "Zelda: The Wind Waker",
    name: "Dragon Roost Island",
    videoLink: "https://www.youtube.com/watch?v=QtcgZGp3FGs",
    videoStyle: "Original",
    sheetMusicLink:
      "https://drive.google.com/drive/folders/1XUaRRCUAoFAdl8Kl_Xb_mHgGYlvzMB4d?usp=drive_link",
    arranged: true,
  },
  {
    game: "Super Mario Galaxy",
    name: "Rosalina in the Observatory",
    videoLink: "https://www.youtube.com/watch?v=8PQ5uXXGQTs",
    videoStyle: "Cover",
    sheetMusicLink:
      "https://drive.google.com/drive/folders/1d45YpSiw05XPzYK9VGTVTBDkyCxUZZpA?usp=drive_link",
    arranged: true,
  },
  {
    game: "Mega Man 2",
    name: "Air Man",
    videoLink: "https://www.youtube.com/watch?v=IWcLXF2eyD4",
    videoStyle: "Cover",
    sheetMusicLink:
      "https://drive.google.com/drive/folders/16TLhCsBAYKHETgNfAmns28iHjVdWJxYH",
    arranged: true,
  },
  {
    game: "Persona 5",
    name: "Beneath the Mask",
    videoLink: "https://www.youtube.com/watch?v=gFFOXwniVKw",
    videoStyle: "Original",
    sheetMusicLink:
      "https://drive.google.com/drive/folders/1lpv7UsWshacCHSHqLfttP5VgmQVhp9E3?usp=drive_link",
    arranged: true,
  },
  {
    game: "Super Smash Bros Brawl",
    name: "Bramble Blast",
    videoLink: "https://www.youtube.com/watch?v=qco0o3MDCL4",
    videoStyle: "insaneintherain cover",
    sheetMusicLink:
      "https://drive.google.com/drive/folders/1sl_0eWCK177_dvdY47VrmQ1w0QHbpvhu",
    arranged: true,
  },
  {
    game: "Chrono Trigger",
    name: "Secret of the Forest",
    videoLink: "https://www.youtube.com/watch?v=pYgQEjcosP0",
    videoStyle: "Contraband Cover",
    sheetMusicLink:
      "https://drive.google.com/drive/folders/10rzE5Mm4gq_i3asSzAbN2o-8IcOBDYMF?usp=drive_link",
    arranged: true,
  },
  {
    game: "Undertale",
    name: "Megalovania",
    videoLink: "https://www.youtube.com/watch?v=0FCvzsVlXpQ",
    videoStyle: "Original",
    sheetMusicLink:
      "https://drive.google.com/drive/folders/1DxYrLqXiCE9e5ycFzTjxdwNsswM6ySIp?usp=drive_link",
    arranged: true,
  },
  {
    game: "Sonic",
    name: "Chemical Plant Zone",
    videoLink: "https://www.youtube.com/watch?v=o5JxwilmnXo",
    videoStyle: "Cover",
    sheetMusicLink:
      "https://drive.google.com/drive/folders/1KdM40dL5bZhDhRWVvTfERMWjcWxu-xzB?usp=drive_link",
    arranged: true,
  },
];

export const JamSongs: Song[] = [
  // {
  //   game: "Pokemon HeartGold/SoulSilver",
  //   name: "National Park",
  //   videoLink: "https://www.youtube.com/watch?v=4ujh7lvcsRs",
  //   videoStyle: "Original",
  //   sheetMusicLink:
  //     "",
  // },

  {
    game: "Pikmin 2",
    name: "Perplexing Pool",
    videoLink: "https://www.youtube.com/watch?v=gw5QPreqViE",
    videoStyle: "8-bit Music Theory Cover",
    sheetMusicLink:
      "https://drive.google.com/drive/u/0/folders/1sf3Jlr16JhZb9w9tdj2N7md6LUqZcN1l",
    arranged: true,
  },
  {
    game: "Fez",
    name: "Flow",
    videoLink: "https://www.youtube.com/watch?v=IlBQh6N7RDw",
    videoStyle: "Original",
    sheetMusicLink:
      "https://drive.google.com/drive/folders/1xNEXOTVOHh3sOR9u0YitH4FD8HTNKw6g",
    arranged: true,
  },
  {
    game: "Balatro",
    name: "Main Theme",
    videoLink: "https://www.youtube.com/watch?v=tURydXfCVlQ",
    videoStyle: "Cover",
    sheetMusicLink:
      "https://www.vgleadsheets.com/view/balatro/main-theme?transposition=C#",
    arranged: false,
  },
  {
    game: "Zelda: Link's Awakening",
    name: "Bossa (ballad) of the Windfish",
    videoLink: "https://www.youtube.com/watch?v=I8VI0dFNKbM",
    videoStyle: "Original",
    sheetMusicLink:
      "https://drive.google.com/drive/folders/15Ov-GK8REgMOeQY3hCbuNE0GlM-CYPS3",
    arranged: true,
  },
  {
    game: "Persona 5",
    name: "Layer Cake",
    videoLink: "https://www.youtube.com/watch?v=C4nTv-pVk0k",
    videoStyle: "Original",
    sheetMusicLink:
      "https://www.vgleadsheets.com/view/persona-5/layer-cake?transposition=C#",
  },
  {
    game: "Xenoblade Chronicles",
    name: "You Will Know Our Names",
    videoLink: "https://www.youtube.com/watch?v=g7yNyhLOIa4",
    videoStyle: "Original",
    sheetMusicLink:
      "https://drive.google.com/drive/folders/1jo7lMU6LZKrD0Ubbiw5773mub-PyJ9s_",
    arranged: true,
  },
  {
    game: "Xenoblade Chronicles",
    name: "Battle! Torna",
    videoLink: "https://www.youtube.com/watch?v=1weNnjzaXbY",
    videoStyle: "Original",
    sheetMusicLink:
      "https://drive.google.com/drive/folders/1Unk20XGDM21RTXT_cR9Gii6ySFKB_ECA?usp=sharing",
    arranged: true,
  },
  {
    game: "Kirby",
    name: "Great Cave Escape",
    videoLink: "https://www.youtube.com/watch?v=tkmipdkxcxg",
    videoStyle: "Original",
    sheetMusicLink:
      "https://www.vgleadsheets.com/view/kirby-and-the-rainbow-curse/great-cave-escape?transposition=C",
  },
  {
    game: "Zelda: Breath of the Wild",
    name: "Hateno Village Theme",
    videoLink: "https://www.youtube.com/watch?v=Uj07-YU5cTk",
    videoStyle: "Original",
    sheetMusicLink:
      "https://drive.google.com/drive/folders/1qmwvRJHjK6IOrFF7IiSFeXy-cCyC5KZR?usp=sharing",
    arranged: true,
  },
  {
    game: "Final Fantasy VII",
    name: "Tifa's Theme",
    videoLink: "https://www.youtube.com/watch?v=cO_ftxA28Y8",
    videoStyle: "Original",
    sheetMusicLink:
      "https://drive.google.com/drive/folders/1grSwc9T8W-KhsQ1Ke7Qmbo1hmsxKcLbl",
    arranged: true,
  },
  {
    game: "Chrono Trigger",
    name: "Corridors Of Time",
    videoLink: "https://www.youtube.com/watch?v=BXo3DrXHY8w",
    videoStyle: "Original",
    sheetMusicLink:
      "https://drive.google.com/drive/folders/1d7xxRg-0WrN29jzTUoTZ_bGSDjjZFpSN?usp=sharing",
    arranged: true,
  },
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
];
