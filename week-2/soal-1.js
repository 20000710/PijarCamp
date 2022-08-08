// 1. isFinite(): Menentukan apakah nilai yang dimasukkan itu adalah nilai yang finite(terhingga)
// function divide(x) {
//     if (isFinite(1000 / x)) {
//       return 'Angka terhingga.';
//     }
//     return 'Angka tidak terhingga!';
//   }
  
//   console.log(divide(0));
  // expected output: "Angka tidak terhingga!"

  
// 2. isNaN(): Menentukan apakah sebuha nilai itu NaN(Not a Number) atau tidak.
function milliseconds(x) {
  if (isNaN(x)) {
    return 'bukan sebuah angka!';
  }
  return x * 1000;
}
console.log(milliseconds('100F'));
// expected output: "bukan sebuah angka!"

  
// 3. concat(): menggabungkan dua string dan direturn sebagai string baru
let word1 = "saya mau"
let word2 = " belajar"
let allWord = word1.concat(word2)
console.log(`allWord: ${allWord}`)


// 4. charAt(): method yang akan mengembalikkan sebuah character berdasarkan spesifik index
let char = "senang membaca"
console.log(`index: ${char.charAt(1)}`)


// 5. match(): method yang digunakan untuk mencocokan sebuah string dengan reguler expression
let str = "dia dan saya pergi ke pasar"
let re = /saya/i;
const match = str.match(re)
console.log('match: ', match)


// 6. length: method yang mengembalikkan panjang keseluruhan string / menghitung isi array
let nama = "Khair"
console.log(`panjang kalimat: ${nama.length}`)


// 7. split(): method yang membagi string menjadi sebuah array dengan memisah string dengan seperator
let fruit = "apel ada yang berwarna hijau"
let split = fruit.split(" ")
console.log(`split: ${split}`)


// 8. slice(): method yang akan memotong string berdasarkan index awal dan index akhir
let quote = "jika tidak mengerti apa jangan melakukan apa-apa"
let slice = quote.slice(5, 19)
console.log(`slice: ${slice}`)


// 9. push(): method yang akan menambahkan element baru pada array index terakhir
let arr = []
let item1 = "monitor"
let item2 = "keyboard"
arr.push(item1)
arr.push(item2)
console.log(`arr: ${arr}`)


// 10. pop(): method yang menghapus element terakhir dari sebuah array dan mereturn element tersebut
let brand = ["LG", "Toshiba", "Sharp"]
let pop = brand.pop()
console.log(`pop: ${pop}`)








