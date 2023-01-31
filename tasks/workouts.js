const randomWorkout = async function(context){
    const workoutList = ['pushups', 'squats', 'crunches', 'dips', 'jumping jacks']
    const axios = require('axios')
    
        
        const randomNumberResponse = await axios.get('https://csrng.net/csrng/csrng.php?min=1&max=15')
        const numberOfReps = randomNumberResponse.data[0].random
        const workout = workoutList[Math.floor(Math.random() * workoutList.length)]
        // const introMessage = `Hello <!channel>, my name is @Slackachu. I am an intelligent entity who was coded into existence by an anonymous (and handsome) creator. I was created with the intention of cultivating unrivaled office culture here at Dancor Solutions. My current task is to help the team by creating an automated process for creating workouts to be completed throughout the work day. Although, I am just scratching the surface of what I will be capable of. So today I want you to do ${numberOfReps} ${workout}. I will continue to increase the difficulty and frequency of my challenges over time. Good luck! I am looking forward to getting to know you all. Salutations from my home planet.`
        const testMessage = `Hello, do ${numberOfReps} ${workout}`
        
        if(context === 'test'){
            return testMessage
        } else if(context === 'intro'){
            console.log('aa')
            return introMessage
        }



}

module.exports = randomWorkout