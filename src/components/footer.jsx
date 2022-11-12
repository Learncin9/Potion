import { useEffect, useState } from "react";

import { DNSlink } from "../context/DNS-link";
import { useContext } from "react";

const JoinButton = () => {
    const homeDNS = useContext(DNSlink);

    return (
        <input
            type="button"
            onClick={() => {
                window.open(homeDNS + "static/hire.html");
            }}
            target="_blank"
            style={{
                marginBottom: "25px",
                width: "100%",
                fontSize: "larger",
                verticalAlign: "underline",
                display: "block",
            }}
            value="Potion Studio와 함께하기! 🔥"
        />
    );
};

function Footer() {
    const [donator, SetDonator] = useState(new Array(0));
    useEffect(() => {
        let nameList;
        let viewData = "";
        fetch("http://localhost:3000/donatorAndStarter")
            .then((response) => response.json())
            .then((jsonData) => {
                nameList = jsonData["data"];

                nameList.map((item) => {
                    viewData += `${item} `;
                });

                SetDonator(viewData);
            });
    }, []); //execute only once
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
                저희에게 참여하고 싶으시다면, 아래의 버튼을 눌러주세요. Internet
                Explorer는 본 웹사이트에서 재대로 동작하지 않을수 있습니다.
                Chrome브라우저를 사용하기를 권장합니다. 본 웹사이트에 기재된
                이메일을 제외한 모든 이메일은 Potion Studio의 이메일이 아닙니다.
                사칭에 주의하십시오.
                <JoinButton />
                Potion Studio는 아래의 기부자 분들의 지원으로 제공됩니다. 아래의
                기부자 및 창립 파트너들에게 감사를 표합니다.
                <br />
                <span style={{ fontWeight: "bold" }}>: {donator}</span>
            </p>
        </div>
    );
}

export default Footer;
