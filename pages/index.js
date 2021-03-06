import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Branding, design and development studio.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Branding, design and development studio." />
        <p className="description">
        Branding, design and development studio. <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
