const Main =  (name, Callback) => {
    let namalengkap =  `Mr. ${name}`;
    return Callback(namalengkap)
}

const Callback = (namalengkap) => {
    console.log(namalengkap)
}

Main("Zero", Callback);