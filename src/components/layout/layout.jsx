import Nav from "./nav.jsx";
import Footer from "./footer.jsx";

function Layout({ children }) {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
