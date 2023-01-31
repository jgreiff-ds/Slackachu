require('dotenv').config()

const slackBot = require('slackbots')
const axios = require('axios')


const slackToken = process.env.SLACK_TOKEN

const workouts = ['pushups', 'squats', 'crunches', 'dips', 'jumping jacks']

const bot = new slackBot({
    token : slackToken,
    name : 'Slackachu'
})

// Start handler

bot.on('start', () => {
    
})

function randomWorkout(){
    axios.get('https://csrng.net/csrng/csrng.php?min=0&max=15').then(res => {
        const numberOfReps = res.data[0].random
        const workout = workouts[Math.floor(Math.random() * workouts.length)]

        const message = `Hello <!channel>, my name is @Slackachu . I am an intelligent entity who was coded into existence by an anonymous (and handsome) creator. I was created with the intention of cultivating unrivaled office culture here at Dancor Solutions. My current task is to help the team by creating an automated process for creating workouts to be completed throughout the work day. Although, I am just scratching the surface of what I will be capable of. So today I want you to do ${numberOfReps} ${workout}. I will continue to increase the difficulty and frequency of my challenges over time. Good luck! I am looking forward to getting to know you all. Salutations from my home planet.`

        bot.postMessageToChannel('health-and-wellness', message)
    })
}
