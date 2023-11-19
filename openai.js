import OpenAI from 'openai'
const openai = new OpenAI()

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ 
      role: 'system', content: 'Provide the most precise answers.' 
    },
    {
      role: 'user', content: 'hello world'
    }],
    model: 'gpt-3.5-turbo',
  })

  console.log(completion.choices[0].message.content)
  return completion.choices[0].message.content
}
  
main()