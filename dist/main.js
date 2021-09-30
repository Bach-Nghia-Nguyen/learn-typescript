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
// console.log("someElement:", someElement.type);
someElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event:", target.value);
});
