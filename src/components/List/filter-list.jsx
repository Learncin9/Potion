import { useRef, useTransition } from "react";
import { useEffect } from "react";
import { useState } from "react";

let MDflexContainer = {
    display: "flex",
    justifyContent: "space-between",
};

let searchInputWidth = "20%";

if (screen.width <= 600) {
    MDflexContainer = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    };

    searchInputWidth = "100%";
}

const GetSearchIndex = (item) => {
    return {
        title: item.props.title,
        hash: item.props.hash.substr(1).replace(" ", "").split("#"),
    };
};

//({ width: { searchInputWidth } }, flexContainer)
function FilterList({ children }) {
    const [searchText, SetSearchText] = useState("");
    const [isPending, startTransition] = useTransition();

    return (
        <div style={{ marginTop: "15px", marginBottom: "15px" }}>
            <div style={MDflexContainer}>
                <input
                    type="text"
                    style={{
                        width: searchInputWidth,
                        height: "35px",
                        borderRadius: "4px",
                        border: "1px gray solid",
                    }}
                    placeholder="검색하기"
                    value={undefined}
                    onChange={(event) => {
                        startTransition(() => {
                            SetSearchText(event.target.value);
                        });
                    }}
                />

                <details
                    style={{
                        marginTop: "15px",
                        marginRight: "15px",
                        marginBottom: "15px",
                        fontSize: "large",
                    }}
                >
                    <summary>Hash Tags</summary>
                    <span>
                        <ul style={{ listStyle: "none" }}>
                            {new Array(10).fill(0).map((item, index) => {
                                return (
                                    <li key={index}>
                                        <input type="checkbox" id={index} />
                                        <label
                                            htmlFor={index}
                                            style={{
                                                marginLeft: "7px",
                                                color: "blue",
                                            }}
                                        >
                                            #apple
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>
                    </span>
                </details>
            </div>

            <div>
                {children.map((item) => {
                    if (searchText === "") {
                        return item;
                    } else {
                        //there is a text search
                        const info = GetSearchIndex(item);

                        if (info.title.includes(searchText)) {
                            return item;
                        }
                    }
                })}
            </div>
        </div>
    );
}

export default FilterList;
