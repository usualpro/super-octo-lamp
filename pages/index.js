import Head from 'next/head'
import ChatBot from '../components/ChatBot';

const Home = ({ sequence }) => <div>
  <Head>
    <title>Simple ChatBot example</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <ChatBot {...sequence} />
</div>;

Home.getInitialProps = async (ctx) => {
  const res = await fetch('https://run.mocky.io/v3/7479afe7-b3d4-4a1a-b583-b3f252884523');
  const json = await res.json();
  return { sequence: json };
}

export default Home;