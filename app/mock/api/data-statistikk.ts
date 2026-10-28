type BarChartDataItem = {
  id: string;
  label: string;
  count: number;
};

type ChartDataItem = {
  id: string;
  label: string;
  count: number;
};

export function getApplicantData(): ChartDataItem[] {
  return [
    { id: "applicants", label: "Tatt opp", count: 104 },
    { id: "new", label: "Nye søkere", count: 100 },
    { id: "returning", label: "Tidligere søkere", count: 4 }
  ];
}

export function getGenderStatistics(): BarChartDataItem[] {
  return [
    { id: "male", label: "Menn", count: 44 },
    { id: "female", label: "Kvinner", count: 50 },
    { id: "other", label: "Annet", count: 5 },
    { id: "unknown", label: "Ikke oppgitt", count: 5 },
  ];
}

export function getStudyYearData(): BarChartDataItem[] {
  return [
    { id: "firstYear", label: "1. år", count: 56 },
    { id: "secondYear", label: "2. år", count: 29 },
    { id: "thirdYear", label: "3. år", count: 7 },
    { id: "fourthYear", label: "4. år", count: 11 },
    { id: "fifthYear", label: "5. år", count: 1 },
  ];
}

export function getDiscoveryData(): BarChartDataItem[] {
  return [
    { id: "classroom", label: "Blesting", count: 39 },
    { id: "stand", label: "Stand", count: 35 },
    { id: "none", label: "Ingen", count: 28 },
    { id: "posters", label: "Plakater / flyers", count: 18 },
    { id: "friends", label: "Bekjente", count: 11 },
    { id: "online", label: "Nett / infomail", count: 8 },
    { id: "board", label: "Bekjente i styret", count: 2 },
  ];
}

// Illustrative counts for the bar charts, until API data is available.
export function getStudyData(): BarChartDataItem[] {
  return [
    { id: "other", label: "Annet", count: 9 },
    { id: "bbi", label: "BBI", count: 2 },
    { id: "bdigsec", label: "BDIGSEC", count: 0 },
    { id: "beldig", label: "BELDIG", count: 0 },
    { id: "bfy", label: "BFY", count: 3 },
    { id: "bgeol", label: "BGEOL", count: 0 },
    { id: "biais", label: "BIAIS", count: 1 },
    { id: "bibygg", label: "BIBYGG", count: 4 },
    { id: "bidata", label: "BIDATA", count: 4 },
    { id: "bielektro", label: "BIELEKTRO", count: 1 },
    { id: "biforen", label: "BIFOREN", count: 3 },
    { id: "bihav", label: "BIHAV", count: 0 },
    { id: "bimaskin", label: "BIMASKIN", count: 7 },
    { id: "bit", label: "BIT", count: 0 },
    { id: "bkj", label: "BKJ", count: 3 },
    { id: "bmat", label: "BMAT", count: 4 },
    { id: "bøa", label: "BØA", count: 0 },
    { id: "bsøk", label: "BSØK", count: 0 },
    { id: "ftforkurs", label: "FTFORKURS", count: 0 },
    { id: "fthingkj", label: "FTHINGKJ", count: 1 },
    { id: "fthinglog", label: "FTHINGLOG", count: 1 },
    { id: "fthingmat", label: "FTHINGMAT", count: 0 },
    { id: "ftrealfag", label: "FTREALFAG", count: 0 },
    { id: "itbaitbedr", label: "ITBAITBEDR", count: 0 },
    { id: "maar", label: "MAAR", count: 0 },
    { id: "mbiot5", label: "MBIOT5", count: 1 },
    { id: "mlreal", label: "MLREAL", count: 2 },
    { id: "msit", label: "MSIT", count: 0 },
    { id: "msivøk5", label: "MSIVØK5", count: 0 },
    { id: "msøk/5", label: "MSØK/5", count: 0 },
    { id: "mtbygg", label: "MTBYGG", count: 5 },
    { id: "mtdesig", label: "MTDESIG", count: 2 },
    { id: "mtdt", label: "MTDT", count: 2 },
    { id: "mtelsys", label: "MTELSYS", count: 4 },
    { id: "mtenerg", label: "MTENERG", count: 3 },
    { id: "mtfyma", label: "MTFYMA", count: 10 },
    { id: "mtgeort", label: "MTGEORT", count: 7 },
    { id: "mting", label: "MTING", count: 0 },
    { id: "mtinggeo", label: "MTINGGEO", count: 3 },
    { id: "mtiøt", label: "MTIØT", count: 1 },
    { id: "mtkj", label: "MTKJ", count: 1 },
    { id: "mtkom", label: "MTKOM", count: 1 },
    { id: "mtmart", label: "MTMART", count: 1 },
    { id: "mtmaskin", label: "MTMASKIN", count: 6 },
    { id: "mtmt", label: "MTMT", count: 1 },
    { id: "mtnano", label: "MTNANO", count: 4 },
    { id: "mttk", label: "MTTK", count: 3 },
    { id: "åbikj", label: "ÅBIKJ", count: 2 },
    { id: "åøkadm", label: "ÅØKADM", count: 0 },
    { id: "åsøk", label: "ÅSØK", count: 0 },
  ];
}

export function getAdmissionData(): BarChartDataItem[] {
  return [
    { id: "admitted", label: "Tatt opp", count: 64 },
    { id: "not_admitted", label: "Ikke tatt opp", count: 14 },
    { id: "canceled", label: "Kansellerte intervjuer", count: 25 }
  ];
}

export function getAdmissionGenderData(): BarChartDataItem[] {
  return [
    { id: "male", label: "Menn", count: 31 },
    { id: "female", label: "Kvinner", count: 33 },
    { id: "other", label: "Annet", count: 1 },
    { id: "unknown", label: "Ikke oppgitt", count: 2 },
  ]
}
