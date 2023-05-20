/*
For inputString = "aabaa", the output should be
solution(inputString) = true;
For inputString = "abac", the output should be
solution(inputString) = false;
For inputString = "a", the output should be
solution(inputString) = true.
*/
function solution(inputString) {
    return inputString.split('').reverse().join('')=== inputString
}
console.log(solution("aabaa"));