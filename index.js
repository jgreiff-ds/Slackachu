// Import npm packages
require('dotenv').config()
const slackBot = require('slackbots')

// Import modules
const slackToken = process.env.SLACK_TOKEN
const randomWorkout = require('./tasks/workouts')



// Create slackbot instance
const bot = new slackBot({
    token : slackToken,
    name : 'Slackachu',
})

// Start handler
bot.on('start', () => {
    
    const workoutData = randomWorkout('test').then(res => {
        console.log(res)
    })
    
    // bot.postMessageToUser('jgreiff', testMessage)
    // bot.postMessageToChannel('health-and-wellness', introMessage)

})

// Error handler 
bot.on('error', (err) => console.log(err))

bot.on('message', (data) => {
    if(data.type !== 'message'){
        return
    }
    bot.getUserById(data.user).then(res =>{
        console.log('You got a message from ' + res.real_name + ' it says: ' + data.text)
        return data.text
    }).then((message) => {
        if(message.includes('workout') && message.includes('@U04M4F2QKRB')){
            const workoutData = randomWorkout('test').then(res => {
                bot.postMessageToChannel('health-and-wellness', res)
            })
        }
    })
    
})