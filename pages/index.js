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
      <div className="container d-grid gap-5 py-5 col-12 col-sm-10 col-md-8 col-lg-6 col-lg-4">
        <div className="row justify-content-between align-items-end">
          <div className="col-auto">
            <i className="nes-bcrikko"></i>
          </div>
          <div className="col py-4">
            <div className="nes-balloon from-left m-0 w-100">
              <p>Hello nes.css</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between align-items-end">
          <div className="col py-4">
            <div className="nes-balloon from-right m-0 w-100">
              <p>Hello nes.css</p>
            </div>
          </div>
          <div className="col-auto">
            <i className="nes-bcrikko"></i>
          </div>
        </div>
        <button onClick={() => monSonAJouer.play()} className='nes-btn is-primary'>Click Me</button>
      </div>
    </div>
  )
}
