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

console.log(user2.getMessage());
