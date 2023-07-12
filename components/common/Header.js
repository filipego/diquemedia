import Link from "next/link"

import Container from "./Container"
import Nav from "./Nav"

function Header() {
    return (
        <header className="header">
            <Container classes="flex-space-between pt-2">
                <Link href="/">
                    <a className="logo">Dique Media</a>
                </Link>
                <Nav />
            </Container>
        </header>
    )
}

export default Header