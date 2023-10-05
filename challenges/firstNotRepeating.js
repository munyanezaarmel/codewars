/*
Given a string s consisting of small English letters,
 find and return the first instance of a non-repeating character in it.
 If there is no such character, return '_'
*/
function solution(s) {
    const charCount = new Map();
    
    // Count the occurrences of each character
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Find the first non-repeating character
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    
    return "_"; // Return '_' if there is no non-repeating character
}

console.log(solution("abacabad")); // Output: "c"