var selfDividingNumbers = function(left, right) {
    const selfDividing = [];

    for (let i = left; i <= right; i++) {
        const digits = i.toString().split('');
        let isSelfDividing = true;

        for (let digit of digits) {
            if (i % parseInt(digit) !== 0) {
                isSelfDividing = false;
                break; 
            }
        }

        if (isSelfDividing) {
            selfDividing.push(i);
        }
    }

    return selfDividing;
};

console.log(selfDividingNumbers(47, 85));
