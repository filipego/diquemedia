import Head from 'next/head'
import { useEffect } from "react";
import Link from "next/link"
import Container from "../components/common/Container"


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
                About
            </Container>

        </>
    )
}





export default About


