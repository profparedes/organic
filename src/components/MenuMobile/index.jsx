import { Link } from "react-router-dom";
import Logo from "../Logo";
import { InputContainer, LogoContainer, MenuContainer } from "./style";
import { IoIosArrowForward } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const MenuMobile = ({show}) => (
        <MenuContainer className={`${show ? "show" : ""} position-fixed bg-white d-flex d-md-none flex-column`}>
            <div className="d-flex align-items-center flex-column">
                <LogoContainer className="mt-3">
                    <Logo/>
                </LogoContainer>
                <InputContainer 
                    type="text" 
                    className="rounded border-0 mt-3 py-1 ps-2" 
                    placeholder="Need some fresh vegatables?"
                />
            </div>
            <div className="mt-4 flex-grow-1">
                <h2 className="ms-3 fs-6 text-black-50">Organic Shop</h2>
                <div className="border w-100" ></div>
                <div className="py-3 ms-3 border-bottom d-flex justify-content-between pe-3">
                    <Link to="/" className="text-decoration-none text-dark">Home</Link>
                    <div><IoIosArrowForward/></div>
                </div>
                <div className="py-3 ms-3 border-bottom d-flex justify-content-between pe-3">
                    <Link to="/shop" className="text-decoration-none text-dark">Shop</Link>
                    <div><IoIosArrowForward/></div>
                </div>
                <div className="py-3 ms-3 border-bottom d-flex justify-content-between pe-3">
                    <Link to="/about" className="text-decoration-none text-dark">About</Link>
                    <div><IoIosArrowForward/></div>
                </div>
                <div className="py-3 ms-3 border-bottom d-flex justify-content-between pe-3">
                    <Link to="/contact" className="text-decoration-none text-dark">Contact</Link>
                    <div><IoIosArrowForward/></div>
                </div>
                <div className="py-3 ms-3 border-bottom d-flex justify-content-between pe-3">
                    <Link to="/cart" className="text-decoration-none text-dark">Cart</Link>
                    <div><IoIosArrowForward/></div>
                </div>
            </div>
            <div className="border w-100" ></div>
            <div className="row mt-3 mb-3">
                <div className="col d-flex justify-content-center text-black-50">
                    <MdEmail size={18}/>
                </div>
                <div className="col d-flex justify-content-center text-black-50">
                    <AiOutlineTwitter size={18}/>
                </div>
                <div className="col d-flex justify-content-center text-black-50">
                    <FaFacebookF size={18}/>
                </div>

            </div>
        </MenuContainer>
)

export default MenuMobile;