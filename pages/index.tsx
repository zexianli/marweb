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
      <main className="bg-cyan-900">Hello</main>
    </>
  );
}

export default Home;
