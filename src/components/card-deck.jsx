import { useEffect } from "react";
import { useState } from "react";
import "./../css/layout.css";

import { DNSlink } from "../context/DNS-link";
import { useContext } from "react";

import Card from "./card.jsx";

function CardDeck({ deckTitle, deckLink }) {
    const [viewData, SetViewData] = useState(new Array(0));
    const homeDNS = useContext(DNSlink);

    useEffect(() => {
        //Fetch data

        /*Use Fetch() at homeDNS = "some link bla bla bla" */

        SetViewData([
            {
                img: {
                    link: "https://i.ytimg.com/vi/B7HaMN_mcKk/maxresdefault.jpg",
                    alt: "Very very happy woman",
                },
                btn: {
                    link: "/blog",
                    text: "Go to Google",
                },
            },
            {
                img: {
                    link: "",
                    alt: "Very very happy woman",
                },
                btn: {
                    link: "/blog",
                    text: "Go to Google",
                },
            },
            {
                img: {
                    link: "",
                    alt: "Very very happy woman",
                },
                btn: {
                    link: "https://www.google.com",
                    text: "Go to Google",
                },
            },
        ]);
    }, []);

    return (
        <>
            <h2 style={{ marginTop: "15px", fontWeight: "bolder" }}>
                {deckTitle}
            </h2>
            <hr />
            <div className="custom-card-grid" style={{ marginBottom: "15px" }}>
                {viewData.map((item, index) => {
                    return (
                        <Card
                            className="hover-up"
                            key={index}
                            img={{
                                link: item.img.link,
                                alt: item.img.alt,
                            }}
                            btn={{
                                link: item.btn.link,
                                text: item.btn.text,
                            }}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default CardDeck;
