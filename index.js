// Import npm packages
require('dotenv').config()
const slackBot = require('slackbots') 

// Import modules
const slackToken = process.env.SLACK_TOKEN
const randomWorkout = require('./tasks/workouts')
const aiResponse = require('./tasks/ai')


// Create slackbot instance
const bot = new slackBot({
    token : slackToken,
    name : 'Slackachu',
})

// Start handler
bot.on('start', () => {

})

// Error handler 
bot.on('error', (err) => console.log(err))

// Message Handler
bot.on('message', (data) => {
    if(data.type !== 'message' || data.subtype === 'bot_message'){
        return
    }
    
    bot.getChannels().then(res => {
        const channelsArr = res.channels
        const result = channelsArr.find(x => x.id === data.channel).name
        messageHandler(data, result)
    })
})

function messageHandler(data, channel) {
    const message = data.text
    if(message.includes('workout') && message.includes('@U04M4F2QKRB')){
        const parsedMessage = message.split(' ').slice(1).join('')
        const numOfWorkouts = parsedMessage.replace(/\D/g, "")
            randomWorkout('test', numOfWorkouts)
    } else if(message.includes('picture')) {
        aiResponse(message, channel, 'picture')
    } else {
        aiResponse(message, channel, 'prompt')
    }
}

function getChannelName(channel) {
    
}