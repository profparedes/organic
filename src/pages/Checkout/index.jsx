import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BgCheckout from "../../assets/banners/BgCheckout.jpg";
import PageTitle from "../../components/PageTitle";
import { NotificationContainer } from "./style";
import { FaCheck } from "react-icons/fa";
import InputItem from "../../components/InputItem";
import Cards from "../../assets/Cards.png";
import Btn from "../../components/Btn";
import { useState } from "react";

const Checkout = () => {

    const [activePayment, setActivePayment] = useState('payment');

    return(
    <>
        <Header/>
        <main className="mt-4">
            <PageTitle
                bgImage={BgCheckout}
                title="Checkout"
            />
        <section className="container">
            <NotificationContainer className="d-flex py-3 mt-5">
                <p className="mb-0 ms-3 me-4"><FaCheck/></p>
                <p className="mb-0 me-2">Returning customer?</p>
                <p className="mb-0 color-link">Click here to login</p>
            </NotificationContainer>
            <NotificationContainer className="d-flex py-3 mt-4">
                <p className="mb-0 ms-3 me-4"><FaCheck/></p>
                <p className="mb-0 me-2">Have a coupon?</p>
                <p className="mb-0 color-link">Click here to enter yout code</p>
            </NotificationContainer>

            <h2 className="mt-5 fs-3">Billing Detail</h2>
            <form className="mt-4">
                <div className="row g-4">
                    <div className="col-lg-6 col-md-12">
                        <InputItem
                            title="First Name *"
                            type="text"
                            idLabel="first-name"
                        />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputItem
                            title="Last Name *"
                            type="text"
                            idLabel="last-name"
                        />
                    </div>
                    <div className="col-12">
                        <InputItem
                            title="Company Name"
                            type="text"
                            idLabel="company-name"
                        />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputItem
                            title="Email Address *"
                            type="email"
                            idLabel="email"
                        />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputItem
                            title="Phone *"
                            type="tel"
                            idLabel="phone"
                        />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputItem
                            title="Country *"
                            type="text"
                            idLabel="country"
                        />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputItem
                            title="Address *"
                            type="text"
                            idLabel="adress"
                        />
                    </div>
                    <div className="col-12">
                        <InputItem
                            title="Town / City *"
                            type="text"
                            idLabel="city"
                        />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputItem
                            title="Postcode / ZIP *"
                            type="number"
                            idLabel="postcode"
                        />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputItem
                            title="Province *"
                            type="text"
                            idLabel="province"
                        />
                    </div>
                </div>
                <div class="form-check mt-4">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Create an account?
                    </label>
                </div>
            </form>
            <h2 className="mt-5">Your order</h2>
            <div className="row mt-5">
                <div className="col-6 border py-3">
                    <p className="ms-2 mb-0 fw-bolder">Product</p>
                </div>
                <div className="col-6 border py-3">
                    <p className="ms-2 mb-0 fw-bolder">Total</p>
                </div>
                <div className="col-6 border py-3">
                    <p className="ms-2 mb-0">Lettuce x 1</p>
                </div>
                <div className="col-6 border py-3">
                    <p className="ms-2 mb-0">$2.26</p>
                </div>
                <div className="col-6 border py-3">
                    <p className="ms-2 mb-0">Apple x 1</p>
                </div>
                <div className="col-6 border py-3">
                    <p className="ms-2 mb-0">$4.05</p>
                </div>
                <div className="col-6 border py-3">
                    <p className="ms-2 mb-0 fw-bolder">Subtotal</p>
                </div>
                <div className="col-6 border py-3">
                    <p className="ms-2 mb-0 fw-bolder">$6.31</p>
                </div>
                <div className="col-6 border py-3">
                    <p className="ms-2 mb-0 fw-bolder">Shipping</p>
                </div>
                <div className="col-6 border py-3">
                    <p className="ms-2 mb-0 fw-bolder">Flat rate</p>
                </div>
                <div className="col-6 border py-3">
                    <p className="ms-2 mb-0 fw-bolder">Total</p>
                </div>
                <div className="col-6 border py-3">
                    <p className="ms-2 mb-0 fw-bolder">$6.31</p>
                </div>
            </div>

            <div className="mt-5">
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        onClick={(e) => setActivePayment(e.target.value)} 
                        name="flexRadioDefault" 
                        id="flexRadioDefault1"
                        value="payment"
                        checked={activePayment === 'payment'}
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Check Payments
                    </label>
                </div>
                {activePayment === 'payment' &&
                <div className="ms-3 bg-light py-3 ps-3 mt-3">
                    <p className="mb-0 text-muted">Please send a check to Store Name, Store Street, Store Town, Store State / Country, Store Postcode.</p>
                </div>
                }
                <div className="form-check d-flex align-items-center mt-4">
                    <input 
                        className="form-check-input me-2" 
                        onClick={(e) => setActivePayment(e.target.value)}
                        type="radio" 
                        name="flexRadioDefault" 
                        id="flexRadioDefault2"
                        value="paypal"
                        checked={activePayment === 'paypal'}
                    />
                    <div>
                        <label className="form-check-label d-flex flex-column d-sm-block" for="flexRadioDefault2">
                            PayPal
                            <img className="mx-3" src={Cards} alt="Cards"/>
                            What is PayPal?
                        </label>
                    </div>
                </div>
                {activePayment === 'paypal' && 
                <div className="ms-3 bg-light py-3 ps-3 mt-3">
                    <p className="mb-0 text-muted">Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.</p>
                </div>
                }
            </div>
            <div className="d-flex mt-5 mb-5">
                <Btn
                    title="Place Order"
                />
            </div>
        </section>
        </main>
        <Footer/>
    </>

)};

export default Checkout;