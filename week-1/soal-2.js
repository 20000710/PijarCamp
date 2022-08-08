const mtk = 60
const bahasaIndonesia = 70
const bahasaInggris = 100
const ipa = 69

function averageGrade(mapel1, mapel2, mapel3, mapel4, callback) {
    
    // Memanggil callback function averaging
    let average = callback(mapel1, mapel2, mapel3, mapel4)

    if(average > 90  && average <= 100){
        console.log(` 
        Rata-rata = ${average} 
        Grade = A
        `)
    } else if(average > 80 && average < 90){
        console.log(` 
        Rata-rata = ${average} 
        Grade = B
        `)
    } else if(average > 70 && average < 80) {
        console.log(` 
        Rata-rata = ${average} 
        Grade = C
        `)
    } else if(average > 60 && average < 70) {
        console.log(` 
        Rata-rata = ${average} 
        Grade = D
        `)
    } else if(average >= 0 && average < 60){
        console.log(` 
        Rata-rata = ${average} 
        Grade = E
        `)
    }
}

averageGrade(mtk, bahasaIndonesia, bahasaInggris, ipa, averaging)

function averaging(n1, n2, n3, n4){
    let average = (n1 + n2 + n3 + n4) / 4
   
    try {
        if(typeof(n1) != 'number' || typeof(n2) != 'number' || typeof(n3) != 'number' || typeof(n4) != 'number'){
            if (n1 == "" || n2 == "" || n3 == "" || n4 == "") throw "input tidak boleh ada yang kosong"
            else throw "input harus berupa angka"
        } 
        else if(n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0) throw "input tidak boleh kurang dari 0"
        else if(n1 > 100 || n2 > 100 || n3 > 100 || n4 > 100) throw "input maksimal 100"
        else return average;
    } catch(er){
        console.log(er)
    }
}

