// https://api.themoviedb.org/3/movie/550?api_key=38b4b30dd5b7d3be47362aff9acced98&append_to_response=videos,images

import Head from 'next/head'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Main from '@components/Main/Main'



export default function Home() {
  return (
    <div className="">
      <Head>
        <title>IM-BD Movie page</title>
        <link rel="icon" href="/icons/Movie icons.gif" />
      </Head>

      <Main/>   

    </div>
  )
}
