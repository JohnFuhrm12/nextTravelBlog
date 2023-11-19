import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={styles.homeImageContainer}>
        <Navbar/>
        <img id={styles.homeOverlayedImage} src='https://res.cloudinary.com/dvmw658s9/image/upload/v1700429370/NextTravelBlog/Minimized/kggkfu6cx5ojdar0laqd.webp'/>
        <h1 id={styles.homeTitle}>Welcome to Viva Viajero</h1>
      </div>
      <div id={styles.homeGreetingSection}>
        <h2 id={styles.homeGreetingHeader}>Explore Latin America with Viva Viajero</h2>
        <button id={styles.greetingButton}>Start Here</button>
      </div>
    </>
  );
}
