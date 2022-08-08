let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}
    
// spread operator
const change = {...data, name: "Zaki Khairi Ziwar", email: "zakielbavarian@gmail.com", hobby: "main game"}

console.log(change)


// destructuring
const { address: { street, city } } = data
console.log(`
street: ${street}
city: ${city}
`)

// not destructuring
const jalan = data.address.street
const kota = data.address.city
console.log(`
street: ${jalan}
city: ${kota}
`)