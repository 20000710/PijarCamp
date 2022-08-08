async function myFunction() {
    return "Hello";
}

myFunction().then(
    (value) => { myDisplayer(value); },
    (err) => { myDisplayer(err); }
)

function myDisplayer(value){
    console.log(value)
}