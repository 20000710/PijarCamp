function PrintGenapGanjil(angka){
    for (let i = 1; i <= angka; i++) {
        // if (i % 2 == 0) {
        //     console.log(`${i} merupakan bilangan genap`);
        // } else {
        //     console.log(`${i} merupakan bilangan ganjil`);
        // }

    // Ternery operator
    i % 2 == 0
    ? console.log(`${i} merupakan bilangan genap`) 
    : console.log(`${i} merupakan bilangan ganjil`); 
    }
}

PrintGenapGanjil(5);
