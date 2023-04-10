class Meme{
    constructor(name, author) {
        this.name = name
        this.author=author
    }
    introduce() {
        console.log(`hi my name is ${this.name} i am the ${this.author}`)
    }
}
class Fun extends Meme{
    constructor(name, author, place) {
        super(name, author)
        this.place=place
 }
}
const hi = new Fun('armel', 'munyaneza','nyamurambo')
console.log(hi.introduce())
console.log(hi)