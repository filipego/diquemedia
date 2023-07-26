import Head from 'next/head'
import { useEffect } from "react";
import Link from "next/link"
import Image from 'next/image'
import Container from "../components/common/Container"
import Hero from '../components/common/Hero';


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
        <Hero
          title={<>Dique<span>Media</span></>}
          paragraph={<>
            <p>Dique! Podcast is the audio diary of Sarah Vega Melian. </p>
            <p>Spoken from the Point of View of a first generation Dominican American woman, Dique! Explores the trials, tribulations and triumphs of the first Gen millennial .</p>
            <p>With different interviews with notable figures such as Coco and Breezy, Enitan Bereola and Evan Carmichael , Dique! Podcast delves into various topics that affects the east coast Caribbean American audience. </p>
          </>}
          youtubeUrl="DhcVWDH59Hs"
          youtubeTitle="Welcome to Dique Media"
        />
      </Container>
      <Container classes="halfTopPadding">
        <ul className="linksToPages">
          <li className="podcasts-link">
            <Link href="/podcasts"><a>
              <Image
                src="/Dique_Media_Website_Images/home-podcast.jpg?updatedAt=1689969838805"
                alt="Podcasts page link"
                width={411}
                height={296}
              />
              <div className="text">
                <h3>Podcasts</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </a></Link>
          </li>
          <li className="labodega-link">
            <Link href="/labodega"><a>
              <Image
                src="/Dique_Media_Website_Images/test-img.jpg?updatedAt=1689366810824"
                alt="Podcasts page link"
                width={411}
                height={296}
              />
              <div className="text">
                <h3>La Bodega</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </a></Link>
          </li>
          <li className="lujo-link">
            <a href="#" target="_blank" rel="noreferrer">
              <Image
                src="/Dique_Media_Website_Images/home-Lujo-Tooth-Polish.jpg?updatedAt=1689970124815"
                alt="Lujo Teeth Polish link"
                width={411}
                height={296}
              />
              <div className="text">
                <h3>Lujo Tooth Polish</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </a>
          </li>
        </ul>
      </Container>

    </>
  )
}





export default HomePage


