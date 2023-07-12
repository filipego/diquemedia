import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import ContactCTA from "../components/common/ContactCTA"





function Layout({ children, pageClass }) {

    return (
        <div id="app" className={pageClass}>
            <Header />
            {children}
            <ContactCTA />
            <Footer />
        </div>
    )
}

export default Layout 