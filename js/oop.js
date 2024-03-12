const output = document.getElementById('output');
const output2 = document.getElementById('output2');

function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greeting = function () {
        alert(`Hello, this is ${this.name.firstName} ${this.name.lastName}`);
    };
    this.bio = function() {
        return `${this.name.firstName} is ${this.age} years old, identifies as ${this.gender}, and is interested in ${this.interests.join(', ')}.`;
    };
}

let person1 = new Person("Jane", "Doe", 30, "Female", ["coding", "reading"]);
person1.greeting();
output.textContent = person1.bio();

let car = new Object();
car.brand = "Honda";
car.model = "Civic";
car.displayInfo = function() {
    return `${this.brand} ${this.model}`;
};

// Change properties and add methods as needed
car.model = "Accord";
output2.textContent = car.displayInfo();

let anotherCar = Object.create(car);
output2.textContent += " " + anotherCar.displayInfo();
