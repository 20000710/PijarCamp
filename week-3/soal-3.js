const axios = require('axios');
let http = require('http');

// const getTodoList = () => {
//     return new Promise((resolve, reject) => {

//         axios.get('http://localhost:3000/todo')
//         .then(res => {
//             if(res.status === 200){
//                 resolve("Success load data")

//                 let lists = res.data
//                 http.createServer((req, res) => {
//                     res.writeHead(200, {'Content-Type': 'text/html'})
//                         res.write(`<h3>Todo list hari ini: </h3>`)
//                     for(list of lists){
//                         res.write(
//                         `<input type="checkbox" value=${list.id} id="todo" name="todo${list.id}">
//                         <label id="todoLabel">${list.name}</label><br>
//                         `)
//                     }
//                     res.end();
//                 }).listen(8000)
//             }else{
//                 reject(new Error("Failed load data"))
//             }
//         }).catch(err =>{
//             console.log('Error: ', err.message)
//         })
//         console.log("Server running on port: http://localhost:8000")
//     })
        
// }

// getTodoList()



const getProfesiId = (input) => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/job')
        .then(res => {
            if(res.status === 200){
                resolve("Success load data")
                let lists = res.data;
                for(list of lists){
                    let name = list.name.toLowerCase()
                    if (name === input.toLowerCase()){
                        console.log(`profesi ID: ${list.id}`)
                    }
                }
            } else{
                reject(new Error("Failed load data"))
            }
        }).catch(err => err)
    }).then(res => {
        console.log(res)
    }).catch(err => err.message)
}

getProfesiId("Frontend Developer")