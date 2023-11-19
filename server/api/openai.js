import OpenAI from 'openai'

const openai = new OpenAI()

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ 
      role: 'system', content: 'Provide the most precise answers.' 
    },
    {
      role: 'user', content: 'What day is 27. 10. 2020'
    }],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0].message.content)
}

main()