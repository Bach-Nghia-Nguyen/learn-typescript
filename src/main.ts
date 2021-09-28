let word: string = "tree";
const PI: number = 3.1415;
let isCold: boolean = true;

const getFullName = (name: string, surname: string): string => {
  return name + " " + surname;
};

// console.log(getFullName("Nghia", "Nguyen"));

interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

const user: UserInterface = {
  name: "Nghia",
  age: 25,
  getMessage() {
    return "Hello " + this.name;
  },
};

const user2: UserInterface = {
  name: "Mike",
  getMessage() {
    return "Hello " + this.name;
  },
};

// console.log(user2.getMessage());

// type alias
type ID = string;
type PopularTag = string;
type PossiblePopularTag = PopularTag | null;
interface UserInterFace {
  id: ID;
  name: string;
  surname: string;
}

const popularTags: PopularTag[] = ["dragon", "coffee"];
const dragonTag: PossiblePopularTag = "dragon";

// Union operator
let username: string = "Alex";
let pageName: string | number = "1";
console.log(typeof pageName);
let errorMessage: string | null = null;

let user3: UserInterFace | null = null;

let someProp: string | number | null | undefined | string[] | object;
