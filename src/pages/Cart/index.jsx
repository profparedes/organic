import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import BgCart from "../../assets/banners/BgCart.jpg";
import ItemProduct from "../../components/ItemProduct";
import Btn from "../../components/Btn";
import ItemProductMobile from "../../components/ItemProductMobile";
import { Link } from "react-router-dom";
import { TitleContainer } from "./style";

import Lettuce from "../../assets/products/Lettuce.jpg";
import Apple from "../../assets/products/Apple.jpg";

const Cart = () => (
    <>
        <Header/>
        <main className="mt-4">
            <PageTitle
            bgImage={BgCart}
            title="Shop Cart"
            />
            <section className="container mt-5 d-none d-md-block">
                <TitleContainer className="row py-3 fw-bolder">
                    <div className="col-3">
                        Product
                    </div>
                    <div className="col-2">
                        Weight
                    </div>
                    <div className="col-2">
                        Quantity
                    </div>
                    <div className="col-2">
                        Price
                    </div>
                    <div className="col-2">
                        Total
                    </div>
                    <div className="col-1">
                    </div>
                </TitleContainer>
                <ItemProduct
                    image={Lettuce}
                    title="Lettuce"
                    weight="0.2kg"
                    quantity={8}
                    price={2.26}
                />
                <ItemProduct
                    image={Apple}
                    title="Apple"
                    weight="0.4kg"
                    quantity={3}
                    price={3.26}
                />
                <div className="row border py-4">
                        <div className="col-lg-3 col-md-6 d-md-block d-lg-flex mb-2">
                        <Btn
                            title="Coupon Code"
                            bgColor=""
                            txtColor="#888"
                        />
                        </div>
                        <div className="col-lg-3 col-md-6 d-md-block d-lg-flex mb-2">
                            <Btn
                                title="Apply coupon"
                            />
                        </div>
                        <div className="col-lg-6 col-md-12 d-md-block d-lg-flex justify-content-end mb-2">
                            <Btn
                                title="Update cart"
                                bgColor=""
                                txtColor="#888"
                            />
                        </div>
                </div>
            </section>

            <section className="container d-block d-md-none mt-4">
                <ItemProductMobile
                    title="Lettuce"
                    weight="0.2kg"
                    quantity={2}
                    price={2.26}
                />
                <ItemProductMobile
                    title="Apple"
                    weight="0.4kg"
                    quantity={3}
                    price={3.26}
                />
                <div className="row border py-4">
                        <div className="col-lg-3 col-md-6 d-md-block d-lg-flex mb-2">
                        <Btn
                            title="Coupon Code"
                            bgColor=""
                            txtColor="#888"
                        />
                        </div>
                        <div className="col-lg-3 col-md-6 d-md-block d-lg-flex mb-2">
                            <Btn
                                title="Apply coupon"
                            />
                        </div>
                        <div className="col-lg-6 col-md-12 d-md-block d-lg-flex justify-content-end mb-2">
                            <Btn
                                title="Update cart"
                                bgColor=""
                                txtColor="#888"
                            />
                        </div>
                </div>
            </section>

            <section className="container mt-4 mb-5">
                <h2 className="mb-4">Cart Total</h2>
                <div className="mb-3">
                    <div className="d-flex">
                        <p className="border w-25 py-3 ps-2 mb-0">Subtotal</p>
                        <p className="border w-25 py-3 ps-2 mb-0">$######</p>
                    </div>
                    <div className="d-flex">
                        <p className="border w-25 py-3 ps-2 mb-0">Total</p>
                        <p className="border w-25 py-3 ps-2 mb-0">$######</p>
                    </div>
                </div>
                <div className="d-flex">
                    <Link to="/checkout" className="d-flex text-decoration-none">
                        <Btn
                            title="Proceed to checkout"
                        />
                    </Link>
                </div>
            </section>

        </main>
        <Footer/>
    </>
);

export default Cart;