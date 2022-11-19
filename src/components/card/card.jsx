import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./../../css/animation.css";

function C_Card({ img, btn }) {
    let ReactMovePage = useNavigate();

    let isMobileMode = false;
    if (document.body.offsetWidth <= 600) {
        //if it is mobile view
        isMobileMode = true;
    }

    return (
        <Card className="hover-zoomin-parent">
            <Card.Img
                variant="top"
                src={img.link}
                alt={img.alt}
                className={isMobileMode ? null : "hover-zoomin"}
            />
            <Card.Body>
                <Button
                    variant="primary"
                    onClick={() => {
                        ReactMovePage(btn.link);
                    }}
                >
                    {btn.text}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default C_Card;
