export interface Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Prefix: string;
  Position: string;
  StateID: number;
  CityID: number;
}

export const employees: Employee[] = [
  {
    ID: 1,
    FirstName: "John",
    LastName: "Heart",
    Prefix: "Mr.",
    Position: "CTO",
    StateID: 3,
    CityID: 2,
  },
  {
    ID: 2,
    FirstName: "Olivia",
    LastName: "Peyton",
    Prefix: "Mrs.",
    Position: "HR Manager",
    StateID: 2,
    CityID: 1,
  },
  {
    ID: 3,
    FirstName: "Robert",
    LastName: "Reagan",
    Prefix: "Mr.",
    Position: "IT Manager",
    StateID: 1,
    CityID: 3,
  },
  {
    ID: 4,
    FirstName: "Greta",
    LastName: "Sims",
    Prefix: "Ms.",
    Position: "Shipping Manager",
    StateID: 3,
    CityID: 1,
  },
  {
    ID: 5,
    FirstName: "Brett",
    LastName: "Wade",
    Prefix: "Mr.",
    Position: "Shipping Manager",
    StateID: 3,
    CityID: 1,
  }
];

export const states = [
  {
    ID: 1,
    Name: "Alabama",
  },
  {
    ID: 2,
    Name: "Alaska",
  },
  {
    ID: 3,
    Name: "Arizona",
  }
];

export const cities = [
  {
    ID: 1,
    Name: "Tuscaloosa",
  },
  { 
    ID: 2,
    Name: "Hoover",
  },
  {
    ID: 3,
    Name: "Dothan",
  }
];
