import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const { problem } = req.body;
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: generatePrompt(problem),
    temperature: 0.8,
    max_tokens: 1000,
  });

  res.status(200).json({
    result: completion.data.choices[0].text,
  });

  function generatePrompt(problem) {
    return `I need personalised mental health solutions for "${problem}".`;
  }
}
