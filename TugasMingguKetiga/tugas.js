const cekNum = (angka) => {
    
    // Tugas No.1    
    // try {   
    //         if(typeof(angka) != 'number'){
    //             if (angka == "") throw 'Input is empty';
    //             else throw 'Input is not Number';
    //         } else {
    //             if (angka < 5) throw 'Input is too low';
    //             else if (angka > 10) throw 'Input is too high';
    //             else throw angka;
    //         }
    //     } catch(err){
    //         console.log(err)
    //     } finally{
    //         console.log('Done')
    //     }

    // Tugas No.2
    // for(let i = 1; i <= angka; i++){
        
    //     try {
    //         if (i < 5) throw `${i} Input is too low`;
    //         if (i > 10) throw `${i} Input is too high`;
    //         throw i;
    //     } catch(err){
    //         console.log(err)
    //     }
    // }
}

cekNum(12)


// Tugas No.3
let prom = new Promise((resolve, reject) => {
    const fetch = require("cross-fetch");
    const fetchData = fetch('https://jsonplaceholder.typicode.com/users');
    fetchData.
        then(response => {
            if(response.status === 200){
                resolve("Get Data Success")
                return response.json();
            } else {
                reject("Get Data Failed")
            }
        }).then(value => {
            value.map(data => {
                console.log(data.name);
            })
        })
    })

const getAllData = () => {  
    prom.then((value) => {
        console.log("Success: " + value)
    }).catch((err) => {
        console.log("Error: " + err)
    })
}

getAllData();