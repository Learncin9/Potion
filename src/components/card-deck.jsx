import { useEffect } from "react";
import { useState } from "react";
import "./../css/layout.css";

import Card from "./card.jsx";

function CardDeck({ deckTitle, deckLink }) {
    const [viewData, SetViewData] = useState(new Array(0));

    useEffect(() => {
        //Fetch data
        SetViewData([
            {
                title: "Chesseum (1)",
                img: {
                    link: "https://static.remove.bg/remove-bg-web/ea3c274e1b7f6fbbfe93fad8b2b13d7ef352f09c/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
                    alt: "Very very happy woman",
                },
                description: "Hey, This is description",
                btn: {
                    link: "https://www.google.com",
                    text: "Go to Google",
                },
            },
            {
                title: "Chesseum (2)",
                img: {
                    link: "https://static.remove.bg/remove-bg-web/ea3c274e1b7f6fbbfe93fad8b2b13d7ef352f09c/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
                    alt: "Very very happy woman",
                },
                description: "Hey, This is description",
                btn: {
                    link: "https://www.google.com",
                    text: "Go to Google",
                },
            },
            {
                title: "Chesseum (3)",
                img: {
                    link: "https://static.remove.bg/remove-bg-web/ea3c274e1b7f6fbbfe93fad8b2b13d7ef352f09c/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
                    alt: "Very very happy woman",
                },
                description: "Hey, This is description",
                btn: {
                    link: "https://www.google.com",
                    text: "Go to Google",
                },
            },
        ]);
    }, []);

    return (
        <>
            <h1>{deckTitle}</h1>
            <hr />
            <div className="custom-card-grid">
                {viewData.map((item, index) => {
                    return (
                        <Card
                            className="hover-up"
                            key={index}
                            title={item.title}
                            img={{
                                link: item.img.link,
                                alt: item.img.alt,
                            }}
                            description={item.description}
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
