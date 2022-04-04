import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <Navbar />
      <main className="">Main content</main>
    </>
  );
}

export default Home;
