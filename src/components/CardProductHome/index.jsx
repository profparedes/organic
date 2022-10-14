//import { BsEye } from 'react-icons/bs';
import { useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineEye } from 'react-icons/ai';
import { ProductImg } from './style';

const CardProductHome = ({image, title, price}) => {

    const [showIcons, setShowIcons] = useState(false);

    return(

    <div 
        className='ratio ratio-1x1 border' 
        onMouseOver={() => setShowIcons(true)}
        onMouseOut={() => setShowIcons(false)}
    >
        <ProductImg className='' src={image} alt={title}/>
        <div className='d-flex flex-column justify-content-end'>
            <p className="ms-2 h4">{title}</p>
            <div className='mx-2 mb-2 d-flex justify-content-between align-items-center'>
                <p className='mb-0'>{price}</p>
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
)};

export default CardProductHome;