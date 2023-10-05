/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/
const calcAverageHumanAge = function (ages) {
 return ages.map(dogAge => (dogAge < 2 ? 2 * dogAge:16 + dogAge * 4)) 
.filter(el=>el>=18).reduce((acc,curr,i,arr)=>acc+curr/arr.length,0);  
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
