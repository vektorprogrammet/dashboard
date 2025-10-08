import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTeam } from "../mock/api/data-team";

export type Team = {
  id: string;
  team: string;
  opptak: boolean;
};

export const columns: Array<ColumnDef<Team>> = [
  {
    accessorKey: "team",
    header: "Team",
  },
  {
    accessorKey: "opptak",
    header: "Opptak",
  },
];

export default function Team() {
  return (
    <main className="flex h-full w-screen flex-col items-center justify-center gap-5 overflow-clip p-1 md:w-full md:p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Team</TableHead>
            <TableHead className="text-right">Opptak</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DataTeam.map((t) => (
            <TableRow key={t.id}>
              <TableCell>{t.team}</TableCell>
              <TableCell className="text-right">
                {t.opptak ? "Åpent" : "Stengt"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
