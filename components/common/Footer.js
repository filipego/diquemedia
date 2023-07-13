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
                            <li><a href="#" target="_blank" rel="noreferrer">Social 1</a></li>
                            <li><a href="#" target="_blank" rel="noreferrer">Social 2</a></li>
                            <li><a href="#" target="_blank" rel="noreferrer">Social 3</a></li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </footer>
    )
}

export default Footer