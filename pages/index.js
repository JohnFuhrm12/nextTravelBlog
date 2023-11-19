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
      <Navbar/>
      <div>
        <h1>Content</h1>
      </div>
    </>
  );
}
