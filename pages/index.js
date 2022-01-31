import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
         <title>Ninja List | Home</title>
         <meta name="keywords" content="ninjas"/>
      </Head>

      <div >
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>I’m seeing use of Java, C#, Go, Python in my area as the main server-side languages.</p>
        <p className={styles.text}>I’m seeing use of Java, C#, Go, Python in my area as the main server-side languages.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
        
      </div>
    </>
  )
}
