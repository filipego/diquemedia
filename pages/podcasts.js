import Head from 'next/head'
import { client } from "../lib/sanity"
import { useEffect } from "react";
import Link from "next/link"
import Container from "../components/common/Container"
import Hero from '../components/common/Hero';
import RichText from '../components/common/RichText';
import PodcastsItem from '../components/common/PodcastsItem';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

function Podcasts({ title, text, thumbImage, podcasts }) {

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

            </Container>


            <Container classes="latest-podcast">
                <div>
                    <h2 className='special'>Latest <span className='break'>Podcast</span></h2>
                </div>
            </Container>


            <Container>
                <Hero
                    title={title}
                    paragraph={<RichText textContent={text} />}
                    latestPodImage={thumbImage}
                />

            </Container>
            <Container classes="halfTopPadding">
                <h2>Latest Podcasts</h2>
                <ul className="grid-col-3 podcastsItems">
                    {podcasts.map((item, index) => (
                        <PodcastsItem
                            key={index}
                            i={index}
                            thumbnail={item.thumbImage}
                            title={item.title}
                            paragraph={item.paragraph}
                        />
                    ))}
                </ul>

            </Container>

            <Container classes="halfTopPadding">
                <h2>Video Podcasts</h2>

                <ul className="grid-col-3 podcastsItems">
                    {podcasts.map((item, index) => {
                        if (item.mediaType === "video") {
                            return <PodcastsItem
                                key={index}
                                i={index}
                                thumbnail={item.thumbImage}
                                title={item.title}
                                paragraph={item.paragraph}
                            />
                        }
                    }

                    )}
                </ul>

            </Container>
            <Container classes="halfTopPadding">
                <h2>Audio Podcasts</h2>

                <ul className="grid-col-3 podcastsItems ">
                    {podcasts.map((item, index) => {
                        if (item.mediaType === "audio") {
                            return <PodcastsItem
                                key={index}
                                i={index}
                                thumbnail={item.thumbImage}
                                title={item.title}
                                paragraph={item.paragraph}
                            />
                        }
                    }

                    )}
                </ul>
            </Container>


        </>
    )
}



export const getServerSideProps = async () => {

    // Latest Podcasts

    const query = `*[ _type == "latestpodcast"][0]{
          title,
          text,
          thumbImage
      }`

    const latestPod = await client.fetch(query)


    // All Podcasts

    const podcastsQuery = '*[ _type == "podcasts" ] | order(_createdAt desc)'
    const podcasts = await client.fetch(podcastsQuery)



    if (!latestPod || !podcasts.length) {
        return {
            props: null,
            notFound: true,

            // Latest Podcasts
            latestPod: [],

            // All Podcasts
            podcasts: []
        }
    } else {
        return {
            props: {

                // Latest Podcasts
                title: latestPod.title,
                text: latestPod.text,
                thumbImage: latestPod.thumbImage,


                // All Podcasts
                podcasts: podcasts
            }
        }
    }
};





export default Podcasts


