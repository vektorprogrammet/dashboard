import { ComboBoxResponsive } from "@/components/combobox";
import { DataTable } from "@/components/data-table-utlegg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calender";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { defineMeta, filterFn } from "@/lib/filters";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

import { Checkbox } from "@/components/ui/checkbox";
import {
  ColumnDef,
  createColumnHelper,
  Row,
  Table,
} from "@tanstack/react-table";
import { format } from "date-fns";
import { CalendarIcon, CircleDotDashedIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { getCategories, getRegions, getUtlegg } from "../mock/api/data-utlegg";

export type Utlegg = {
  id: string;
  region: string;
  date: string;
  category: string;
  sum: number;
  receipt: string;
  status: string;
};

const columnHelper = createColumnHelper<Utlegg>();

export const columns: ColumnDef<Utlegg, any>[] = [
  {
    id: "select",
    header: ({ table }: { table: Table<Utlegg> }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }: { row: Row<Utlegg> }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  columnHelper.accessor("id", {
    header: "Id",
  }),
  columnHelper.accessor("date", {
    header: "Utleggsdato",
    filterFn: filterFn("date"),
    meta: defineMeta((row) => row.date, {
      displayName: "Utleggsdato",
      type: "date",
      icon: CircleDotDashedIcon,
    }),
  }),
  columnHelper.accessor("category", {
    header: "Kategori",
    filterFn: filterFn("option"),
    meta: defineMeta((row) => row.category, {
      displayName: "Kategori",
      type: "option",
      options: getCategories().map((category) => ({
        value: category,
        label: category,
      })),
      icon: CircleDotDashedIcon,
    }),
  }),
  columnHelper.accessor("region", {
    header: "Region",
    filterFn: filterFn("option"),
    meta: defineMeta((row) => row.region, {
      displayName: "Region",
      type: "option",
      options: getRegions().map((region) => ({
        value: region,
        label: region,
      })),
      icon: CircleDotDashedIcon,
    }),
  }),
  columnHelper.accessor("sum", {
    header: "Sum",
    filterFn: filterFn("number"),
    meta: defineMeta((row) => row.sum, {
      displayName: "Sum",
      type: "number",
      icon: CircleDotDashedIcon,
    }),
  }),
  columnHelper.accessor("receipt", {
    header: "Kvittering",
    cell: ({ row }) => {
      const url = row.original.receipt;
      return (
        url.length > 0 && (
          <Dialog>
            <DialogTrigger asChild>
              <button className="underline text-blue-600 hover:text-blue-800 text-sm">
                Vis kvittering
              </button>
            </DialogTrigger>
            <DialogContent className="w-auto max-w-none p-1">
              <img
                src={url}
                alt="Kvittering"
                className="max-h-[80vh] max-w-full rounded-md"
              />
            </DialogContent>
          </Dialog>
        )
      );
    },
  }),
  columnHelper.accessor("status", {
    header: "Status",
    filterFn: filterFn("option"),
    meta: defineMeta((row) => row.status, {
      displayName: "Status",
      type: "option",
      icon: CircleDotDashedIcon,
      options: [
        { label: "Refundert", value: "Refundert" },
        { label: "Under behandling", value: "Under behandling" },
      ],
    }),
  }),
];

const formSchema = z.object({
  date: z.date(),
  category: z.string(),
  region: z.string(),
  sum: z.coerce.number(),
  receipt: z.instanceof(File).optional(),
  accountNumber: z
    .string()
    .min(1, { message: "Kontonummer er påkrevd" })
    .regex(/^(\d{4}[ .]?\d{2}[ .]?\d{5}|\d{11})$/, {
      message: "Ugyldig kontonummer-format",
    }),
});

export default function Utlegg() {
  const utlegg = getUtlegg();
  const [openForm, setOpenForm] = useState(false);
  const regions = getRegions().map((region) => ({
    value: region,
    label: region,
  }));
  const categories = getCategories().map((category) => ({
    value: category,
    label: category,
  }));

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      region: "",
      accountNumber: "",
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    setOpenForm(false);
  }

  return (
    <section className="flex flex-col items-center">
      <h1 className="font-semibold text-2xl mb-10">Mine utlegg</h1>
      <div className="flex md:flex-row flex-col mb-10 w-5/6 flex-start space-x-4">
        <div className="md:w-1/2">
          <Button
            variant="outline"
            className="my-4"
            onClick={() => setOpenForm(!openForm)}
          >
            {openForm ? <p>- Skjul skjema</p> : <p>+ Nytt utlegg</p>}
          </Button>
          <div
            className={cn(
              "transition-all duration-320 overflow-hidden",
              openForm ? "max-h-[1000px] opacity-100" : "max-h-0"
            )}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-gray-50 rounded-lg p-6 space-y-8"
              >
                <FormField
                  control={form.control}
                  name="sum"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Utleggsbeløp</FormLabel>
                      <FormDescription>
                        Beløpet må stemme nøyaktig med den på kvitteringen hvis
                        hele beløpet skal dekkes. Hvis du kun får dekket deler
                        av summen, skriv beløpet som skal dekkes.
                      </FormDescription>
                      <FormControl>
                        <div className="relative">
                          <Input className="bg-white" {...field} />
                          <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                            kr
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage className="text-black" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Utleggsdato</FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-auto pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Velg en dato</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("2022-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="region"
                    render={() => (
                      <FormItem>
                        <FormLabel>Region</FormLabel>
                        <FormControl>
                          <Controller
                            name="region"
                            control={form.control}
                            render={() => (
                              <ComboBoxResponsive items={regions} />
                            )}
                          />
                        </FormControl>
                        <FormMessage className="text-black" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={() => (
                      <FormItem>
                        <FormLabel>Kategori</FormLabel>
                        <FormControl>
                          <Controller
                            name="category"
                            control={form.control}
                            render={() => (
                              <ComboBoxResponsive items={categories} />
                            )}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="accountNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Utbetalingskonto</FormLabel>
                      <FormControl>
                        <Input className="bg-white" {...field} />
                      </FormControl>
                      <FormMessage className="text-black" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="receipt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="picture">
                        Last opp kvittering
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="picture"
                          type="file"
                          accept="image/png,image/jpeg"
                          className="bg-white"
                          onChange={(e) => {
                            if (!e.currentTarget.files) return;
                            if (e.currentTarget.files.length <= 0) return;
                            const file = e.currentTarget.files[0];
                            if (
                              file.type !== "image/jpeg" &&
                              file.type !== "image/png"
                            )
                              return;
                            field.onChange(file);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Legg til utlegg</Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-6 ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Hva kan jeg få refundert?</AccordionTrigger>
              <AccordionContent>
                Du kan typisk få refusjon for bussbilletter til og fra skole,
                kaffeposer til stand, kake til arrangementer og lignende. Det er
                ellers lurt å høre med en leder om du kan få utlegget ditt
                refundert før du legger ut. Om du har spørsmål kan du kontakte
                økonomiteamet på okonomi@vektorprogrammet.no.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <section className="w-5/6 my-4">
        <DataTable columns={columns} data={utlegg} />
      </section>
    </section>
  );
}
