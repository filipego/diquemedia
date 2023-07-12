import Head from 'next/head'
import { useEffect } from "react";
import Link from "next/link"
import Container from "../components/common/Container"


function Labodega({ }) {


    useEffect(() => {
        document.body.className = "labodega"
    });

    return (
        <>
            <Head>
                <title>Dique Media La Bodega</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta property="og:title" content="Dique Media La Bodega" />
                <meta property="og:type" content="La Bodega" />
                <meta property="og:url" content={`https://www.diquemedia.com`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                La Bodega
            </Container>

        </>
    )
}





export default Labodega


