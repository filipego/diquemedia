import Link from "next/link"
import Image from 'next/image'

import Container from "./Container"
import Nav from "./Nav"

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <header className="footer__header">
                    <Link href="/">
                        <a className="logo">
                            <Image
                                src="/Dique_Media_Website_Images/DIQUE-MEDIA-logo.png?updatedAt=1689120199856"
                                alt="Dique Media Logo"
                                width={120}
                                height={120}
                            />
                        </a>
                    </Link>
                    <Nav />
                </header>
                <div className="footer__bottom flex-space-between">
                    <p>Copyright 2023 © DIQUE MEDIA</p>

                    <nav className="social">
                        <ul className="flex-space-between">
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
            </Container>
        </footer>
    )
}

export default Footer