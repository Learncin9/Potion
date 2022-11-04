import Layout from "./layout.jsx";
import "./../css/layout.css";

import CardDeck from "../components/card-deck.jsx";

function Home() {
    return (
        <Layout>
            <div className="layout-spread">
                <CardDeck deckTitle="Games" deckLink="https://www.google.com" />
            </div>
        </Layout>
    );
}

export default Home;
