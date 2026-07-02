export interface TrophyEntry {
  id: string;
  count: number;
  years: string;
  icon: "world-cup" | "ballon-dor" | "champions" | "liga" | "copa-america" | "cup" | "medal" | "boot";
}

export const trophyEntries: TrophyEntry[] = [
  { id: "worldCup", count: 1, years: "2022", icon: "world-cup" },
  { id: "ballonDor", count: 8, years: "2009–2023", icon: "ballon-dor" },
  { id: "copaAmerica", count: 2, years: "2021, 2024", icon: "copa-america" },
  { id: "championsLeague", count: 4, years: "2006, 2009, 2011, 2015", icon: "champions" },
  { id: "laLiga", count: 10, years: "2005–2018", icon: "liga" },
  { id: "copaDelRey", count: 7, years: "2009–2021", icon: "cup" },
  { id: "goldenShoe", count: 6, years: "2009, 2010, 2011, 2012, 2019, 2021", icon: "boot" },
  { id: "olympicGold", count: 1, years: "2008", icon: "medal" },
];
