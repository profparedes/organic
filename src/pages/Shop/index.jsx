import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import ProductCard from "../../components/ProductCard";

import BgShop from "../../assets/banners/BgShop.jpg";
import Lettuce from "../../assets/products/Lettuce.jpg";
import Onion from "../../assets/products/Onion.jpg";
import Bean from "../../assets/products/Bean.jpg";
import Lemon from "../../assets/products/Lemon.jpg";
import Spinach from "../../assets/products/Spinach.jpg";
import Apple from "../../assets/products/Apple.jpg";
import Broccoli from "../../assets/products/Broccoli.jpg";
import Basil from "../../assets/products/Basil.jpg";
import Pear from "../../assets/products/Pear.jpg";
import Tomato from "../../assets/products/Tomato.jpg";
import BitterMelon from "../../assets/products/BitterMelon.jpg";
import Cucumber from "../../assets/products/Cucumber.jpg";

const Shop = () => (
    <>
        <Header/>
        <main className="mt-4">
            <PageTitle
            bgImage={BgShop}
            title="Shop"
            />

            <section className="mt-5 container mb-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    <div className="col">
                        <ProductCard 
                            image={Lettuce}
                            title="Lettuce"
                            price="$3.20"
                        />
                    </div>
                    <div className="col">
                        <ProductCard 
                            image={Onion}
                            title="Onion"
                            price="$3.20"
                        />
                    </div>
                    <div className="col">
                        <ProductCard 
                            image={Bean}
                            title="Bean"
                            price="$3.50"
                        />
                    </div>
                    <div className="col">
                        <ProductCard 
                            image={Lemon}
                            title="Lemon"
                            price="$1.08"
                        />
                    </div>
                    <div className="col">
                        <ProductCard 
                            image={Spinach}
                            title="Spinach"
                            price="$2.26"
                        />
                    </div>
                    <div className="col">
                        <ProductCard 
                            image={Apple}
                            title="Apple"
                            price="$4.05"
                        />
                    </div>
                    <div className="col">
                        <ProductCard 
                            image={Broccoli}
                            title="Broccoli"
                            price="$3.88"
                        />
                    </div>
                    <div className="col">
                        <ProductCard 
                            image={Basil}
                            title="Basil"
                            price="$1.55"
                        />
                    </div>
                    <div className="col">
                        <ProductCard 
                            image={Pear}
                            title="Pear"
                            price="$4.80"
                        />
                    </div>
                    <div className="col">
                        <ProductCard 
                            image={Tomato}
                            title="Tomato"
                            price="$2.32"
                        />
                    </div>
                    <div className="col">
                        <ProductCard 
                            image={BitterMelon}
                            title="Bitter Melon"
                            price="$5.20"
                        />
                    </div>
                    <div className="col">
                        <ProductCard 
                            image={Cucumber}
                            title="Cucumber"
                            price="3.45"
                        />
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
);

export default Shop;