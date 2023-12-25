var convertTemperature = function(celsius) {
    const answer=[]
    const kelvin=celsius + 273.15
     const Fahrenheit = celsius * 1.80 + 32.00
     answer.push(kelvin,Fahrenheit)
     return answer
};
console.log(convertTemperature(122.11))