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
        <img id={styles.homeOverlayedImage} src='https://res.cloudinary.com/dvmw658s9/image/upload/v1700428788/NextTravelBlog/Minimized/jlyaw7ef3eek4ch4mr6u.jpg'/>
      </div>
      <div id={styles.homeGreetingSection}>
        <h2 className={styles.homeHeader}>Explore Latin America with Viva Viajero</h2>
      </div>
    </>
  );
}
