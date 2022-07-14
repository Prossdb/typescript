"use strict";
var inputName = document.querySelector('#name');
var inputAge = document.querySelector('#age');
var inputForm = document.querySelector('form');
var greeting = document.querySelector('.greeting');
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hi, my name is ".concat(this.name, " and i am ").concat(this.age, ".");
    };
    return Person;
}());
inputForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
    inputForm.reset();
});
