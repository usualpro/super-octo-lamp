import Head from 'next/head'
import styles from '../styles/Home.module.scss'

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
    </div>
  )
}
