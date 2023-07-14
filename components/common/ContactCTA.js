import Link from "next/link"
import Image from 'next/image'
import { useRouter } from 'next/router'
import Container from "./Container"


function ContactCTA() {
    const router = useRouter()

    return (

        <Container classes={`cta ${router.pathname === "/contact" ? "remove-cta" : ""}`}>

            <div className="contactCTA">
                <h2>let us take you further than you've ever been.</h2>
                <Link href="/contact">
                    <a className="contactCTA__btn">
                        <div className="icon">
                            <Image
                                src="/Dique_Media_Website_Images/up-right.png?updatedAt=1689373412999"
                                alt="Arrow Up Right"
                                width={30}
                                height={30}
                            />
                        </div>
                        <p>Contact Us</p>
                    </a>
                </Link>
            </div>


        </Container>



    )
}

export default ContactCTA