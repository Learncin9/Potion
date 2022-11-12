import Layout from "./layout";
import "./../css/layout.css";
import { useEffect, useContext } from "react";
import { DNSlink } from "../context/DNS-link";
import { useState } from "react";

const RenderContent = ({ data }) => {
    if (data === null) {
        return null;
    } else {
        return (
            <>
                {data.body.map((item, index) => {
                    return <p>{index}</p>;
                })}
            </>
        );
    }
};
function Blog() {
    const homeDNS = useContext(DNSlink);
    const [viewData, SetViewData] = useState(null);

    useEffect(() => {
        fetch(homeDNS + "static/blog/00001.json")
            .then((response) => response.json())
            .then((data) => {
                SetViewData(data);
                console.log(data);
            });
    }, []);

    return (
        <Layout>
            <div className="layout-blog blog-view">
                <RenderContent data={viewData} />
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
