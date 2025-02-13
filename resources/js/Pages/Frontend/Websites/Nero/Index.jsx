import { usePage } from "@inertiajs/react";
import FrontendLayout from "./FrontendLayout";


export default function Index({ website }) {
    const { settings } = usePage().props;
    const nero = {
        css: [
            "../nero/css/bootstrap.min.css",
            "../nero/css/animate.min.css",
            "../nero/css/custom-animation.css",
            "../nero/css/magnific-popup.css",
            "../nero/css/fontawesome.min.css",
            "../nero/css/meanmenu.css",
            "../nero/css/flaticon.css",
            "../nero/css/nice-select.css",
            "../nero/css/venobox.min.css",
            "../nero/css/backToTop.css",
            "../nero/css/slick.css",
            "../nero/css/owl.carousel.min.css",
            "../nero/css/swiper-bundle.css",
            "../nero/css/default.css",
            "../nero/css/main.css",
        ],
        js: [
            "../nero/js/vendor/jquery.min.js",
            "../nero/js/bootstrap.bundle.min.js",
            "../nero/js/isotope.pkgd.min.js",
            "../nero/js/slick.min.js",
            "../nero/js/swiper-bundle.js",
            "../nero/js/waypoints.min.js",
            "../nero/js/jquery.nice-select.min.js",
            "../nero/js/venobox.min.js",
            "../nero/js/backToTop.js",
            "../nero/js/jquery.meanmenu.min.js",
            "../nero/js/imagesloaded.pkgd.min.js",
            "../nero/js/owl.carousel.min.js",
            "../nero/js/jquery.magnific-popup.min.js",
            "../nero/js/ajax-form.js",
            "../nero/js/jquery.counterup.min.js",
            "../nero/js/wow.min.js",
            "../nero/js/main.js",
        ],
    }
    return (
        <FrontendLayout settings={settings} title="HomePage" assetmodules={nero}>
            <main>

                <section className="slider-area fix">
                    <div className="slider-active slider-s-animation swiper-container">
                        <div className="swiper-wrapper">
                            <div className="single-slider slider-height d-flex align-items-center swiper-slide" data-swiper-autoplay={5000}>
                                <div className="slide-bg" data-background="../nero/img/hero/hero.jpg" />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="aslider z-index text-center">
                                                <span className="slider-top-text" data-animation="fadeInUp" data-delay=".5s">Since 1990</span>
                                                <div className="aslider--title-wrapper" data-animation="fadeInUp" data-delay=".7s">
                                                    <h2 className="aslider--title aslider--title-bg mb-30">Discover Service</h2>
                                                </div>
                                                <p className="aslider--subtitle" data-animation="fadeInUp" data-delay=".9s">Whatever industry you are in good marketing can make you stand <br /> and innovative startups tall among industry giants</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-slider slider-height d-flex align-items-center swiper-slide" data-swiper-autoplay={5000}>
                                <div className="slide-bg" data-background="../nero/img/hero/hero.jpg" />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="aslider z-index text-center">
                                                <span className="slider-top-text" data-animation="fadeInUp" data-delay=".5s">Since 1990</span>
                                                <div className="aslider--title-wrapper" data-animation="fadeInUp" data-delay=".7s">
                                                    <h2 className="aslider--title aslider--title-bg mb-30">Discover Service</h2>
                                                </div>
                                                <p className="aslider--subtitle" data-animation="fadeInUp" data-delay=".9s">Whatever industry you are in good marketing can make you stand <br /> and innovative startups tall among industry giants</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* If we need navigation buttons */}
                        <div className="swiper-button-prev slide-prev"><i className="far fa-long-arrow-left" /></div>
                        <div className="swiper-button-next slide-next"><i className="far fa-long-arrow-right" /></div>
                    </div>
                </section>
                {/* hero area end here */}

                {/*popular-services area start */}
                <section className="popular-services pt-110 pb-90 gry-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-10">
                                <div className="section_title_wrapper text-center mb-50 wow fadeInUp" data-wow-delay="0.3s">
                                    <span className="subtitle price-sb-title">
                                        Popular service
                                    </span>
                                    <h2 className="section-title section-title-black">
                                        Our  Popular service
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="popular__services mb-30 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="popular__services-thumb p-relative">
                                        <img src="../nero/img/popular-service/pp-service-1.jpg" alt="img not found" />
                                        <div className="popular__services-thumb-title">
                                            <h5><a href="service-details.html">Mechanical Works</a></h5>
                                        </div>
                                        <div className="popular__services-thumb-text text-center">
                                            <div className="popular__services-thumb-text-icon mb-30">
                                                <a href="service-details.html"><i className="flaticon-robot-arm" /></a>
                                            </div>
                                            <div className="popular__services-thumb-text-content transition-3">
                                                <h3 className="services__title"><a href="service-details.html">Mechanical Works</a></h3>
                                                <p>luctus aenean nascetur neque and pedeco lobortis pulvinar</p>
                                                <div className="popular__services-thumb-text-button">
                                                    <a href="service-details.html">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="popular__services mb-30 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="popular__services-thumb p-relative">
                                        <img src="../nero/img/popular-service/pp-service.jpg" alt="img not found" />
                                        <div className="popular__services-thumb-title">
                                            <h5><a href="service-details.html">Civil Engineering</a></h5>
                                        </div>
                                        <div className="popular__services-thumb-text text-center">
                                            <div className="popular__services-thumb-text-icon mb-30">
                                                <a href="service-details.html"><i className="flaticon-engineer" /></a>
                                            </div>
                                            <div className="popular__services-thumb-text-content transition-3">
                                                <h3 className="services__title"><a href="service-details.html">Civil Engineering</a></h3>
                                                <p>neque and pedeco lobortis pulvinar  luctus aenean nascetur </p>
                                                <div className="popular__services-thumb-text-button">
                                                    <a href="service-details.html">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="popular__services mb-30 wow fadeInUp" data-wow-delay="0.9s">
                                    <div className="popular__services-thumb p-relative">
                                        <img src="../nero/img/popular-service/pp-service-2.jpg" alt="img not found" />
                                        <div className="popular__services-thumb-title">
                                            <h5><a href="service-details.html">CHEMICAL INDUSTRY</a></h5>
                                        </div>
                                        <div className="popular__services-thumb-text text-center">
                                            <div className="popular__services-thumb-text-icon mb-30">
                                                <a href="service-details.html"><i className="flaticon-oil" /></a>
                                            </div>
                                            <div className="popular__services-thumb-text-content transition-3">
                                                <h3 className="services__title"><a href="service-details.html">CHEMICAL INDUSTRY</a></h3>
                                                <p>lobortis neque and pedeco  pulvinar  luctus aenean nascetur</p>
                                                <div className="popular__services-thumb-text-button">
                                                    <a href="service-details.html">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*popular-services area end */}

                {/* brand area end here */}

            </main>

        </FrontendLayout>
    );
}