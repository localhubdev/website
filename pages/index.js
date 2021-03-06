import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <a href='https://github.com/localhubdev'>
          <h1 className={styles.title}>
            <Image src='/images/localhub-coming-soon.png' width='751' height='245' alt='coming soon' />
          </h1>
        </a>
      </main>
    </div>
  )
}
