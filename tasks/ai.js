const aiResponse = async function aiResponse(promptReceived, channel, context) {
    require('dotenv').config()
    const slackBot = require('slackbots') 
    const { Configuration, OpenAIApi } = require('openai')
    const bot = require('../index')
    const openaiKey = process.env.OPENAI_API_KEY
    const slackToken = process.env.SLACK_TOKEN

    // Create slackbot instance
    // const bot = new slackBot({
    //     token : slackToken,
    //     name : 'Slackachu',
    // })

    // Configure OpenAI
    const configuration = new Configuration({
        apiKey: openaiKey
    });


    const openai = new OpenAIApi(configuration);

    if(context === "prompt"){
        const response = openai.createCompletion({
            model: "text-davinci-003",
            prompt: promptReceived,
            max_tokens: 100,
            temperature: 0,
        }).then(res => {
            const finalMessage = res.data.choices[0].text
            console.log(finalMessage)
            bot.postMessage(channel, finalMessage)
        }).catch(err => console.log(err))
    } else if(context === "picture") {
        const response = openai.createImage({
            prompt: promptReceived,
            n: 1,
            size: "1024x1024",
        }).then(res => {
            const photo = res.data.data[0].url
            bot.postMessage(channel, 'Here you go: '+ photo)
        }).catch(err => console.log(err))
    }
        
}

module.exports = aiResponse
