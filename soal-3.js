let output = '';
const printSegitiga = 5

function cetakSegitiga(angka){
    for(let i = angka; i >= 1; i--){
        for(let j = 1; j <= i; j++){
            output += `${j} `;
        }
        console.log(output)
        output = '';
    }
}

cetakSegitiga(printSegitiga)