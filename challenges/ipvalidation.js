/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
IPs should be considered 
valid if they consist of four octets, with values between 0 and 255, inclusive.
*/
function isValidIP(str) {
  const octets = str.split(".");

  if (octets.length !== 4) {
    return false;
  }

  for (let i = 0; i < octets.length; i++) {
    const octet = octets[i];
    if (!/^\d{1,3}$/.test(octet) || octet < 0 || octet > 255) {
      return false;
    }

    if (octet.length > 1 && octet[0] === "0") {
      return false;
    }
  }

  return true;
}

// Test cases
console.log(isValidIP("1.2.3.4")); // true
console.log(isValidIP("123.45.67.89")); // true
console.log(isValidIP("1.2.3")); // false
console.log(isValidIP("1.2.3.4.5")); // false
console.log(isValidIP("123.456.78.90")); // false
console.log(isValidIP("123.045.067.089")); // false
console.log(isValidIP("01.02.03.04")); // false (leading zeros)
