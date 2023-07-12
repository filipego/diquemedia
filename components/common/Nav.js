import Link from "next/link"
import { useRouter } from 'next/router'


function Nav() {
    const router = useRouter()

    return (

        <nav className="nav">
            <ul className="flex-space-between">
                <li><Link href="/"><a className={router.pathname === "/" ? "active" : ""}>Home</a></Link></li>
                <li> <Link href="/podcasts"><a className={router.pathname === "/podcasts" ? "active" : ""}>Podcasts</a></Link></li>
                <li> <Link href="/labodega"><a className={router.pathname === "/labodega" ? "active" : ""}>La Bodega</a></Link></li>
                <li> <Link href="/about"><a className={router.pathname === "/about" ? "active" : ""}>About</a></Link></li>
                <li className="contact-btn"> <Link href="/contact"><a className={router.pathname === "/contact" ? "active" : ""}>Contact</a></Link></li>
            </ul>
        </nav>


    )
}

export default Nav