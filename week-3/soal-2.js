const getMonth = (callback) => {
    setTimeout(() => {
        let error = false // jika true maka error jika false map data
        let month = [
            "January", "February", "Maret", "April", "Mei", "Juni", "Juli", 
            "Agustus", "September", "Oktober", "November", "Desember"
        ]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 4000);
}

const showMonth = (err, month) => {
    console.log('month: ', month)
    try {
        if(month.length === 0) throw err
        else {
            month.map(value => {
                console.log(value)
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}

getMonth(showMonth)