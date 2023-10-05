const Person = function (name, age) {
    this.name = name
    this.age = age
    
}
Person.prototype.calcAge = function () {
    console.log(2023-this.age)
}
const armel = new Person('ARMEL', 30)
armel.calcAge()
const Hehe = function (name, age) {
    Person.call(this,name,age)
}
Hehe.prototype = Object.create(Person.prototype);
Hehe.prototype.introduce = function () {
    console.log(`hi my name is ${this.name}`)
}

const hehe = new Hehe('HEHE', 21)
hehe.introduce()
//linking prototypes

hehe.calcAge()