"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { useMediaQuery } from "@mantine/hooks";
import { Component } from "lucide-react";
import { useState } from "react";

type Item = {
  value: string;
  label: string;
};

type ComboBoxProps = {
  items: Array<Item>;
  value: string;
  onChange?: (value: string) => void;
  defaultItem?: Item;
  className?: string;
};

export function ComboBoxResponsive({
  items,
  value,
  onChange,
  defaultItem,
  className,
}: ComboBoxProps) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const selectedItem =
    items.find((item) => item.value === value) ?? defaultItem ?? null;

  function ItemList() {
    return (
      <Command>
        <CommandInput placeholder="Filter items..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {items.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(val) => {
                  onChange?.(val);
                  setOpen(false);
                }}
              >
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    );
  }

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn("min-w-min justify-start", className)}
          >
            <Component />
            {selectedItem ? <>{selectedItem.label}</> : <> Velg</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <ItemList />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className={cn("min-w-min justify-start", className)}
        >
          <Component />
          {selectedItem ? <>{selectedItem.label}</> : <>Velg</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <ItemList />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
