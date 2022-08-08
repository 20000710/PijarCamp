const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
           
            if(cek !== undefined){  
                resolve(cek)
            } else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)        
    }).then((val) => {
        console.log(`${val} merupakan hari kerja`)
    }).catch(err =>{
        console.log(err.message)
    })  
    // error handling ketika resolve maka akan ke then dan jika reject maka akan ke catch
}

const day = new Date()
            .toLocaleString('id-ID', {
                timeZone: 'Asia/Jakarta',
                weekday: 'long'
            }).toLowerCase()

cekHariKerja(day)