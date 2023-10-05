// const greet = function (greet) {
//     return function (name) {
//         console.log(`${greet}${name}`)
//     }
// }
// console.log(greet('hi'))

const openings = {
  name: "rwanfa",
  age: 17,
  height: 1.92,
  book(fname, lastname, mass) {
    console.log(`${this.name} ${this.height} ${this.age}`);
  },
};
const book = openings.book
const rafiki = {
    name: "rafiki",
    age: 21,
    height:1.54
}
 book.call(rafiki,"rafiki",21,1.6)
