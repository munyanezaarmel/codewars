/*
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
*/
function solution(number) {
    let sum=0
    if (number < 0) {
    return 0
    }
    else {
        for (let i = 1; i < number; i++){
            if (i % 3 === 0 || i % 5 === 0) {
                sum+=i
            }
        }
        return sum
    }
}
console.log(solution(10))