import Layout from "./../components/layout/layout";
import "./../css/layout.css";

import { useContext } from "react";
import { DNSlink } from "./../context/DNS-link.jsx";

import CardDeck from "./../components/card/card-deck.jsx";
import Slide from "./../components/slide";

function Home() {
    const data = useContext(DNSlink);

    return (
        <Layout>
            <Slide />
            <div className="layout-spread">
                <CardDeck
                    deckTitle="Popular Games"
                    deckLink="https://www.google.com"
                />
                <CardDeck
                    deckTitle="Popular blog"
                    deckLink="https://www.google.com"
                />
            </div>
        </Layout>
    );
}

export default Home;
