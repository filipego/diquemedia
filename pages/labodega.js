import Head from 'next/head'
import { useEffect } from "react";
import Link from "next/link"
import Container from "../components/common/Container"
import Hero from '../components/common/Hero';
import Image from 'next/image'


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
                <Hero
                    title={<>La<span>Bodega</span></>}
                    paragraph={<>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </>}
                    youtubeUrl="XqZsoesa55w"
                    youtubeTitle="Baby Shark"
                />

            </Container>

            <Container>
                <ul className="products grid-col-3">
                    <li className="products__item">
                        <div className="products__item__img">
                            <Image
                                src="/Dique_Media_Website_Images/test-img.jpg?updatedAt=1689366810824"
                                alt="Podcasts page link"
                                width={411}
                                height={296}
                            />
                        </div>
                        <div className="products__item__text">
                            <h3>Product 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <a href="">View Product &#8827;</a>
                        </div>
                    </li>
                    <li className="products__item">
                        <div className="products__item__img">
                            <Image
                                src="/Dique_Media_Website_Images/test-img.jpg?updatedAt=1689366810824"
                                alt="Podcasts page link"
                                width={411}
                                height={296}
                            />
                        </div>
                        <div className="products__item__text">
                            <h3>Product 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <a href="">View Product &#8827;</a>
                        </div>
                    </li>
                    <li className="products__item">
                        <div className="products__item__img">
                            <Image
                                src="/Dique_Media_Website_Images/test-img.jpg?updatedAt=1689366810824"
                                alt="Podcasts page link"
                                width={411}
                                height={296}
                            />
                        </div>
                        <div className="products__item__text">
                            <h3>Product 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <a href="">View Product &#8827;</a>
                        </div>
                    </li>
                    <li className="products__item">
                        <div className="products__item__img">
                            <Image
                                src="/Dique_Media_Website_Images/test-img.jpg?updatedAt=1689366810824"
                                alt="Podcasts page link"
                                width={411}
                                height={296}
                            />
                        </div>
                        <div className="products__item__text">
                            <h3>Product 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <a href="">View Product &#8827;</a>
                        </div>
                    </li>
                    <li className="products__item">
                        <div className="products__item__img">
                            <Image
                                src="/Dique_Media_Website_Images/test-img.jpg?updatedAt=1689366810824"
                                alt="Podcasts page link"
                                width={411}
                                height={296}
                            />
                        </div>
                        <div className="products__item__text">
                            <h3>Product 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <a href="">View Product &#8827;</a>
                        </div>
                    </li>
                    <li className="products__item">
                        <div className="products__item__img">
                            <Image
                                src="/Dique_Media_Website_Images/test-img.jpg?updatedAt=1689366810824"
                                alt="Podcasts page link"
                                width={411}
                                height={296}
                            />
                        </div>
                        <div className="products__item__text">
                            <h3>Product 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <a href="">View Product &#8827;</a>
                        </div>
                    </li>

                </ul>
            </Container>

        </>
    )
}





export default Labodega


