import Carousel from "react-bootstrap/Carousel";

import { useContext } from "react";
import { DNSlink } from "./../context/DNS-link.jsx";

function Slide() {
    const homeDNS = useContext(DNSlink);
    return (
        <Carousel style={{ marginTop: "0" }}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={homeDNS + "static/slide1.png"}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={homeDNS + "static/slide2.png"}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={homeDNS + "static/slide3.png"}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Slide;
