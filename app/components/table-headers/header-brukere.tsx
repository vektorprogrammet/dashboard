import { columnCommon } from "@/components/table-headers/column-common";
import { columnPerson } from "@/components/table-headers/column-person";

export const headerBrukere = [
  columnCommon,
  ...columnPerson,
  { accessorKey: "major", header: "Studie" },
  { accessorKey: "place", header: "Avdeling" },
];
