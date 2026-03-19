type User = {
  name: string;
  phone: string;
  mail: string;
  major: string;
  place: string;
  status: string;
};

export function getActiveUsers(): Array<User> {
  return [
    {
      name: "Ola Nordmann",
      phone: " 98767849",
      mail: "ola.nordmann@kommune.no",
      major: "MTFYMA",
      place: "Trondheim",
      status: "aktiv",
    },
    {
      name: "Kari Nordmann",
      phone: " 98767749",
      mail: "kari.nordmann@kommune.no",
      major: "MTFYMA",
      place: "Trondheim",
      status: "aktiv",
    },
    {
      name: "Trond Nordmann",
      phone: " 98766849",
      mail: "Trond.nordmann@kommune.no",
      major: "MTFYMA",
      place: "Trondheim",
      status: "aktiv",
    },
  ];
}

export function getInactiveUsers(): Array<User> {
  return [
    {
      name: "Heidi Nordmann",
      phone: " 98786849",
      mail: "Heidi.nordmann@kommune.no",
      major: "MTFYMA",
      place: "Trondheim",
      status: "inaktiv",
    },
    {
      name: "Truls Nordmann",
      phone: " 9874849",
      mail: "Truls.nordmann@kommune.no",
      major: "MTKJ",
      place: "Trondheim",
      status: "inaktiv",
    },
    {
      name: "Oda Nordmann",
      phone: " 9874649",
      mail: "Oda.nordmann@kommune.no",
      major: "MTING",
      place: "Trondheim",
      status: "inaktiv",
    },
  ];
}
