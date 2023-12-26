const mergeAlternately = function (word1, word2) {
    const answer = [];
    let i = 0;
    let j = 0;

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            answer.push(word1[i]);
            i++;
        }

        if (j < word2.length) {
            answer.push(word2[j]);
            j++;
        }
    }

    return answer.join('');
};

console.log(mergeAlternately("ab", "p")); // Output: "apbqcr"
