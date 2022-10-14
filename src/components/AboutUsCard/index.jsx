import { GreenLine } from "./style";

const AboutUsCard = ({image, title, description, reverse = "", textEnd = "", alignEnd = ""}) => (
    <div className={`row row-cols-1 row-cols-lg-2 ${reverse}`}>
        <div className="col">
            <img src={image} alt={title} className="img-fluid w-100" />
        </div>
        <div className={`col py-4 ${textEnd} d-flex flex-column ${alignEnd}`}>
            <h2 className="h1">{title}</h2>
            <GreenLine></GreenLine>
            <p>{description}</p>
        </div>
    </div>
);

export default AboutUsCard;