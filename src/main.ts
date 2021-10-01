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
// console.log(typeof pageName);
let errorMessage: string | null = null;

let user3: UserInterFace | null = null;

let someProp: string | number | null | undefined | string[] | object;

const doSomething = (): void => {
  // void means no return
  console.log("Do something");
};

let foo: any = "meet";
foo = 7;
// console.log(foo.bar());

const endless = (): never => {
  throw "Neved";
};

// console.log(endless());

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
// console.log(typeof s1);
let s2: string = vUnknown as string;
// console.log(typeof s2);

// console.log(vAny.foo());
// console.log(vUnknown.foo());

let pageNumber: string = "1";
// type assertion
let numericPageNumber: number = pageNumber as unknown as number;
// console.log(typeof numericPageNumber);

const someElement = document.querySelector(".foo") as HTMLInputElement;
// console.log("someElement:", someElement.type);
// someElement.addEventListener("blur", (event) => {
//   const target = event.target as HTMLInputElement;
//   console.log("event:", target.value);
// });

interface UserInterface3 {
  getFullname(): string;
}
class User implements UserInterface3 {
  protected firstName: string;
  lastName: string;
  private middleName: string;
  readonly unchangeableName: string;
  static readonly maxAge = 50;

  constructor(firstName: string, lastName: string, middleName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.unchangeableName = firstName;
  }

  // changeName(): void {
  //   this.unchangeableName = "Toan"
  // }

  getFullname(): string {
    return this.lastName + " " + this.middleName + " " + this.firstName;
  }
}

class Admin extends User {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

const user7 = new User("Nghia", "Nguyen", "Bach");
// console.log(user7);
// console.log(User);

const newAd = new Admin("Huyen", "Nguyen", "Thu");
// console.log(newAd);

const searchStr = "foo";
// const hasSearchedString = any<string>(
//   (el: string) => el.contains(searchStr),
//   ["foooo", "bar", "baz"]
// );

// generic type
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface UserInterface99<T, V> {
  name: string;
  data: T;
  meta: V;
}

const user10: UserInterface99<{ meta: string }, string> = {
  name: "Nghia",
  data: {
    meta: "Hellfire",
  },
  meta: "Wow",
};

// const user21: UserInterface99<string[]> = {
//   name: "Ming",
//   data: ["u", "yw"],
// };

// const result = addId<UserInterface99<object>>(user10);
// console.log("Result:", result);

// const statuses = {
//   notStarte: 0,
//   inProgress: 1,
//   done: 2,
// };

// console.log(statuses.inProgress);

enum StatusEnum {
  NotStarted = "not started",
  InProgress = "in progress",
  Done = "done",
}

interface Task {
  id: string;
  status: StatusEnum;
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;

console.log(notStartedStatus);

// console.log(StatusEnum.InProgress);
// console.log(StatusEnum.Done);
// console.log(StatusEnum.NotStarted);
