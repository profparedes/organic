import Logo from "../Logo";
import MenuDesktop from "./MenuDesktop";
import {AiOutlineMenu, AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuMobile from "../MenuMobile";
import { BgCover } from "./style";

const Header = () => {

    const [activeMenuMobile, setActiveMenuMobile] = useState(false);
    
    return(

    <>

        <MenuMobile show={activeMenuMobile} />
        {activeMenuMobile && 
            <BgCover className="d-md-none position-fixed" onClick={() => setActiveMenuMobile(false)} />
        }
        <header className="pt-2">
            <div className="container d-flex pt-3  justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <div className="me-5">
                        <Logo />
                    </div>
                    <div className="d-none d-md-flex">
                        <MenuDesktop />
                    </div>
                </div>
                <div className="d-none d-md-flex">
                    <Link to="/cart" className="text-gray">
                        <AiOutlineShoppingCart size={28}/>
                    </Link>
                </div>
                <div onClick={() => setActiveMenuMobile(true)} className="d-block d-md-none">
                    <AiOutlineMenu size={28} />
                </div>
            </div>
        </header>
            
    </>
)};

export default Header;