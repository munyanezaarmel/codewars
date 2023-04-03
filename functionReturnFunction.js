const greet=function(greeting){
    return function(name){
        console.log(`${name}${greeting}`)
    }
}
const greetHello=greet('hello')
greetHello('armel')
greetHello('munyaneza')
greet('hello')('jonas')
//arrow function
const greetArrow = greeting => name => console.log(`${greeting}${name}`)
greetArrow('hello')('arrow')

