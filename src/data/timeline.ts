export interface TimelineEntry {
  id: string;
  period: string;
  side: "left" | "right";
}

export const timelineEntries: TimelineEntry[] = [
  { id: "grandoli", period: "1992 – 2000", side: "left" },
  { id: "hormone", period: "2000 – 2003", side: "right" },
  { id: "arrival", period: "2003 – 2004", side: "left" },
  { id: "barcelona", period: "2004 – 2021", side: "right" },
  { id: "psg", period: "2021 – 2023", side: "left" },
  { id: "worldcup", period: "18.12.2022", side: "right" },
  { id: "miami", period: "2023 – Present", side: "left" },
];
