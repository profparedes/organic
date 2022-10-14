import { BannerStatistics } from "./style";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import AboutUsCard from "../../components/AboutUsCard";
import StatisticsNumber from "../../components/StatisticsNumber";
import SectionTitle from "../../components/SectionTitle";
import CircularCard from "../../components/CircularCard";

//--------------import images--------------------
import BgAbout from "../../assets/banners/BgAbout.jpg";
import WhoWeAre from "../../assets/WhoWeAre.jpg";
import WhatWeDo from "../../assets/WhatWeDo.jpg";
import Billy from "../../assets/Billy.jpg";
import Danielle from "../../assets/Danielle.jpg";
import Peter from "../../assets/Peter.jpg";





const About = () => (
    <>
        <Header/>
        <main className="flex-grow-1 mt-4">
            <PageTitle
                title="About Us"
                bgImage={BgAbout}
            />
            <section className="container mt-5">
                <AboutUsCard
                    image={WhoWeAre}
                    title="Who We Are"
                    description="We are a manufacturing base of organic food produced on our farm. We are a family health care production team, created by today's need for clean and safe food, driven by the desire to build meaningful and meaningful experiences. Vivamus et enim accumsan, tempus dui non, pretium libero. Vivamus vitae justo non metus malesuada finibus. Pellentesque vehicula porttitor eleifend. Proin eget velit in arcu consectetur tempor. Sed pulvinar, purus sed efficitur elementum, risus risus tincidunt massa, a iaculis risus turpis id sapien. Pellentesque a metus urna. Integer placerat et ante quis pharetra. Nulla facilisi. Donec egestas tortor non ante pulvinar, sit amet sollicitudin nisl auctor. Vestibulum aliquet finibus consectetur. Nullam faucibus vehicula est nec pulvinar."
                />
                <AboutUsCard
                    image={WhatWeDo}
                    title="What We Do"
                    description="We provide all kinds of organic products. Produced on our farm, the products are always fresh, multi-vitamins, rich variety for your family. With our organic food will bring delicious meals to your family.

                    Vestibulum eu nisl vitae tortor feugiat aliquet finibus in libero. Vivamus et enim accumsan, tempus dui non, pretium libero. Vivamus vitae justo non metus malesuada finibus. Pellentesque vehicula porttitor eleifend. Proin eget velit in arcu consectetur tempor. Sed pulvinar, purus sed efficitur elementum, risus risus tincidunt massa, a iaculis risus turpis id sapien diam pellentesque ullamcorper. "
                    reverse="flex-row-reverse"
                    textEnd="text-end"
                    alignEnd="align-items-end"
                />

            </section>

            <BannerStatistics className="mt-5 d-flex align-items-center">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                        <div className="col">
                            <StatisticsNumber
                                number="154"
                                title="Happy client"
                            />
                        </div>
                        <div className="col">
                            <StatisticsNumber
                                number="234"
                                title="Products in store"
                            />
                        </div>
                        <div className="col">
                            <StatisticsNumber
                                number="32"
                                title="year of experience"
                            />
                        </div>
                        <div className="col">
                            <StatisticsNumber
                                number="126"
                                title="Running projects"
                            />
                        </div>
                    </div>
                </div>

            </BannerStatistics>

            <section className="container mb-5">
                <SectionTitle
                    title="Our Team"
                />

                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col">
                        <CircularCard
                            image={Billy}
                            title="Billy Ray"
                            subtitle="Leader"
                            fontSize="h2"
                        />
                    </div>
                    <div className="col">
                        <CircularCard
                            image={Danielle}
                            title="Danielle Reed"
                            subtitle="Farmer"
                            fontSize="h2"
                        />
                    </div>
                    <div className="col">
                        <CircularCard
                            image={Peter}
                            title="Peter Castro"
                            subtitle="Farmer"
                            fontSize="h2"
                        />
                    </div>
                </div>

            </section>

        </main>
        <Footer/>
    
    </>
);

export default About;