import { useEffect, useContext } from "react";
import { DNSlink } from "./../context/DNS-link";
import { useState } from "react";

import Layout from "./../components/layout/layout";
import FilterList from "../components/List/filter-list";
import HorizontalCard from "./../components/List/texted-list-element";

import "./../css/layout.css";

function BlogList() {
    const homeDNS = useContext(DNSlink);

    const [dataList, SetDataList] = useState({ data: new Array(0) });

    useEffect(() => {
        fetch(homeDNS + "blog-list")
            .then((response) => response.json())
            .then((blogList) => {
                SetDataList({ data: blogList.data });
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <Layout>
            <div className="layout-spread">
                <FilterList>
                    {dataList.data.map((item, index) => {
                        return (
                            <HorizontalCard
                                title={item.title}
                                hash={item.hash}
                                btn={{
                                    link: item.btn.link,
                                    text: item.btn.text,
                                }}
                                key={index}
                                index={null}
                            />
                        );
                    })}
                </FilterList>
            </div>
        </Layout>
    );
}

export default BlogList;
