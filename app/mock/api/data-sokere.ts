type Soker = {
  id: string;
  name: string;
  tlf: string;
  school: string;
  email: string;
  study: string;
  year: string;
  assigned: string;
};

export const DataSokere: Array<Soker> = 
  [...Array(100).keys()].map(
    () => ({
    id: "1",
    name: "Ole Normann",
    tlf: "12345678",
    school: "NTNU",
    email: "ole.normann@gmail.com",
    study: "MTDT",
    year: "3",
    assigned: "Johannes",
  }));
