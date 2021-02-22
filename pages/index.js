import Head from 'next/head'
import { ChatBot } from '../components/ChatBot';
import sequence from '../scripts/sequence1.json';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChatBot {...sequence} />
    </div>
  )
}
