import Head from 'next/head'
import { useEffect } from "react";
import Link from "next/link"
import Container from "../components/common/Container"
import Hero from '../components/common/Hero';


function Podcasts({ }) {


    useEffect(() => {
        document.body.className = "podcasts"
    });

    return (
        <>
            <Head>
                <title>Dique Media Podcasts</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta property="og:title" content="Dique Media Podcasts" />
                <meta property="og:type" content="Podcasts" />
                <meta property="og:url" content={`https://www.diquemedia.com`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                <Hero
                    title={<>Dique<span>Podcasts</span></>}
                    paragraph={<>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </>}
                    youtubeUrl="GOqEl4ADyVk"
                    youtubeTitle="Tom Holland Interview"
                />
                More Podcasts page content
            </Container>

        </>
    )
}





export default Podcasts


