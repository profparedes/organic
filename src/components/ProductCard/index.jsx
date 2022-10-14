//import { BsEye } from 'react-icons/bs';
import { useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ProductImg, ProductTitle } from './style';

const ProductCard = ({image, title, price}) => {

    const [showIcons, setShowIcons] = useState(false)

    return(
        <div onMouseOver={() => setShowIcons(true)} onMouseOut={() => setShowIcons(false)}>
            <div className='ratio ratio-1x1 border'>
                <ProductImg src={image} alt={title}/>
                <div className='d-flex flex-column justify-content-end'>
                    <div className='mx-2 mb-2 d-flex justify-content-end align-items-center'>

                        {showIcons && 
                            <div className='d-flex'>
                                <span className='border-bottom border-start border-end p-1'><AiOutlineEye size={26} color="gray"/></span>
                                <span className='border-bottom border-start border-end p-1'><AiOutlineHeart size={26} color="gray"/></span>
                                <span className='border-bottom border-start border-end p-1'><AiOutlineShoppingCart size={26} color="gray"/></span>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <ProductTitle className='text-center py-3'>
                <Link to='/product' className="h4 text-decoration-none mb-3">{title}</Link>
                <p className='mb-0'>{price}</p>
            </ProductTitle>
        </div>
)};

export default ProductCard;