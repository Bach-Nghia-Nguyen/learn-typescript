var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var word = "tree";
var PI = 3.1415;
var isCold = true;
var getFullName = function (name, surname) {
    return name + " " + surname;
};
var user = {
    name: "Nghia",
    age: 25,
    getMessage: function () {
        return "Hello " + this.name;
    }
};
var user2 = {
    name: "Mike",
    getMessage: function () {
        return "Hello " + this.name;
    }
};
var popularTags = ["dragon", "coffee"];
var dragonTag = "dragon";
// Union operator
var username = "Alex";
var pageName = "1";
// console.log(typeof pageName);
var errorMessage = null;
var user3 = null;
var someProp;
var doSomething = function () {
    // void means no return
    console.log("Do something");
};
var foo = "meet";
foo = 7;
// console.log(foo.bar());
var endless = function () {
    throw "Neved";
};
// console.log(endless());
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
// console.log(typeof s1);
var s2 = vUnknown;
// console.log(typeof s2);
// console.log(vAny.foo());
// console.log(vUnknown.foo());
var pageNumber = "1";
// type assertion
var numericPageNumber = pageNumber;
// console.log(typeof numericPageNumber);
var someElement = document.querySelector(".foo");
var User = /** @class */ (function () {
    function User(firstName, lastName, middleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.unchangeableName = firstName;
    }
    // changeName(): void {
    //   this.unchangeableName = "Toan"
    // }
    User.prototype.getFullname = function () {
        return this.lastName + " " + this.middleName + " " + this.firstName;
    };
    User.maxAge = 50;
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var user7 = new User("Nghia", "Nguyen", "Bach");
// console.log(user7);
// console.log(User);
var newAd = new Admin("Huyen", "Nguyen", "Thu");
// console.log(newAd);
var searchStr = "foo";
// const hasSearchedString = any<string>(
//   (el: string) => el.contains(searchStr),
//   ["foooo", "bar", "baz"]
// );
// generic type
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user10 = {
    name: "Nghia",
    data: {
        meta: "Hellfire"
    },
    meta: "Wow"
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
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "not started";
    StatusEnum["InProgress"] = "in progress";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {}));
var notStartedStatus = StatusEnum.NotStarted;
console.log(notStartedStatus);
// console.log(StatusEnum.InProgress);
// console.log(StatusEnum.Done);
// console.log(StatusEnum.NotStarted);
