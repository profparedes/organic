//---------------import components --------------------
import CircularCard from "../../components/CircularCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionTitle from "../../components/SectionTitle";
import CardProductHome from "../../components/CardProductHome";
import Btn from "../../components/Btn";
import CardBlog from "../../components/CardBlog";

//-------------import images--------------------
import Vegetable from "../../assets/Vegetable.jpg";
import Fruit from "../../assets/Fruit.jpg";
import Meat from "../../assets/Meat.jpg";
import Broccoli1x1 from "../../assets/Broccoli1x1.jpg";
import Bean1x1 from "../../assets/Bean1x1.jpg";
import Salad1x1 from "../../assets/Salad1x1.jpg";
import Lemon1x1 from "../../assets/Lemon1x1.jpg";
import Onion1x1 from "../../assets/Onion1x1.jpg";
import OrganicProducts from "../../assets/OrganicProducts.jpg";
import GreenVegetables from "../../assets/GreenVegetables.jpg";
import RefreshingGreen from "../../assets/RefreshingGreen.jpg";

//-------------import styles--------------------
import { BannerFollow, BannerSection, BannerViewMore } from "./style";
import { AiOutlineInstagram } from "react-icons/ai"


const Home = () => {

    
 
    return(

    <>
        <BannerSection>
            <Header/>
        </BannerSection>
        <main className="flex-grow-1">
            <section className="container mb-5">
                <div className="mt-5 row g-4">
                    <div className="col-12 col-md-4">
                        <CircularCard
                        title="Vegetable"
                        image={Vegetable}
                        />
                    </div>
                    <div className="col-12 col-md-4">
                        <CircularCard
                        title="Fruit"
                        image={Fruit}
                        />
                    </div>
                    <div className="col-12 col-md-4">
                        <CircularCard
                        title="Meat"
                        image={Meat}
                        />
                    </div>
                </div>
            </section>

            <section className="container mb-5">
                <SectionTitle
                    title="Our Products"
                />
                <div className="row">
                    <div className="col-12 col-lg-3 d-flex flex-column">
                        <div className="mb-4">
                            <CardProductHome
                            image={Broccoli1x1}
                            title="Broccoli"
                            price="$2.00"                
                            />
                        </div>
                        <div className="mb-4">
                            <CardProductHome
                            image={Bean1x1}
                            title="Bean"
                            price="$1.10"                
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mb-4">
                        <CardProductHome
                        image={Salad1x1}
                        title="Spinach"
                        price="$3.20"                
                        />
                    </div>
                    <div className="col-12 col-lg-3 d-flex flex-column">
                        <div className="mb-4">
                            <CardProductHome
                            image={Lemon1x1}
                            title="Lemon"
                            price="$3.10"                
                            />
                        </div>
                        <div className="mb-4">
                            <CardProductHome
                            image={Onion1x1}
                            title="Onion"
                            price="$2.00"                
                            />
                        </div>
                    </div>
                </div>
                
            </section>

            <BannerViewMore className="text-white d-flex flex-column align-items-center justify-content-center">
                <div className="d-none d-md-flex flex-column align-items-center" >
                    <p className="fs-3">Organic Food</p>
                    <h2 className="fs-9 mb-5">Healthy - Fresh - Delicious.</h2>
                </div>
                <div className="d-flex d-md-none flex-column align-items-center" >
                    <p className="fs-5">Organic Food</p>
                    <h2 className="fs-1 mb-5">Healthy - Fresh - Delicious.</h2>
                </div>
                    <Btn
                        title="VIEW MORE"
                    />
            </BannerViewMore>

            <section className="container mb-5">
                <SectionTitle
                    title="The Blog"
                />
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                    <div className="col mb-3">
                        <CardBlog
                            image={OrganicProducts}
                            title="Beauty With Organic Products"
                            date="Feberuary 05, 2017"
                            description="Etiam at varius diam, id blandit erat. Suspendisse eget volutpat risus, id venenatis justo. Fusce elementum ligula elit. Duis ultricies ultrices nibh, a tincidunt risus pretium eleifend."
                        />
                    </div>
                    <div className="col mb-3">
                        <CardBlog
                            image={GreenVegetables}
                            title="Green Vegetables Are Good For Healthy"
                            date="January 30, 2017"
                            description="Vivamus consectetur nulla mattis lorem ultricies, ac congue tellus consectetur. Vivamus sed purus volutpat, varius mauris id, tempus augue. Nuefd ans congue liquam."
                            order="2"
                        />
                    </div>
                    <div className="col mb-3">
                        <CardBlog
                            image={RefreshingGreen}
                            title="Refreshing Green Smoothie Recipe"
                            date="January 20, 2017"
                            description="Praesent efficitur felis eu luctus vestibulum. In hac habitasse platea dictumst. Nam egestas eu nisl ac pellentesque. Duis congue suscipit lorem vel congue."
                        />
                    </div>
                </div>
            </section>

            <section>
                <BannerFollow className="text-uppercase d-flex align-items-center justify-content-center text-white">
                    <Btn
                        title={(
                        <div>
                            <span className="me-2">
                            <AiOutlineInstagram size={22}/>
                            </span>
                            follow us
                        </div>
                        )}
                    />
                </BannerFollow>
            </section>
        </main>
        <Footer />
    </>
)};

export default Home;