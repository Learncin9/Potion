import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HorizontalCard = ({ title, hash, link }) => {
    const HashTag = () => {
        return (
            <p
                style={{
                    color: "rgb(53, 53, 223)",
                    fontSize: "18px",
                }}
            >
                {hash}
            </p>
        );
    };

    if (screen.width > 600) {
        //not mobile
        return (
            <div
                className="card"
                style={{
                    width: "100%",
                    marginBottom: "15px",
                    marginTop: "15px",
                }}
            >
                <div className="card-body">
                    <h2 className="card-title" style={{ fontWeight: "bold" }}>
                        {title}
                        <HashTag></HashTag>
                    </h2>
                    <Link
                        to={link}
                        className="btn btn-dark"
                        style={{
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            width: "10%",
                        }}
                    >
                        📃
                    </Link>
                </div>
            </div>
        );
    } else {
        //mobile
        return (
            <div
                className="card"
                style={{
                    width: "100%",
                    marginBottom: "15px",
                    marginTop: "15px",
                }}
            >
                <div className="card-body">
                    <h3
                        className="card-title"
                        style={{
                            fontWeight: "bold",
                            width: "70%",
                            display: "inline-block",
                        }}
                    >
                        {title}
                        <HashTag></HashTag>
                    </h3>
                    <Link
                        to={link}
                        className="btn btn-dark"
                        style={{
                            float: "right",
                            padding: "15px",
                        }}
                    >
                        📃
                    </Link>
                </div>
            </div>
        );
    }
};

function FilterList() {
    const [dataList, SetDataList] = useState({ data: new Array(0) });

    const d = {
        data: [
            {
                title: "GPU의 랜더링 파이프 라인",
                hash: "#GPU #HSHL",
                link: "/",
            },
            {
                title: "GPU의 랜더링 파이프 라인",
                hash: "#GPU #HSHL",
                link: "/",
            },
            {
                title: "GPU의 랜더링 파이프 라인",
                hash: "#GPU #HSHL",
                link: "/",
            },
            {
                title: "GPU의 랜더링 파이프 라인",
                hash: "#GPU #HSHL",
                link: "/",
            },
            {
                title: "JS의 Reference Data Type",
                hash: "#JS #.fill()",
                link: "/",
            },
        ],
    };

    useEffect(() => {
        SetDataList(d);
    }, []);

    return (
        <div>
            {dataList.data.map((item, index) => {
                return (
                    <HorizontalCard
                        title={item.title}
                        hash={item.hash}
                        link={item.link}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

export default FilterList;
