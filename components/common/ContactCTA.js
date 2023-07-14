import Link from "next/link"
import { useRouter } from 'next/router'
import Container from "./Container"


function ContactCTA() {
    const router = useRouter()

    return (

        <Container classes={`cta ${router.pathname === "/contact" ? "remove-cta" : ""}`}>

            <div className="contactCTA">
                <h2>let us take you further than you've ever been.</h2>
                <Link href="/contact">
                    <a className="contact-cta-btn">Contact Us</a>
                </Link>
            </div>


        </Container>



    )
}

export default ContactCTA