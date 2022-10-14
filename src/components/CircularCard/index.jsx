import { CircleImg } from "./style";

const CircularCard = ({title, image, subtitle, fontSize = "h1"}) => {
    return(
    <div className="d-flex flex-column align-items-center">
        <CircleImg className="img-fluid rounded-circle mb-5" src={image} alt={title}/>
        <p className={`${fontSize}`}>{title}</p>
        <p>{subtitle}</p>
    </div>
)};

export default CircularCard;