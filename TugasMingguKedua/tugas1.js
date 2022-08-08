// Filter: method yang membuat sebuah array baru dan akan mengambil semua element yang 
//         lolos/bernilai true berdasarkan implementasi test dari fungsi yang disediakan

//Contoh filter
const umur = [30, 29, 20, 15, 17]

const checkUmur = (umur) => {
    return umur >= 20;    
}

const hasilFilter = umur.filter(checkUmur)
console.log(`hasil filter: ${hasilFilter}`)



// push: method yang menambahkan item baru ke urutan terakhir dari array

//Contoh push
let namaBarang = ["Topi", "Tas", "Baju", "Celana"]
const tambahBarang = (Item1, Item2) => {
    return namaBarang.push(Item1, Item2)
}
tambahBarang("Jaket", "Sweater")
//Setelah dipush
console.log(namaBarang)


// pop: method yang menghapus elemen terakhir dari array

// Contoh pop:
let namaBuah = ["Nanas", "Semangka", "Apel", "Jeruk", "Nangka"]
const hapusBuah = () => {
    return namaBuah.pop()
}
hapusBuah()
//Setelah dipop
console.log(namaBuah)


// reduce: method yang mengeksekusi fungsi reducer pada elemen array
// urutan parameter reduce: reduce((previousValue, currenValue, currentIndex))

// Contoh reduce
const angka = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0; // sebagai inisial index array

const menghitung = (previousValue, currentValue) => previousValue + currentValue

const sumWithInitial = angka.reduce(
  menghitung,
  initialValue
);
console.log(sumWithInitial);



