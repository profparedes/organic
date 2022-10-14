import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import CardContact from "../../components/CardContact";
import Btn from "../../components/Btn";

import BgContact from "../../assets/banners/BgContact.jpg";
import {MdLocationPin} from "react-icons/md";
import {FaMobileAlt} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";




const Contact = () => (
    <>
        <Header/>
        <main className="mt-4">
            <PageTitle
            bgImage={BgContact}
            title="Blog Detail"
            />
            <section className="container">
                <div className="row row-cols-1 row-cols-md-3 mt-5 mb-5">
                    <div className="col mb-3">
                        <CardContact
                        icon={<MdLocationPin/>}
                        description="12/2th Quincy St, NYC 12018"
                        />
                    </div>
                    <div className="col mb-3">
                        <CardContact
                        icon={<FaMobileAlt/>}
                        description="(+1) 11 321 4567"
                        />
                    </div>
                    <div className="col">
                        <CardContact
                        icon={<HiOutlineMail/>}
                        description="contact@site.com"
                        />
                    </div>
                </div>
                <div className="mb-5">
                    <div className="ratio ratio-16x9">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3025.3643221481084!2d-73.94411868468286!3d40.68797324702223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s12%2F2th%20Quincy%20St%2C%20NYC%2012018!5e0!3m2!1spt-BR!2sbr!4v1657582338585!5m2!1spt-BR!2sbr" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                <section className="container mb-5">
                    <form className="row g-3 mb-3">
                        <textarea className="col-12 form-control form-control-lg" type="text" placeholder="Your Message" aria-label=".form-control-lg example" rows="6"/>
                        <input className="col-12 col-md me-4 form-control form-control-lg" type="text" placeholder="Your Name" aria-label=".form-control-lg example"/>
                        <input className="col-12 col-md form-control form-control-lg" type="text" placeholder="Your Email" aria-label=".form-control-lg example"/>
                        <input className="col-12 form-control form-control-lg" type="text" placeholder="Phone Number" aria-label=".form-control-lg example"/>
                    </form>
                    <div className="d-inline-block">
                        <Btn
                            title="Send email"
                        />
                    </div>
                </section>

            </section>
        </main>
        <Footer/>
    </>
);

export default Contact;