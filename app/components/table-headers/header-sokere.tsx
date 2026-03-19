import { columnCommon } from "@/components/table-headers/column-common";
import { columnPerson } from "@/components/table-headers/column-person";

export const headerSokere = [
  columnCommon,
  ...columnPerson,
  {
    accessorKey: "assigned",
    header: "Tildelt",
  },  
];
