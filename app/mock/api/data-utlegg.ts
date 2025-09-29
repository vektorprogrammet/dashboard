type Utlegg = {
  id: string;
  region: string;
  date: string;
  category: string;
  sum: number;
  receipt: string;
  status: string;
};

export function getUtlegg(): Array<Utlegg> {
  return [
    {
      id: "1",
      region: "Trondheim",
      date: "12.02.2025",
      category: "Pizzabudsjett",
      sum: 200,
      receipt:
        "https://vektorprogrammet.no/images/receipts/645e8fa099011.jpeg?v=1683918752",
      status: "Refundert",
    },
    {
      id: "2",
      region: "Ås",
      date: "28.02.2025",
      category: "Pizzabudsjett",
      sum: 300,
      receipt:
        "https://vektorprogrammet.no/images/receipts/645e8fa099011.jpeg?v=1683918752",
      status: "Refundert",
    },
    {
      id: "3",
      region: "Trondheim",
      date: "20.03.2025",
      category: "Pizzabudsjett",
      sum: 300,
      receipt: "",
      status: "Under behandling",
    },
    {
      id: "4",
      region: "Trondheim",
      date: "20.03.2025",
      category: "Pizzabudsjett",
      sum: 300,
      receipt: "",
      status: "Under behandling",
    },
    {
      id: "5",
      region: "Trondheim",
      date: "20.03.2025",
      category: "Pizzabudsjett",
      sum: 300,
      receipt: "",
      status: "Under behandling",
    },
    {
      id: "6",
      region: "Trondheim",
      date: "20.03.2025",
      category: "Pizzabudsjett",
      sum: 300,
      receipt: "",
      status: "Under behandling",
    },
    {
      id: "7",
      region: "Trondheim",
      date: "20.03.2025",
      category: "Pizzabudsjett",
      sum: 300,
      receipt: "",
      status: "Under behandling",
    },
  ];
}

export function getCategories(): Array<string> {
  return ["Pizzabudsjett", "Teamsosial"];
}

export function getRegions(): Array<string> {
  return ["Ås", "Bergen", "Trondheim"];
}
