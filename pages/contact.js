import Head from 'next/head'
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image'
import Container from "../components/common/Container"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact({ }) {
    const form = useRef();


    useEffect(() => {
        document.body.className = "contact"
    });

    const notify = () => toast.success("Thank you, your message has been sent", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wgxj9on', 'template_2kmjktg', form.current, 'xa7JSLIMA0s6IIUCq')
            .then((result) => {
                // console.log(result.text);


            }, (error) => {
                // console.log(error.text);
            });

        notify()
        e.target.reset();
    };

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

            <Container classes="grid-col-2">
                <div className="contact__text">
                    <h2>Why contacting us?</h2>
                    <p>Whether you want to shoot your shot with Dique! Podcast to get interviewed, or submit a cool DJ mix, Make sure you fill out the information boxes to your right so we can get acquainted. We live in a hectic society so understand we will be in contact within 48 hours. We are looking forward to reading what y'all got to say!</p>

                    <h2 className='h2--top-padding'>Follow us</h2>
                    <nav>
                        <ul className="flex-row">
                            <li>
                                <a href="https://www.tiktok.com/@diquemedia" target="_blank" rel="noreferrer">
                                    <Image
                                        src="/Dique_Media_Website_Images/tiktok.png?updatedAt=1689368578826"
                                        alt="TikTok"
                                        width={24}
                                        height={24}
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@sarahvegamelian" target="_blank" rel="noreferrer">
                                    <Image
                                        src="/Dique_Media_Website_Images/youtube-logo.png?updatedAt=1689368578839"
                                        alt="YouTube"
                                        width={24}
                                        height={24}
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/diquemedia/" target="_blank" rel="noreferrer">
                                    <Image
                                        src="/Dique_Media_Website_Images/instagram.png?updatedAt=1689368578965"
                                        alt="Instagram"
                                        width={24}
                                        height={24}
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/_sarahvega_" target="_blank" rel="noreferrer">
                                    <Image
                                        src="/Dique_Media_Website_Images/twitter.png?updatedAt=1689368578879"
                                        alt="Twitter"
                                        width={24}
                                        height={24}
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="contact__form">
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <label for="name">Name</label>
                            <input className='input' id="name" type="text" name="name" required />
                        </div>
                        <div>
                            <label for="email">Email</label>
                            <input className='input' id="email" type="email" name="email" required />
                        </div>
                        <div>
                            <label for="phone">Phone</label>
                            <input className='input' id="phone" type="tel" name="phone" required />
                        </div>
                        <div>
                            <label for="help">What can we help you with?</label>
                            <input className='input' id="help" type="text" name="help" />
                        </div>
                        <div>
                            <label for="message">Message</label>
                            <textarea className='input-message' rows="2" cols="20" wrap="hard" id="message" name="message" required />
                        </div>

                        <input className="btn" type="submit" value="Send" />

                    </form>
                </div>
            </Container>
            <div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>

        </>
    )
}





export default Contact


