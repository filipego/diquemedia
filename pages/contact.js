import Head from 'next/head'
import { useEffect } from "react";
import Link from "next/link"
import Container from "../components/common/Container"


function Contact({ }) {


    useEffect(() => {
        document.body.className = "contact"
    });

    return (
        <>
            <Head>
                <title>Dique Media Contact</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta property="og:title" content="Dique Media Contact" />
                <meta property="og:type" content="Contact" />
                <meta property="og:url" content={`https://www.diquemedia.com`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                Contact
            </Container>

        </>
    )
}





export default Contact


