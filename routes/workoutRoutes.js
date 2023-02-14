const db = require('../db/connection')

const addWorkout = function(user){
    const sql = `INSERT INTO workouts(slackuser) VALUES(?)`
    const params = user

    db.query(sql, params, (err, result) => {
        if(err){
            console.log(err)
            return
        } else {
            console.log(result)
        }
    })
}

module.exports = addWorkout