import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Are you really a waiter ?" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <div id="question"/>
        <input type="text" id="answer"/>
        <div id="grade"/>
      </main>

      <Footer />
    </div>
  )
}

(async () => {

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Create 1 exam questions for my interview with a waiter:\n",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"],
  });

  const question = document.getElementById('question');

  question.value = response;
})();