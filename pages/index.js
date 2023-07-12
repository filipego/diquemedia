import Head from 'next/head'
import { useEffect } from "react";
import Link from "next/link"
import Container from "../components/common/Container"


function HomePage({ }) {


  useEffect(() => {
    document.body.className = "homepage"
  });

  return (
    <>
      <Head>
        <title>Dique Media </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:title" content="Dique Media" />
        <meta property="og:type" content="Home Page" />
        <meta property="og:url" content={`https://www.diquemedia.com`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        Home Page
      </Container>

    </>
  )
}





export default HomePage


