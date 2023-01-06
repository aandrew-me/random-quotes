import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Body from "../components/Body"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Random Quote Generator</title>
        <meta name="description" content="Random Quote Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Body/>
      
    </div>
  )
}
