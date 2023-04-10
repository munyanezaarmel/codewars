const movements={
    name: "Munyaneza Armel",
    movements: [20, 30, 50, 60, 90, 22],
    get mov() {
        return movements.movements.slice(-1).pop()
    },
    set mov(mov) {
        return this.movements.push(mov)
    }
}
console.log(movements.mov)
movements.movements.mov = 100
console.log(movements.movements)
