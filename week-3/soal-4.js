let prom = new Promise((resolve, reject) => {
    const fetch = require("cross-fetch");
    const fetchData = fetch('https://jsonplaceholder.typicode.com/users');
    fetchData.
        then(response => {
            if(response.status === 200){
                resolve("Berhasil get data")
                return response.json();
            } else if(response.status === 404){
                reject(new Error("URL yang dimasukkan salah"))
            } else {
                reject(new Error("Gagal get data"))
            }
        }).then(value => {
            if(value !== undefined){
                value.map(data => {
                    console.log(`get user id ${data.id} with name: ${data.name}`);
                })
            }
        })
    })

const getAllData = () => {  
    prom.then((value) => {
        console.log("Success: " + value)
    }).catch((err) => {
        console.log("Error: " + err.message)
    })
}

getAllData();


