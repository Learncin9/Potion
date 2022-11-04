import "./../css/font.css";
import "./../css/animation.css";

function Card({ title, img, description, btn }) {
    return (
        <div
            className="card hover-up"
            style={{ display: "inline-block", minHeight: "0" }}
        >
            <img src={img.link} className="card-img-top" alt={img.alt} />
            <div className="card-body mobile-font">
                <h1 className="card-title" style={{ fontWeight: "bolder" }}>
                    {title}
                </h1>
                <p className="card-text">{description}</p>

                <div
                    style={{ color: "rgb(53, 53, 223)", marginBottom: "7px" }}
                    id="hashtag"
                >
                    #hash
                </div>

                <a href={btn.link} className="btn btn-primary">
                    {btn.text}
                </a>
            </div>
        </div>
    );
}

export default Card;
