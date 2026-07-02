export interface StatEntry {
  id: string;
  value: number;
  suffix?: string;
  max: number;
}

// Headline hero counters
export const heroStats: StatEntry[] = [
  { id: "goals", value: 850, suffix: "+", max: 900 },
  { id: "assists", value: 380, suffix: "+", max: 400 },
  { id: "matches", value: 1080, suffix: "+", max: 1100 },
  { id: "trophies", value: 45, suffix: "+", max: 50 },
];

// Comparative record bars for the GOAT Stats module
export const recordStats: StatEntry[] = [
  { id: "ballonDor", value: 8, max: 8 },
  { id: "calendarYearGoals", value: 91, max: 91 },
  { id: "laLigaGoals", value: 474, max: 474 },
  { id: "clubGoals", value: 672, max: 672 },
  { id: "hatTricks", value: 61, max: 61 },
  { id: "copaAmericaGoals", value: 17, max: 17 },
  { id: "assistsAllTime", value: 380, max: 380 },
  { id: "freeKicks", value: 65, max: 65 },
];
