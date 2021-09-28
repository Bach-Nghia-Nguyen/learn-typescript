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
console.log(user2.getMessage());
