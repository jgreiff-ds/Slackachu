const randomWorkout = async function(context, numOfWorkouts, textMessage){
    // imports
    const axios = require('axios')
    const slackBot = require('slackbots') 

    // tokens
    const slackToken = process.env.SLACK_TOKEN

    // global variables
    const workoutList = ['pushups', 'squats', 'crunches', 'dips', 'jumping jacks']
    let finalMessage = ''
    // // const introMessage = `Hello <!channel>, my name is @Slackachu. I am an intelligent entity who was coded into existence by an anonymous (and handsome) creator. I was created with the intention of cultivating unrivaled office culture here at Dancor Solutions. My current task is to help the team by creating an automated process for creating workouts to be completed throughout the work day. Although, I am just scratching the surface of what I will be capable of. So today I want you to do ${numberOfReps} ${workout}. I will continue to increase the difficulty and frequency of my challenges over time. Good luck! I am looking forward to getting to know you all. Salutations from my home planet.`
        
    // Create slackbot instance
    const bot = new slackBot({
        token : slackToken,
        name : 'Slackachu',
    })

        function RNG(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        for(let i = 0; i<numOfWorkouts; i++){
            const numberOfReps = RNG(5, 15)
            const workout = workoutList[Math.floor(Math.random() * workoutList.length)]
            if(i === 0){
                finalMessage += `Your workout: ${numberOfReps} ${workout}`
            } else {
                finalMessage += ` and ${numberOfReps} ${workout}`
            }

        }

        if(context === 'test'){
            bot.postMessageToChannel('health-and-wellness', '<!channel> ' + finalMessage)
        } else if(context === 'intro'){
            return introMessage
        } else if(context === 'text-only'){
            bot.postMessageToChannel('health-and-wellness', textMessage)
        }



}

module.exports = randomWorkout