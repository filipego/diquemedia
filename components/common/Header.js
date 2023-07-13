import Link from "next/link"
import Image from 'next/image'

import Container from "./Container"
import Nav from "./Nav"

function Header() {
    return (
        <header className="header">
            <Container classes="flex-space-between pt-2">
                <Link href="/">
                    <a className="logo">
                        <Image
                            src="/Dique_Media_Website_Images/DIQUE-MEDIA-logo.png?updatedAt=1689120199856"
                            alt="Dique Media Logo"
                            width={90}
                            height={90}
                        />
                    </a>
                </Link>
                <Nav />
            </Container>
        </header>
    )
}

export default Header