import { CloseButton, LineDivisor } from "./style";
import { AiFillCloseCircle } from "react-icons/ai"

const ItemProductMobile = ({title, weight, quantity, price}) => (
    <div className="row border">
        <div className="d-flex justify-content-between py-2 px-3">
            <p className="mb-0 fw-bolder">Product:</p>
            <p className="mb-0">{title}</p>
        </div>
        <LineDivisor className="d-flex justify-content-between py-2 px-3">
            <p className="mb-0 fw-bolder">Weight:</p>
            <p className="mb-0">{weight}</p>
        </LineDivisor>
        <div className="d-flex justify-content-between py-2 px-3">
            <p className="mb-0 fw-bolder">Quantity:</p>
            <p className="mb-0">{quantity}</p>
        </div>
        <LineDivisor className="d-flex justify-content-between py-2 px-3">
            <p className="mb-0 fw-bolder">Price:</p>
            <p className="mb-0">{`$${price}`}</p>
        </LineDivisor>
        <div className="d-flex justify-content-between py-2 px-3">
            <p className="mb-0 fw-bolder">Total:</p>
            <p className="mb-0">{`$${price * quantity}`}</p>
        </div>
        <LineDivisor className="d-flex justify-content-end py-2 px-3">
            <CloseButton>
                <AiFillCloseCircle size={24}/>
            </CloseButton>
        </LineDivisor>
    </div>
);

export default ItemProductMobile;