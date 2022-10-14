import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import InfoProduct from "../../components/InfoProduct";
import DescriptionProduct from "../../components/DescriptionProduct";
import SectionTitle from "../../components/SectionTitle";
import ProductCard from "../../components/ProductCard";

//----------------------import images-----------------------
import BgDetail from "../../assets/banners/BgDetail.jpg";
import Lettuce from "../../assets/products/Lettuce.jpg";
import Onion from "../../assets/products/Onion.jpg";
import Bean from "../../assets/products/Bean.jpg";
import Basil from "../../assets/products/Basil.jpg";
import Spinach from "../../assets/products/Spinach.jpg";

const Product = () => (
    <>
        <Header/>
        <main className="mt-4">
            <PageTitle
             bgImage={BgDetail}
             title="Shop Detail"
            />

            <section className="container mt-5">
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col mb-4">
                        <img className="img-fluid w-100" src={Lettuce} alt="Lettuce" />
                    </div>
                    <div className="col">
                        <InfoProduct
                        title="Lettuce"
                        price="$2.00"
                        description="Duis vestibulum ante velit. Pellentesque orci felis, pharetra ut pharetra ut, interdum at mauris. Aenean efficitur aliquet libero sit amet scelerisque. Suspendisse efficitur mollis eleifend. Aliquam tortor nibh, venenatis quis sem dapibus, varius egestas lorem a sollicitudin."
                        categories="food"
                        tags={["Natural", "Organic", "Health", "Grenn", "Vegetable"]}
                        id="A203"

                        />
                    </div>
                </div>
                <div className="container mt-5">
                    <DescriptionProduct
                    description="Phasellus consectetur elit massa, tristique tincidunt mi aliquam at. Duis dolor magna, viverra vel ullamcorper ac, semper non ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In est enim, lacinia nec sem eget, aliquam vulputate nisi. Nam gravida eu ex sed fermentum. Sed non sapien vitae diam lobortis consequat. Morbi augue eros, ultrices vitae quam ut, pharetra ornare felis. Proin ligula sapien, suscipit et justo id, malesuada fermentum elit. Donec fermentum pretium orci. Nulla commodo accumsan tortor, id pretium tortor. Cras ultricies nisl non nibh ultricies, viverra dapibus ante euismod. Suspendisse a elementum lorem."
                    />
                </div>
            </section>

            <section className="container mb-5">
                <SectionTitle
                    title="Related Products"
                    borderTop = ""
                />

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
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
                            image={Basil}
                            title="Basil"
                            price="$1.55"
                        />
                    </div>
                    <div className="col">
                        <ProductCard
                            image={Spinach}
                            title="Spinach"
                            price="$2.26"
                        />
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
);

export default Product;