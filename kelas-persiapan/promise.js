let janji = new Promise((resolve, reject) => {
    const condition = true;
    
    if(condition){
        setTimeout(() => {
            resolve('Promise is resolved!');
        }, 300);
    } else {
        reject('Promise is rejected!');
    }
})

const demoPromise = function(){
    janji.then((result) => {
        console.log("Success: " + result)
    }).catch((err) => {
        console.log("Error: " + err)
    })
}

demoPromise();