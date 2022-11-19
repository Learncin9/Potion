import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const HorizontalCard = ({ title, hash, btn }) => {
    let navigate = useNavigate();
    const HashTag = () => {
        return (
            <p
                style={{
                    color: "rgb(53, 53, 223)",
                    fontSize: "18px",
                    fontWeight: "normal",
                }}
            >
                {hash}
            </p>
        );
    };

    let buttonDivStyle;

    if (document.body.offsetWidth <= 600) {
        //is mobile?
        buttonDivStyle = {
            width: "20%",
            height: "100%",
            display: "inline-block",
        };
    } else {
        buttonDivStyle = {
            width: "20%",
            display: "inline-block",
            marginLeft: "5px",
        };
    }
    let returnCard = (
        <Card body style={{ marginBottom: "7px" }}>
            <div
                style={{
                    width: "78%",
                    display: "inline-block",
                    fontWeight: "bold",
                }}
            >
                {title}
                <HashTag></HashTag>
            </div>
            <div style={buttonDivStyle}>
                <Button
                    variant="outline-dark"
                    style={{ transform: "0.5s", width: "100%" }}
                    translate="TranslateY(-50%);"
                    onClick={() => {
                        navigate(btn.link);
                    }}
                >
                    {btn.text}
                </Button>
            </div>
        </Card>
    );

    return returnCard;
};

export default HorizontalCard;
