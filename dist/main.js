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
console.log(user7);
console.log(User);
var newAd = new Admin("Huyen", "Nguyen", "Thu");
console.log(newAd);
