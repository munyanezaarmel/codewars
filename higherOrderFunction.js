const removeSpace=function(str){
    return str.replace(/ /g,'')
}
const capitalize = function (str) {
    const [first, ...others] = str.split(' ')
    return first.toUpperCase() + others
    
}
const transform = function (str, fn) {
    console.log(`the original string is ${str}`)
    console.log(`the transformed string is ${fn(str)}`)
    console.log(`the was done by ${fn.name}`)

}
transform('javascript is the best',capitalize)
transform('javascript is the best',removeSpace)