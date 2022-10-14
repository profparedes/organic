import { BlogContainer } from "./style";

const CardBlog = ({image, title, date, description, order = ""}) => {return(
    <div className={`d-flex flex-column h-100 w-100`}>
        <div className={`order-lg-${order}`}>
            <img className="img-fluid" src={image} alt={title} />
        </div>
        <BlogContainer className="p-4 flex-grow-1">
            <h2 className="fs-4">{title}</h2>
            <p className="text-muted mb-5">{date}</p>
            <p className="lh-lg">{description}</p>
        </BlogContainer>
    </div>
)}

export default CardBlog;