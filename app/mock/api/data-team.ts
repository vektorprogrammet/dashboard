export type Team = {
  id: string;
  team: string;
  opptak: boolean;
};

export const DataTeam: Array<Team> = [
  {
    id: "1",
    team: "Hovedstyret",
    opptak: false,
  },
  {
    id: "2",
    team: "IT",
    opptak: true,
  },
  {
    id: "3",
    team: "Økonomi",
    opptak: false,
  },
  {
    id: "4",
    team: "Proffelering",
    opptak: false,
  },
  {
    id: "5",
    team: "Skolekordinering",
    opptak: false,
  },
  {
    id: "6",
    team: "Evaluering",
    opptak: false,
  },
];

export const DataTeamInactive: Array<Team> = [
  {
    id: "1",
    team: "eksport",
    opptak: false,
  },
];
