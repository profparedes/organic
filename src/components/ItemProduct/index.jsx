import { BorderQuantity, CloseButton } from "./style";
import { AiFillCloseCircle } from "react-icons/ai"

const ItemProduct = ({image, title, weight, quantity, price}) => {

    return(
    <div className="row border align-items-center py-4">
        <div className="col-3">
            <div className="d-flex align-items-center justify-content-between">
                <img src={image} alt={title} className="ms-3 border img-fluid w-50" />
                <h2 className="fs-5 mb-0 me-3">{title}</h2>
            </div>
        </div>
        <div className="col-2">
            <p className="mb-0">{weight}</p>
        </div>
        <div className="col-2 text-center">
            <BorderQuantity className="rounded-pill py-2">
                <p className="mb-0">{quantity}</p>
            </BorderQuantity>
        </div>
        <div className="col-2">
            <p className="mb-0">{`$${price}`}</p>
        </div>
        <div className="col-2">
            <p className="mb-0">{`$${quantity * price}`}</p>
        </div>
        <CloseButton className="col-1">
            <AiFillCloseCircle size={24}/>
        </CloseButton>


    </div>
)};

export default ItemProduct