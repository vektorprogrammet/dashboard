type Assistant = {
  id: string;
  name: string;
  tlf: string;
  school: string;
  email: string;
  study: string;
  assigned: string;
  semester: string;
  day: string;
};

export const DataSokere: Array<Assistant> = 
  [...Array(100).keys()].map(
    i => ({
    id: "1",
    name: (i%3) ? "Ole Normann" : "Kari Normann",
    tlf: "12345678",
    school: "rosenborg",
    email: "ole.normann@gmail.com",
    study: "MTDT",
    assigned: "Johannes",
    semester: "vår 2024",
    department: "NTNU",
    bulk: "bolk 1 and bolk 2",
    day: ["mandag", "fredag", "lørdag", "tirsdag"][i % 3],
  }));
