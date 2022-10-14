import { useCallback } from "react";
import { useState } from "react";
import {AiFillHeart} from "react-icons/ai";
import {FaFacebookF, FaPinterest, FaTwitter, FaGooglePlusG, FaInstagram} from "react-icons/fa";
import { DivisorLine } from "./style";

const InfoProduct = ({title, price, description, categories, tags, id}) => {
    
    const [quantity, setQuantity] = useState(0);
    const subtract = useCallback(() => setQuantity(quantity >= 1 ? quantity - 1 : 0), [quantity]); 
    const add = useCallback(() => setQuantity(quantity + 1), [quantity]); 

    return(
    <div>
        <h2 className="mb-4">{title}</h2>
        <p>{price}</p>
        <DivisorLine className="mb-4"></DivisorLine>
        <p>{description}</p>
        <div className="row row-cols-1 row-cols-md-3 g-3 align-items-center mb-5">
            <div className="col d-flex justify-content-center">
                <div className="d-flex py-2">
                    <div className="border-green py-3 px-4" onClick={subtract}>-</div>
                    <div className="border-green py-3 px-4">{quantity}</div>
                    <div className="border-green py-3 px-4" onClick={add}>+</div>
                </div>
            </div>
            <div className="col">
                <p className="text-white bg-green text-center py-3 mb-0">Add to cart</p>
            </div>
            <div className="col">
                <div className="text-center border-green py-3 px-4"><AiFillHeart color="#97ae76" size={24}/></div>
            </div>
        </div>
        <DivisorLine className="mb-4"></DivisorLine>
        <p>Categories: {categories}</p>
        <p>Tags: {tags.map((tag) => `${tag}, `)}</p>
        <p>ID: {id}</p>
        <DivisorLine></DivisorLine>
        <div className="d-flex mt-5">
            <div className="me-3">
            <FaFacebookF color="gray" size={20}/> 
            </div>
            <div className="me-3">
            <FaPinterest color="gray" size={20}/> 
            </div>
            <div className="me-3">
            <FaTwitter color="gray" size={20}/> 
            </div>
            <div className="me-3">
            <FaGooglePlusG color="gray" size={26}/> 
            </div>
            <div>
            <FaInstagram color="gray" size={20}/>                
            </div>
        </div>
    </div>
)}

export default InfoProduct;
