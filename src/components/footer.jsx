import { useEffect, useState } from "react";

function Footer() {
    const [data, setData] = useState(new Array(0));
    //    useEffect(() => {
    //        fetch("link here")
    //        .then((response) => response.json())
    //        .then((jsonData) => {
    //            setData(jsonData["data"]);
    //            /*{
    //            "data" : [one, another, the other]
    //            }*/
    //        })
    //    }, []);//execute only once

    useEffect(() => {
        setData(["apple", "banana", "pineapple"]);
    }, []);

    const RenderDonators = () => {
        let viewData = "";
        data.map((item, index) => {
            viewData += `${item} `;
        });
        return viewData;
    };
    return (
        <div style={{ backgroundColor: "#f8f9fa" }}>
            <p style={{ width: "90vw", margin: "auto" }}>
                <span style={{ fontWeight: "bold" }}>Potion Studio</span>
                <br />
                Discord서버의 규칙을 확인하려면,{" "}
                <a href="https://www.google.com" target="_blank">
                    이곳
                </a>
                을 클릭해 주세요. Potion Studio는 지원자를 환영합니다. 만약
                저희에게 참여하고 싶으시다면, 이메일 혹은 디스코드 서버를 통해
                문의 해주세요. Internet Explorer는 본 웹사이트에서 재대로
                동작하지 않을수 있습니다. Chrome브라우저를 사용하기를
                권장합니다. 본 웹사이트에 기재된 이메일을 제외한 모든 이메일은
                Potion Studio의 이메일이 아닙니다. 사칭에 주의하십시오.
                <br />
                <br />
                Potion Studio는 아래의 기부자 분들의 지원으로 제공됩니다. 아래의
                기부자 및 창립 파트너들에게 감사를 표합니다.
                <br />
                <span style={{ fontWeight: "bold" }}>: {RenderDonators()}</span>
            </p>
        </div>
    );
}

export default Footer;
