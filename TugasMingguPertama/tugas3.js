let output = '';

// Based on Column
function PrintSegitigaColumn(angka){
    for (let i = 1; i <= angka; i++) {
        for (let j = 1; j <= i; j++) {
            output += `${j} `;
        }
        console.log(output);
        output = '';
    }
}

PrintSegitigaColumn(5);

console.log('\n');

// Based on Row
function PrintSegitigaBaris(angka){
    for (let i = 1; i <= angka; i++) {
        for (let j = 1; j <= i; j++) {
            output += `${i} `;
        }
        console.log(output);
        output = '';
    }
}

PrintSegitigaBaris(5);