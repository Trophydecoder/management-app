export const players =[
    {
    id: 2,
    firstname: "Lesedi",
    lastname: "Masike",
    position: "Midfielder",
    age: "12 years old",
    guardian_name: "Dineo Masike",
    guardian_phone: "+27831234567"
  },
  {
    id: 1,
    firstname: "Onkabetse",
    lastname: "Hlogwane",
    position: "Striker",
    age: "15 years old",
    guardian_name: "Kagiso Hlogwane",
    guardian_phone: "+27821234567"
  },
  {
    id: 7,
    firstname: "Reabetswe",
    lastname: "Molokomme",
    position: "Left back",
    age: "9 years old",
    guardian_name: "Lerato Molokomme",
    guardian_phone: "+27891234567"
  },
  {
    id: 6,
    firstname: "Nthabi",
    lastname: "Hlogwane",
    position: "Right wing",
    age: "18 years old",
    guardian_name: "Nthabiseng Hlogwane",
    guardian_phone: "+27871234567"
  },
  {
    id: 8,
    firstname: "Sithembiso",
    lastname: "Mdawе",
    position: "Striker",
    age: "23 years old",
    guardian_name: "Seipеi Mdawе",
    guardian_phone: "+27683887691"
  },
  {
    id: 3,
    firstname: "Amogelang",
    lastname: "Mdawе",
    position: "Goalkeeper",
    age: "18 years old",
    guardian_name: "Simon Mdawе",
    guardian_phone: "+27841234567"
  },
  {
    id: 4,
    firstname: "Lethabo",
    lastname: "Ntombela",
    position: "Right back",
    age: "14 years old",
    guardian_name: "Tebogo Ntombela",
    guardian_phone: "+27851234567"
  },
  {
    id: 5,
    firstname: "Sihle",
    lastname: "Mmotsa",
    position: "Defender",
    age: "9 years old",
    guardian_name: "Thabo Mmotsa",
    guardian_phone: "+27861234567"
  }
];
export interface Player {
    id: number;
    firstname: string;
    lastname: string;
    position: string;
    age: string;
    guardian_name: string;
    guardian_phone: string;
  }
      
      //  an array to hold players (if needed)
      export const playerslist: Player[] = []