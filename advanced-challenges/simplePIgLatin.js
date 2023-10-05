/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !


*/

function pigIt(str){
    const splitedArray=str.split(" ")
 const finalArray= splitedArray.map(el=>el.slice(1).concat(`${el.slice(0,1)}`))
  return finalArray.map(function(el){
    var punctuationPattern = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
     if(!punctuationPattern.test(el)){
        return el.concat("ay")
     }
     return el
  
  }).join(" ")
}
console.log(pigIt("Hello world !"))