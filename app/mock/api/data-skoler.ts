type School = {
  name: string,
  contact: string,
  phone: string,
  email: string,
  language: string
}

export function getActiveSchools(): Array<School> {
  return [
    {
      name: "Blussvoll",
      contact: "John Doe",
      phone: "988 01 888",
      email: "john.doe@ou.trondheim.kommune.no",
      language: "Norsk"
    },
    {
      name: "Birrale",
      contact: "John Doe",
      phone: "988 01 888",
      email: "john.doe@birrale.no",
      language: "Internasjonal"
    },
    {
      name: "Charlottenlund",
      contact: "John Doe",
      phone: "988 01 888",
      email: "john.doe@ou.trondheim.kommune.no",
      language: "Norsk"
    },
    {
      name: "Markaplassen",
      contact: "John Doe",
      phone: "988 01 888",
      email: "john.doe@ou.trondheim.kommune.no",
      language: "Norwegian"
    },
    {
      name: "Nidaros idrettsungdomsskole",
      contact: "John Doe",
      phone: "988 01 888",
      email: "john.doe@ou.trondheim.kommune.no",
      language: "Norwegian"
    },
    {
      name: "Rosenborg",
      contact: "John Doe",
      phone: "988 01 888",
      email: "john.doe@ou.trondheim.kommune.no",
      language: "Norwegian"
    },
    {
      name: "Ugla",
      contact: "John Doe",
      phone: "988 01 888",
      email: "john.doe@ou.trondheim.kommune.no",
      language: "Norwegian"
    },
    {
      name: "Trondheim idrettsungdomsskole",
      contact: "John Doe",
      phone: "988 01 888",
      email: "john.doe@ou.trondheim.kommune.no",
      language: "Norwegian"
    },
    {
      name: "Sunnland",
      contact: "John Doe",
      phone: "988 01 888",
      email: "john.doe@ou.trondheim.kommune.no",
      language: "Norwegian"
    },
    {
      name: "Lade",
      contact: "John Doe",
      phone: "988 01 888",
      email: "john.doe@ou.trondheim.kommune.no",
      language: "Norwegian"
    },
    {
      name: "Sjetne",
      contact: "John Doe",
      phone: "988 01 888",
      email: "john.doe@ou.trondheim.kommune.no",
      language: "Norwegian"
    },
    {
      name: "Hoeggen",
      contact: "John Doe",
      phone: "988 01 888",
      email: "john.doe@ou.trondheim.kommune.no",
      language: "Norwegian"
    }
  ];
}

export function getInactiveSchools(): Array<School> {
  return ([
    {
      name: "Åsheim",
      contact: "John Doe",
      phone: "988 01 888",
      email: "john.doe@ou.trondheim.kommune.no",
      language: "Norsk"
    },
    {
      name: "Blussvoll",
      contact: "John Doe",
      phone: "988 01 888",
      email: "john.doe@ou.trondheim.kommune.no",
      language: "Norsk"
    },
    {
      name: "Flatåsen",
      contact: "John Doe",
      phone: "988 01 888",
      email: "john.doe@ou.trondheim.kommune.no",
      language: "Norsk"
    }

  ])
}
