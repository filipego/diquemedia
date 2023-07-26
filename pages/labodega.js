import Head from 'next/head'
import { useEffect } from "react";
import Link from "next/link"
import Container from "../components/common/Container"
import Hero from '../components/common/Hero';
import { client } from "../lib/sanity"
import ProductsItem from '../components/common/ProductsItem';


function Labodega({ labodega }) {


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
                <Hero
                    title={<>La<span>Bodega</span></>}
                    paragraph={<>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </>}
                    youtubeUrl="XqZsoesa55w"
                    youtubeTitle="Baby Shark"
                />

            </Container>

            <Container classes="halfTopPadding">
                <ul className="products grid-col-3">
                    {labodega.map((item, index) => (
                        <ProductsItem
                            key={index}
                            i={index}
                            thumbnail={item.thumbImage}
                            title={item.title}
                            paragraph={item.paragraph}
                            buy1Url={item.buy1Url}
                        />
                    ))}
                </ul>

            </Container>

        </>
    )
}


export const getServerSideProps = async () => {

    const labodegaQuery = '*[ _type == "labodega" ] | order(_createdAt desc)'
    const labodega = await client.fetch(labodegaQuery)


    if (!labodega.length) {
        return {
            props: {
                labodega: []
            }
        }
    } else {
        return {
            props: {
                labodega: labodega
            }
        }
    }

};


export default Labodega


