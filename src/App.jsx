import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DNSlink } from "./context/DNS-link.jsx";

import Home from "./pages/home.jsx";
import BlogList from "./pages/blog-list.jsx";
import BlogView from "./pages/blog-view";
import "bootstrap/dist/css/bootstrap.min.css";

const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};
function App() {
    const SERVER_DNS_LINK = "http://localhost:3000/";
    console.log("SERVER_DNS_LINK => " + SERVER_DNS_LINK);

    return (
        <DNSlink.Provider value={SERVER_DNS_LINK}>
            <div className="App" style={{ overflowY: "auto" }}>
                <Router>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/blog" element={<BlogList />} />
                        <Route path="/blog/:id" element={<BlogView />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </div>
        </DNSlink.Provider>
    );
}

export default App;
