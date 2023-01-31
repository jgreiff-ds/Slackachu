require('dotenv').config()

const { Configuration, OpenAIApi } = require('openai')

const openaiKey = process.env.OPENAI_API_KEY

// Configure OpenAI
const configuration = new Configuration({
    apiKey: openaiKey
});


const openai = new OpenAIApi(configuration);

const response = openai.createCompletion({
    model: "text-davinci-003",
    prompt: "give me a compliment",
    max_tokens: 2048,
    temperature: 0,
}).then(res => {
    console.log(res.data.choices[0].text)
})

