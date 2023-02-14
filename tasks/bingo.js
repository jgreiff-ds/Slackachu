const db = require('../db/connection')

let numArray = [1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49]
let table = []
let row = []
const sql = `INSERT INTO bingos(B_1, B_2, B_3, B_4, B_5, I_1, I_2, I_3, I_4, I_5, N_1, N_2, N_3, N_4, G_1, G_2, G_3, G_4, G_5, O_1, O_2, O_3, O_4, O_5) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`


const generate = function() {

    while(table.length < 125){

        if(row.length === 24){
            row.sort(function(a, b){return a - b})
            table.push(row)
            const params = row
            
            row = []
            db.query(sql, params, (err, result) => {
                if(err){
                    console.log(err)
                    return
                } else {
                    console.log(result) 
                }
            })
        }
        

        if(numArray.length === 0){
            numArray = [1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                34,
                35,
                36,
                37,
                38,
                39,
                40,
                41,
                42,
                43,
                44,
                45,
                46,
                47,
                48,
                49,]
        }

        
        let randomIndex = Math.floor(Math.random() * numArray.length)
        let randomNum = numArray[randomIndex]
        
        while(row.includes(randomNum)) {
            randomIndex = Math.floor(Math.random() * numArray.length)
            randomNum = numArray[randomIndex]
        }

        row.push(randomNum)

        numArray.splice(randomIndex, 1)
        

        
    }
}

module.exports = generate