import Logo from "../Logo";
import FooterLinks from "./FooterLinks";
import { FooterContainer, UnderFooterContainer } from "./style";
import {GrLocation} from "react-icons/gr";
import {BsTelephone} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";

import DiscoveryCard from "../../assets/DiscoveryCard.png";
import PayPalCard from "../../assets/PayPalCard.png";
import VisaCard from "../../assets/VisaCard.png";
import MasterCard from "../../assets/MasterCard.png";

const Footer = () => (
    <footer>
        <FooterContainer className="">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3 col-sm-4">
                        <Logo/>
                        <p className="mt-4 fs-sm"><span className="me-3"><GrLocation size={20}/></span>379 5th Ave New York, NYC 10018</p>
                        <p className="fs-sm"><span className="me-3"><BsTelephone size={20}/></span>(+1) 96 716 6879</p>
                        <p className="fs-sm"><span className="me-3"><AiOutlineMail size={20}/></span>contact@site.com</p>
                    </div>
                    <div className="col-md-2 col-sm-4 col-12">
                        <FooterLinks
                            title="shop"
                            links={["Food", "Farm", "Health", "Organic"]}
                        />
                    </div>
                    <div className="col-md-2 col-sm-4 col-12">
                        <FooterLinks
                            title="support"
                            links={["Contact Us", "FAQ", "Privacy Policy", "Blog"]}
                        />
                    </div>
                    <div className="col-md-2 col-sm-4 col-12">
                        <FooterLinks
                            title="My Account"
                            links={["Sing In", "My Cart", "My Wishlist", "Check Out"]}
                        />
                    </div>
                    <div className="col-md-3 col-sm-8 col-12">
                        <div>
                            <p className="fs-5 text-uppercase">Newsletter</p>
                            <p className="fs-sm">Subscribe now to get daily updates</p>
                            <div className="mb-3 bg-white rounded-pill d-flex">
                                <input type="text" placeholder="Your Email..." className="w-100 border-0 flex-grow-1 rounded-pill ps-3 py-2"/>
                                <button className="d-flex align-items-center rounded-circle btn btn-outline-secondary bg-green"><AiOutlineMail color="#fff" size={18}/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FooterContainer>
        <UnderFooterContainer className="py-4">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 align-items-center justify-content-between">
                    <div className="col mb-2">
                        <p className="mb-0 text-center text-sm-start">Copyright © 2017 Designed by AuThemes. All rights reserved.</p>
                    </div>
                    <div className="col text-center text-sm-end">
                        <img className="img-fluid me-4 mb-2" src={DiscoveryCard} alt="DiscoveryCard"/>
                        <img className="img-fluid me-4 mb-2" src={PayPalCard} alt="DiscoveryCard"/>
                        <img className="img-fluid me-4 mb-2" src={VisaCard} alt="DiscoveryCard"/>
                        <img className="img-fluid" src={MasterCard} alt="DiscoveryCard"/>
                    </div>
                </div>
            </div>

        </UnderFooterContainer>
    </footer>
);

export default Footer;