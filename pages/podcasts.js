import Head from 'next/head'
import { useEffect } from "react";
import Link from "next/link"
import Container from "../components/common/Container"


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
                Podcasts
            </Container>

        </>
    )
}





export default Podcasts

