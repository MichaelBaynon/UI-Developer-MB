let test = document.querySelector(".about");

test.addEventListener(
  "mouseenter",
  function(event) {
    event.target.style.color = "#6EBDDB";

    // setTimeout(function () {
    //     event.target.style.color = "";
    // }, 500);
  },
  false
);

test.addEventListener(
  "mouseover",
  function(event) {
    event.target.style.color = "white";

    setTimeout(function() {
      event.target.style.color = "";
    }, 1000);
  },
  false
);

// //////////////////////////////////////////

// let person = new Object();

// person.name = "Michael";
// person.job = "UI";

// console.log(person.name);

// let person2 = {
//   name: "Emmanuel",
//   job: "UI"
// };

// console.log(person2);

function Person(name, job, age) {
  this.name = name;
  this.job = job;
  this.age = age;
  this.updateAge = function() {
    return ++this.age;
  };
}

let person01 = new Person("Michael", "UI", "67");

console.log(person01.updateAge());

// array method

const people = [
  { name: "Michael", job: "UserInterface" },
  { name: "Emmanuel", job: "UserInterface" },
  { name: "Brooks", job: "TeamLead" },
  { name: "Casey", job: "FrontEnd" },
  { name: "Kobe", job: "iOS" },
  { name: "Jeff", job: "BackEnd" }
];

const filteredPeople = people.filter(person => {
  return person.job === "UserInterface";
});

console.log(filteredPeople);
