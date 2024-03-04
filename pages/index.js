import Head from 'next/head'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Main from '@components/Main/Main'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>IM-BD Movie page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>     

      <Main/>   

    </div>
  )
}
