import Nav from './../components/nav.jsx';
import Footer from './../components/footer.jsx';


function Layout({children}) {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
}

export default Layout;