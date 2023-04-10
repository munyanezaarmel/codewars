const PersonProto = {
    calcAge() {
        console.log(2024-this.birthdate)
    }
}
const Armel = Object.create(PersonProto)
Armel.birthdate = 2001
Armel.name = 'munyaneza armel'
Armel.calcAge()