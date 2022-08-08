let nama = "Zaki Khairi"
const email = "zakielbavarian@gmail.com"
let address1 = {
    name: "Jl.Botin no.147",
    district: "Cipayung",
    province: "DKI Jakarta",
    city: "Jakarta Timur",
    zipcode: "13840"
}

const address2 = {
    RT: "007",
    RW: "004",
}
const newAddress = {...address1, ...address2}
console.log(newAddress)

let isMarried = false
const hobbiesSatu = ["Gaming", "Reading Book", "Coding"]
const hobbiesDua = ["Main Bola", "Main Badminton", "Baku Hantam"]
const newHobbies = [...hobbiesSatu, ...hobbiesDua]
console.log(newHobbies)
