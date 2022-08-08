let data = {
    id: 1,
    name: "budi pratama",
    gender: "female",
    height: "165 cm",
    educational:
    [
        {
            priode: "2013-2016",
            school: "Kalam Kudu High School",
            major: "-"
        }
    ],
    phone: {
        primari: "0812312323",
        secondary: "0082342343"
    }
}

let newEducation = {
    priode: "2016-2020",
    school: "State University Jakarta",
    major: "Accountancy"
}


// Ubah data
const ubahData = () => {
    const newData = {
        ...data,
        name: "Zaki Khairi Ziwar",
        phone: {
            primari: "089670308105",
            secondary: "087877174968"
        },
    }
    
    console.log(newData)
    
}
ubahData()

// Ambil data
// Mengambil data tanpa destructuring
function dataUndestructuring () {
    console.log(`${data.phone.primari}\n${data.phone.secondary}`)
}

dataUndestructuring()

// Mengambil data dengan destructuring
const dataDestructuring = () => {
    const { phone : { primari, secondary }} = data
    console.log(`${primari}\n${secondary}`)
}

dataDestructuring()


// Mengabungkan dua data
const mergeData = () => {
    const newData = {...data, ...newEducation}
    console.log(newData)
}

mergeData()