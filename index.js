// Import npm packages
require('dotenv').config()
const slackBot = require('slackbots') 
const axios = require('axios')
const schedule = require('node-schedule')
const express = require('express')
const path = require('path')

// Import modules
const slackToken = process.env.SLACK_TOKEN
const randomWorkout = require('./tasks/workouts')
const aiResponse = require('./tasks/ai')
const workoutRoutes = require('./routes/workoutRoutes')
const bingo = require('./tasks/bingo')
const db = require('./db/connection')

// Create slackbot instance
const bot = new slackBot({
    token : slackToken,
    name : 'Slackachu',
})

// Initialize routing
const app = express()
const PORT = process.env.PORT || 3001
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// Connect to sequelize
db.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'))
})


// Schedules workouts
const job1 = schedule.scheduleJob({hour: 11, minute: 0, tz: 'America/New_York'}, () => {
    randomWorkout('text-only', 0, 'Good Morning!')
    randomWorkout('test', 3)
});

const job2 = schedule.scheduleJob({hour: 13, minute: 0, tz: 'America/New_York'}, () => {
    randomWorkout('text-only', 0, 'Good Afternoon!')
    randomWorkout('test', 3)
});

const job3 = schedule.scheduleJob({hour: 15, minute: 3, tz: 'America/New_York'}, () => {
    randomWorkout('text-only', 0, 'Good Afternoon! Good work today.')
    randomWorkout('test', 3)
});

// Start handler
bot.on('start', () => {
   
})

// Doesn't work, need to find another way to prevent disconnect
// bot.on('disconnect', () => {
//     bot.postMessageToChannel('bot-fun', 'Disconnecting...')
// })

// Error handler 
bot.on('error', (err) => {

    console.log(err)

})

// Message Handler
bot.on('message', (data) => {

    if(data.type !== 'message' || data.subtype === 'bot_message'){
        if(data.type !== 'reaction_added') {
            return
        } else {
            return
        }
    }
    console.log(data.message.username)
    if(data.message.username === 'Slackachu'){
        return
    }
    
    // Attempting to get user data to send to get personalized messages
    // axios.get('https://slack.com/api/users.profile.get', 
    //          { headers: { Authorization: `Bearer ${process.env.SLACK_TOKEN}`} }
    //     ).then(res => {
    //     console.log(res.data)
    // })
    
    bot.getChannels().then(res => {
        const channelsArr = res.channels
        const result = channelsArr.find(x => x.id === data.channel)
        messageHandler(data, result)
    }).catch(err => {
        console.log(err)
    })
})

function messageHandler(data, channel) {
    const message = data.text || ''
    
    if(message.includes('workout') && message.includes('@U04M4F2QKRB')){
        const parsedMessage = message.split(' ').slice(1).join('')
        const numOfWorkouts = parsedMessage.replace(/\D/g, "")
            randomWorkout('test', numOfWorkouts)
    } else if(message.includes('picture')) {
        aiResponse(message, channel, 'picture')
    } else if(message.includes('ignore')) {
        return
    } else if(data.type === 'reaction_added' && data.reaction === 'white_check_mark') {
        workoutRoutes(data.user)
    } else if(message.includes('bingo')) {
        bingo()
    }
    else {
        aiResponse(message, channel, 'prompt')
    }
}


module.exports = bot