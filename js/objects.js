const output = document.getElementById('output');

let person = {
    name: {
        firstName: "Priyansh",
        lastName: "Thakar"
    },
    age: 80,
    gender: "Male",
    address: {
        streetNo: 100,
        streetName: "Georgian Drive",
        city: "Barrie"
    },
    interests: ["swimming", "painting", "coding"],
    greetings: function () {
        alert(`Hello, My name is ${this.name.firstName}`);
    },
    bio: function () {
        return `The interest of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests.join(', ')}`;
    }
};

person.greetings(); // You can call this method to see the greeting alert.
output.textContent = person.bio(); // Displays the biography in the <p id="output"></p>.

// Modifications
person.age = 18; // Changing the age
person.eyeColor = "Green"; // Adding a new property

// Adding a new method
person.goodbye = function () {
    alert(`This is ${this.name.firstName} signing off!`);
};

// Dynamically setting properties
let key = "hairColor";
let value = "Black";
person[key] = value;

// Creating additional objects
let person1 = {
    name: "P1",
    hello: function () {
        alert(`This is ${this.name}`);
    }
};

let person2 = {
    name: "P2",
    hello: function () {
        alert(`This is ${this.name}`);
    }
};
