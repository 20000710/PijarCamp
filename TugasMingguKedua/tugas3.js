const discount = (jumlah, harga) => {
    let totalHarga = jumlah * harga;
    let potongan = 0
    
    if(totalHarga >= 60000){
        potongan = totalHarga * 35/100;

        if(potongan >= 50000){
            potongan = 50000;
        } else {
            potongan = potongan;
        }
    }

    let subtotal = totalHarga - potongan

    console.log(`Total Harga: ${totalHarga}\nPotongan: ${potongan}\nSubTotal: ${subtotal}`)
}

discount(3, 25000)
discount(4, 60000)