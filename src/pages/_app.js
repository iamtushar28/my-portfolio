import Layout from '@/layout/Layout';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tushar Suryawanshi | Frontend Developer</title>
        <meta name="description"
          content="Tushar Suryawanshi is a frontend developer specializing in HTML, CSS, Javascript, React, Git, Bootstrap, Tailwind, Next.js, and Webflow. Explore her portfolio to see her latest projects and learn more about her skills and experience." />
        <meta name="author" content="Tushar Suryawanshi" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Tushar Suryawanshi's Portfolio" />
        <meta property="og:description" content="Tushar Suryawanshi - Frontend Developer. Passionate about creating exceptional websites that merge functionality with aesthetics. Specializing in frontend development. Crafting user-friendly and responsive solutions that enhance user experiences." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
