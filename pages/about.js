import Head from 'next/head'
import { useEffect } from "react";
import Link from "next/link"
import Container from "../components/common/Container"
import Hero from '../components/common/Hero';


function About({ }) {


    useEffect(() => {
        document.body.className = "about"
    });

    return (
        <>
            <Head>
                <title>Dique Media About</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta property="og:title" content="Dique Media About" />
                <meta property="og:type" content="About" />
                <meta property="og:url" content={`https://www.diquemedia.com`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                <Hero
                    title={<>About<span>Dique Media</span></>}
                    paragraph={<>
                        <p>Dique! Media is a multi media network specializing in all things east coast afro-caribbean with a focus on Dominican culture. </p>

                        <p>We saw the lack of positive Dominican representation in mainstream media and decided to create our own. The mission with Dique! Media Network is to emphasize the positivity in our tri-state culture through a millennial lens. </p>
                        <p>With the focal point on music trends, politics and current events, Dique! is here to report on trending media that speak to our demographic the right way. </p>
                    </>}
                    media="video"
                    bottomPadding
                />

                <Hero
                    inverse
                    title={<>About<span>Sarah Vega</span></>}
                    paragraph={<>
                        <p>Now that we got that quick intro out of the way, Let me give you a rundown about me. </p>

                        <p>Sarah Margarita Vega Melian (the self proclaimed "Voice of the Tri-State") was born October 26, 1984 to a Dominican mother and Nicaraguan father. </p>

                        <p>Born and raised in Newark, NJ, I was always influenced by culture, media and style since the tender age of 12 when my mother brought me my first "Vanidades" magazine. </p>

                        <p>With the original goal of becoming an Editor for a major publication, I have worked for The Source and Complex. </p>

                        <p>After the Great Recession of the early 2000s, I found myself in the Social work field and later, as a corrections officer for Northern State Prison. </p>

                        <p>Not knowing what life was about to bring me, I ended up being a professional couch surfer for a few years. </p>

                        <p>While sleeping on a friend's couch, Dique! The podcast was born. After gaining cult popularity, Dique! Was nominated for the Tecla Award for Best Podcast Content Creator. </p>

                        <p>That accolade was what led me to start up Sarah Vega Enterprises which created the Dique! Media Network which focuses on the cultural architecture of Caribbean life in the Tri-state and Lujo Wellness, a holistic oral care company.  </p>
                    </>}
                    media="video"
                />

            </Container>

        </>
    )
}





export default About


