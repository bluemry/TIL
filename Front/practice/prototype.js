function test(name) {
  this.name = name;
  this.method = () => {
    return `${this.name} method`;
  };
}
function test2(name) {
  this.name = `i'm test2 ${name}`;
}

let a = new test("kim");
let b = new test("lee");
test.prototype.name2 = "test1 prototype";
let c = new test2("park");

c.__proto__ = a.constructor.prototype;

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

Person.prototype.greeting = function () {
  alert("Hi! I'm " + this.name.first + ".");
};

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  // Person.prototype.constructor.call(this);
  // 또는 Teacher.prototype = Object.create(Person.prototype) 하고, Teacher.prototype.constructor = Teacher
  this.subject = subject;
}

console.log(Person.prototype.constructor);
console.log(Teacher.prototype.constructor);
