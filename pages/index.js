import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Howl } from 'howler';

const monSonAJouer = new Howl({
  src: 'click.mp3',
  autoplay: false
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='nes-container'>
        <section className='message-list'>
          <section className='message -left'>
            <i className='nes-bcrikko'></i>
            <div className="nes-balloon from-left">
              <p>Hello nes.css</p>
            </div>
          </section>
          <section className='message -right'>
            <div className="nes-balloon from-right">
              <p>Hello nes.css Hello nes.cssHello nes.cssHello nes.cssHello nes.cssHello nes.css</p>
            </div>
            <i className='nes-bcrikko'></i>
          </section>
        </section>
      </section>
      <button onClick={() => monSonAJouer.play()} className='nes-btn is-primary'>Click Me</button>
    </div>
  )
}
