import { useEffect, useContext } from "react";
import { DNSlink } from "../context/DNS-link";
import { useState } from "react";

import Layout from "./layout";
import FilterList from "./../components/filter-list";

import "./../css/layout.css";

function BlogList() {
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
            <div className="layout-spread">
                <FilterList />
            </div>
        </Layout>
    );
}

export default BlogList;
