"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { useNavigate } from "react-router";

type TabItem = {
  label: React.ReactNode;
  to: string; // route path
  value: string;
};

type RoutingTabsProps = {
  tabs?: Array<TabItem>;
  defaultValue?: string;
};

// Provide an array of { label, to } and the component will navigate when a tab is selected.
export function RoutingTabs({ tabs, defaultValue }: RoutingTabsProps) {
  const navigate = useNavigate();

  const defaultTabs: Array<TabItem> = React.useMemo(
    () => [
      { label: "Søkere", to: "dashboard/sokere", value: "sokere" },
      {
        label: "Tidligere assistenter",
        to: "dashboard/tidligere-assistenter",
        value: "tidligere-assistenter",
      },
      {
        label: "Intervjufordeling",
        to: "dashboard/intervjufordeling",
        value: "intervjufordeling",
      },
      { label: "Intervjuer", to: "dashboard/intervjuer", value: "intervjuer" },
    ],
    [],
  );

  const items = tabs ?? defaultTabs;

  const handleTabChange = (value: string) => {
    const item = items.find((tab) => (tab.value ?? tab.to) === value);
    if (item) navigate(item.to);
  };

  return (
    <Tabs
      value={defaultValue}
      className="mb-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      onValueChange={handleTabChange}
    >
      <div className="flex justify-center">
        <TabsList className="my-5 flex flex-wrap justify-center">
          {items.map((tab) => (
            <TabsTrigger
              key={tab.to}
              value={tab.value ?? tab.to}
              className="hover:text-black"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
    </Tabs>
  );
}
