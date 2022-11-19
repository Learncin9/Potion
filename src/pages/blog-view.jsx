import Layout from "./../components/layout/layout";
import "./../css/layout.css";
import { useEffect, useContext } from "react";
import { DNSlink } from "./../context/DNS-link";
import { useState } from "react";
import { useParams } from "react-router-dom";

const TagText = ({ children, tag }) => {
    if (tag === "h1") {
        return <h1>{children}</h1>;
    } else if (tag === "h2") {
        return <h2>{children}</h2>;
    } else if (tag === "h3") {
        return <h3>{children}</h3>;
    } else if (tag === "h4") {
        return <h4>{children}</h4>;
    } else if (tag === "h5") {
        return <h5>{children}</h5>;
    } else if (tag === "h6") {
        return <h6>{children}</h6>;
    } else if (tag === "p") {
        return <p>{children}</p>;
    } else if (tag === "strong") {
        return <strong>{children}</strong>;
    }
};

const GetIframeVersionizedYoutubeLink = (_src) => {
    let id = _src.split("/")[4];

    if (id === undefined && !_src.includes("watch")) {
        //if user copyed link at browser link tab
        id = _src.split("/")[3];
    } else if (id === undefined && _src.includes("watch")) {
        //if user copyed link at video
        const newId = _src.split("/")[3].split("v=")[1];
        id = newId;
    } //else -> user copyed link at share
    return `https://www.youtube.com/embed/${id}`;
};

const RenderContent = ({ elementList }) => {
    return (
        <div>
            {elementList.map((item, index) => {
                if (item.type === "text") {
                    return (
                        <TagText tag={item.tag} key={index}>
                            {item.content}
                        </TagText>
                    );
                } else if (item.type === "youtube") {
                    return (
                        <iframe
                            style={{
                                width: screen.width > 600 ? "55%" : "100%",
                                aspectRatio: "1/0.63",
                                display: "block",
                                marginBottom: "4px",
                                borderRadius: "4px",
                            }}
                            src={GetIframeVersionizedYoutubeLink(item.src)}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            key={index}
                        >
                            {item.content}
                        </iframe>
                    );
                } else if (item.type === "image") {
                    return (
                        <img
                            src={item.src}
                            alt={item.alt}
                            key={index}
                            style={{
                                width: "100%",
                                borderRadius: "4px",
                                display: "100%",
                            }}
                        ></img>
                    );
                } else if (item.type === "link") {
                    console.log(item);
                    return (
                        <a href={item.href} target="_blank" key={index}>
                            {item.content}
                        </a>
                    );
                } else {
                    issue = true;
                }
            })}
        </div>
    );
};

function Blog() {
    const homeDNS = useContext(DNSlink);
    const [viewData, SetViewData] = useState({
        title: "로드중",
        author: "로드중",
        body: new Array(0),
    });

    const { id } = useParams();

    useEffect(() => {
        fetch(homeDNS + `static/blog/${id}.json`)
            .then((response) => response.json())
            .then((data) => {
                SetViewData(data);
                console.log(data);
            });
    }, []);

    return (
        <Layout>
            <div
                className="layout-blog"
                style={{ marginTop: "7px", marginBottom: "7px" }}
            >
                <h1 style={{ textAlign: "center" }}>{viewData.title}</h1>
                <h6 style={{ textAlign: "right", fontWeight: "bold" }}>
                    작성자 : {viewData.author}
                </h6>
                <hr />
                <RenderContent elementList={viewData.body} />
            </div>
        </Layout>
    );
}

export default Blog;

/*
{
    "title" : "some text...",
    "author" : "some text...",
    "body" : [
        {
            "type": "text",
            "tag": "h1 or a or ....",
            "content" : "bla bla bla (innerText)"
        },
        {
            "type": "image",
            "src" : "https://...",
            "alt" : "alt description"

            (tag must be <img></img>)
            (image doesn`t have 'content')
        },
        {
            "type": "link",
            "content" : "bla bla bla (innerText)",
            "href": "href link",

            (tag must be <a></a>)
        },
        {
            "type": "youtube",
            "content" : "bla bla bla (innerText)",
            "src" : "https://..."

            (tag must be youtube`s iframe)
            (youtube doesn`t have 'content')
        }
    ]
}

===> build blog dynamically
*/
