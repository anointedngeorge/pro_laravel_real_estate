import { usePage } from "@inertiajs/react";
import FrontendLayout from "./FrontendLayout";
import SliderImages from "./NeroUpgradeComponents/SLider";
import Realtors from "./NeroUpgradeComponents/Realtors";
import ServiceExperience from "./NeroUpgradeComponents/ServieExprience";
import { Properties } from "./NeroUpgradeComponents/Properties";


export default function Index({ website }) {
    const { settings } = usePage().props;
    const nero = {
        css: [
            "../neroupgrade/css/bootstrap.min.css",
            "../neroupgrade/css/animate.min.css",
            "../neroupgrade/css/custom-animation.css",
            "../neroupgrade/css/magnific-popup.css",
            "../neroupgrade/css/fontawesome.min.css",
            "../neroupgrade/css/meanmenu.css",
            "../neroupgrade/css/flaticon.css",
            "../neroupgrade/css/nice-select.css",
            "../neroupgrade/css/venobox.min.css",
            "../neroupgrade/css/backToTop.css",
            "../neroupgrade/css/slick.css",
            "../neroupgrade/css/owl.carousel.min.css",
            "../neroupgrade/css/swiper-bundle.css",
            "../neroupgrade/css/default.css",
            "../neroupgrade/css/main.css",
        ],
        js: [
            "../neroupgrade/js/vendor/jquery.min.js",
            "../neroupgrade/js/bootstrap.bundle.min.js",
            "../neroupgrade/js/isotope.pkgd.min.js",
            "../neroupgrade/js/slick.min.js",
            "../neroupgrade/js/swiper-bundle.js",
            "../neroupgrade/js/waypoints.min.js",
            "../neroupgrade/js/jquery.nice-select.min.js",
            "../neroupgrade/js/venobox.min.js",
            "../neroupgrade/js/backToTop.js",
            "../neroupgrade/js/jquery.meanmenu.min.js",
            "../neroupgrade/js/imagesloaded.pkgd.min.js",
            "../neroupgrade/js/owl.carousel.min.js",
            "../neroupgrade/js/jquery.magnific-popup.min.js",
            "../neroupgrade/js/ajax-form.js",
            "../neroupgrade/js/jquery.counterup.min.js",
            "../neroupgrade/js/wow.min.js",
            "../neroupgrade/js/main.js",
        ],
    }
    return (
        <FrontendLayout settings={settings} title="HomePage" assetmodules={nero}>
            <main>
                {/* hero area start here */}
                <section className="slider-area fix">
                    <div className="slider-active slider-s-animation swiper-container">
                        <div className="swiper-wrapper">
                            <div className="single-slider slider-height d-flex align-items-center swiper-slide" data-swiper-autoplay={5000}>
                                <div className="slide-bg" data-background="../neroupgrade/img/hero/hero.jpg" />
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
                                <div className="slide-bg" data-background="../neroupgrade/img/hero/hero.jpg" />
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
                {/* experience area start */}
                <section className="experience-area pt-110 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section_title_wrapper mb-50 wow fadeInUp" data-wow-delay="0.3s">
                                    <h2 className="section-title expricence-title">
                                        Industrial serve black sheep <br /> among white ones
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="exprience__video wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="expricenc__box">
                                        <span className="counter">25</span>
                                        <h3>Years <br /> Experience</h3>
                                    </div>
                                    <img src="../neroupgrade/img/exprience/ex-video.jpg" alt="ex-video.jpg" />
                                    <div className="exprience__video-btn">
                                        <a className="play-btn popup-video" href="https://www.youtube.com/watch?v=pNje3bWz7V8"><i className="fas fa-play" /></a>
                                        <div className="play-video-text">
                                            <h5>Play Video</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* experience area end */}
                {/* services area start */}
                <section className="services-area pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services mb-30 text-center wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                                    <div className="services__icon">
                                        <i className="flaticon-robot-arm" />
                                    </div>
                                    <div className="services__content transition-3">
                                        <h3 className="services__title"><a href="service-details.html">Raw Materials</a></h3>
                                        <p>neque and pedeco lobortis pulvinar mollis luctus</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services mb-30 text-center wow fadeInUp" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                                    <div className="services__icon">
                                        <i className="flaticon-engineer" />
                                    </div>
                                    <div className="services__content transition-3">
                                        <h3 className="services__title"><a href="service-details.html">Civil Engineering</a></h3>
                                        <p>pulvinar mollis neque and pedeco lobortis luctus</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services mb-30 text-center wow fadeInUp" data-wow-delay="0.9s" style={{ visibility: 'visible', animationDelay: '0.9s', animationName: 'fadeInUp' }}>
                                    <div className="services__icon">
                                        <i className="flaticon-industry" />
                                    </div>
                                    <div className="services__content transition-3">
                                        <h3 className="services__title"><a href="service-details.html">Fabric Designs</a></h3>
                                        <p>nascetur interdum neque and pedeco lobortis</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="services mb-30 text-center wow fadeInUp" data-wow-delay="1.2s" style={{ visibility: 'visible', animationDelay: '1.2s', animationName: 'fadeInUp' }}>
                                    <div className="services__icon">
                                        <i className="flaticon-oil" />
                                    </div>
                                    <div className="services__content transition-3">
                                        <h3 className="services__title"><a href="service-details.html">Oil Industry</a></h3>
                                        <p>pedeco neque and  lobortis pulvinar mollis luctus </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* services area end */}
                {/* services Expricence area start */}
                {/* <ServiceExperience /> */}
                {/* services Expricence area end */}
                {/*histry-summery area start */}

                {/*histry-summery end start */}
                {/*popular-services area start */}
                <Properties />
                {/*popular-services area end */}
                {/*recent project area start here */}
                <Realtors />
                {/*recent project area end */}
                {/*service Achievement area start */}

                {/*service Achievement area end */}
                {/* Client Reviews area start */}
                <section className="client-reviews-area services-ex-bg pt-110 pb-120 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 p-relative mb-40">
                                <div className="section_title_wrapper mb-25 wow fadeInUp" data-wow-delay="0.3s">
                                    <span className="subtitle service-ex-subtitle">
                                        Client feedback
                                    </span>
                                    <h2 className="section-title services-ex-title">
                                        Happy customer says <br /> about mega
                                    </h2>
                                </div>
                                <div className="client-active swiper-container wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="swiper-wrapper">
                                        <div className="client swiper-slide">
                                            <div className="testimonial-text mb-50">
                                                <p>Gravida augue erat nullam id tellus mattis vehicula facilisic aliquet euismos litora ullamcorper morbina suspendisse vitae vestibulum eros vitae. pede nullam nullas ultricies corne mone molestie erate montes adipiscing leoest magnis imperdiet fermentum auctor hymenae laoren</p>
                                            </div>
                                            <div className="testimonial-author d-flex align-items-center">
                                                <div className="testimonial-author-icon mr-30">
                                                    <i className="fal fa-quote-left" />
                                                </div>
                                                <div className="testimonial-author-text">
                                                    <h5 className="uppercase">Marben Gillispe</h5>
                                                    <span>House Holder</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="client swiper-slide">
                                            <div className="testimonial-text mb-50">
                                                <p>Gravida augue erat nullam id tellus mattis vehicula facilisic aliquet euismos litora ullamcorper morbina suspendisse vitae vestibulum eros vitae. pede nullam nullas ultricies corne mone molestie erate montes adipiscing leoest magnis imperdiet fermentum auctor hymenae laoren</p>
                                            </div>
                                            <div className="testimonial-author d-flex align-items-center">
                                                <div className="testimonial-author-icon mr-30">
                                                    <i className="fal fa-quote-left" />
                                                </div>
                                                <div className="testimonial-author-text">
                                                    <h5 className="uppercase">Jessica Brown</h5>
                                                    <span>House Holder</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="client swiper-slide">
                                            <div className="testimonial-text mb-50">
                                                <p>Gravida augue erat nullam id tellus mattis vehicula facilisic aliquet euismos litora ullamcorper morbina suspendisse vitae vestibulum eros vitae. pede nullam nullas ultricies corne mone molestie erate montes adipiscing leoest magnis imperdiet fermentum auctor hymenae laoren</p>
                                            </div>
                                            <div className="testimonial-author d-flex align-items-center">
                                                <div className="testimonial-author-icon mr-30">
                                                    <i className="fal fa-quote-left" />
                                                </div>
                                                <div className="testimonial-author-text">
                                                    <h5 className="uppercase">Jessica Brown</h5>
                                                    <span>House Holder</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* If we need navigation buttons */}
                                <div className="tp-testimonial-slider-arrow wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="testimonial-button-next swiper-button-next"><i className="fal fa-long-arrow-left" /></div>
                                    <div className="testimonial-button-prev swiper-button-prev">  <i className="fal fa-long-arrow-right" /></div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="achievement-group ml-100">
                                    <div className="achievement-item mb-30 wow fadeInUp" data-wow-delay="0.3s">
                                        <ul className="achievement-item-box d-flex align-items-center">
                                            <li><i className="flaticon-support" />
                                            </li>
                                            <li><h2 className="counter-count"><span className="counter">120</span>+</h2>
                                                <p className="counter-title">expert employee</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="achievement-item mb-30 wow fadeInUp" data-wow-delay="0.6s">
                                        <ul className="achievement-item-box d-flex align-items-center">
                                            <li><i className="flaticon-medal" />
                                            </li>
                                            <li><h2 className="counter-count"><span className="counter">325</span>+</h2>
                                                <p className="counter-title">Completed Project</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="achievement-item wow fadeInUp" data-wow-delay="0.9s">
                                        <ul className="achievement-item-box d-flex align-items-center">
                                            <li><i className="flaticon-recovered" />
                                            </li>
                                            <li><h2 className="counter-count"><span className="counter">235</span>+</h2>
                                                <p className="counter-title">Happy customer</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Client Reviews area end */}
                {/*price Table area start */}
                <section className="price-table-area pt-110 pb-90">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-10">
                                <div className="section_title_wrapper text-center mb-50 wow fadeInUp" data-wow-delay="0.3s">
                                    <span className="subtitle price-sb-title">
                                        Pricing Plan
                                    </span>
                                    <h2 className="section-title section-title-black">
                                        Standard Package
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="mprice text-center wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="mprice__top">
                                        <span>Basic</span>
                                        <h2 className="price-title">$50.00</h2>
                                    </div>
                                    <div className="mprice__bottom mb-35">
                                        <ul className="mb-35">
                                            <li><i className="fal fa-check-circle" />Email Marketing</li>
                                            <li><i className="fal fa-check-circle" />Free Domain</li>
                                            <li><i className="fal fa-check-circle" />Multiple Client Support</li>
                                            <li><i className="fal fa-check-circle" />Free Email Build</li>
                                            <li><i className="fal fa-check-circle" />Tessting Work</li>
                                        </ul>
                                        <div className="price-button">
                                            <a href="contact.html" className="theme-btn price-btn">Buy Plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="mprice text-center wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="mprice__top">
                                        <span>standard</span>
                                        <h2 className="price-title">$60.00</h2>
                                    </div>
                                    <div className="mprice__bottom mb-35">
                                        <ul className="mb-35">
                                            <li><i className="fal fa-check-circle" />Email Marketing</li>
                                            <li><i className="fal fa-check-circle" />Free Domain</li>
                                            <li><i className="fal fa-check-circle" />Multiple Client Support</li>
                                            <li><i className="fal fa-check-circle" />Free Email Build</li>
                                            <li><i className="fal fa-check-circle" />Tessting Work</li>
                                        </ul>
                                        <div className="price-button">
                                            <a href="contact.html" className="theme-btn price-btn">Buy Plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="mprice text-center wow fadeInUp" data-wow-delay="0.9s">
                                    <div className="mprice__top">
                                        <span>premium</span>
                                        <h2 className="price-title">$70.00</h2>
                                    </div>
                                    <div className="mprice__bottom mb-35">
                                        <ul className="mb-35">
                                            <li><i className="fal fa-check-circle" />Email Marketing</li>
                                            <li><i className="fal fa-check-circle" />Free Domain</li>
                                            <li><i className="fal fa-check-circle" />Multiple Client Support</li>
                                            <li><i className="fal fa-check-circle" />Free Email Build</li>
                                            <li><i className="fal fa-check-circle" />Tessting Work</li>
                                        </ul>
                                        <div className="price-button">
                                            <a href="contact.html" className="theme-btn price-btn">Buy Plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*price Table area end */}
                <section className="blog-area pt-120 pb-90 gry-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="section_title_wrapper mgsection_title-bottom  wow fadeInUp" data-wow-delay="0.3s">
                                    <span className="subtitle">
                                        comapny journal
                                    </span>
                                    <h2 className="section-title section-title-black">
                                        Every recent update from blog
                                    </h2>
                                </div>
                                <div className="blog__single p-relative mb-30  wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="blog__single-date">
                                        <h3>25</h3>
                                        <span>Dec</span>
                                    </div>
                                    <div className="blog__single-thumb">
                                        <a href="blog-details.html"><img src="../neroupgrade/img/blog/blog-img/blog1.jpg" alt="blog1.jpg" /></a>
                                    </div>
                                    <div className="blog__single-content">
                                        <div className="blog__single-content-icon">
                                            <ul>
                                                <li><a href="blog-details.html"><i className="far fa-bookmark" />Petrolium</a></li>
                                                <li><a href="blog-details.html"> <i className="fal fa-comment" />0 Comment</a></li>
                                            </ul>
                                        </div>
                                        <h2 className="blog__single-content-title">
                                            <a href="blog-details.html">Curabitur feugiat dialo ornare Suspendis <br />
                                                senectus beginar  Purus sapien</a>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="row">
                                    <div className="blog__single p-relative mb-30 wow fadeInUp" data-wow-delay="0.9s">
                                        <div className="blog__single-date blog__date2">
                                            <h3>26</h3>
                                            <span>Nov</span>
                                        </div>
                                        <div className="blog__single-thumb">
                                            <a href="blog-details.html"><img src="../neroupgrade/img/blog/blog-img/blog2.jpg" alt="blog1.jpg" /></a>
                                        </div>
                                        <div className="blog__single-content ml-15">
                                            <div className="blog__single-content-icon">
                                                <ul>
                                                    <li><a href="blog-details.html"><i className="far fa-bookmark" />Petrolium</a></li>
                                                    <li><a href="blog-details.html"> <i className="fal fa-comment" />0 Comment</a></li>
                                                </ul>
                                            </div>
                                            <h2 className="blog__single-content-title">
                                                <a href="blog-details.html"> Suspendis  feugiat dialo ornare curabitur <br />
                                                    senectus beginar  Purus sapien</a>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="blog__single p-relative mb-30 wow fadeInUp" data-wow-delay="1.2s">
                                        <div className="blog__single-date blog__date2">
                                            <h3>27</h3>
                                            <span>Jan</span>
                                        </div>
                                        <div className="blog__single-thumb">
                                            <a href="blog-details.html"><img src="../neroupgrade/img/blog/blog-img/blog3.jpg" alt="blog1.jpg" /></a>
                                        </div>
                                        <div className="blog__single-content ml-15">
                                            <div className="blog__single-content-icon">
                                                <ul>
                                                    <li><a href="blog-details.html"><i className="far fa-bookmark" />Petrolium</a></li>
                                                    <li><a href="blog-details.html"> <i className="fal fa-comment" />0 Comment</a></li>
                                                </ul>
                                            </div>
                                            <h2 className="blog__single-content-title">
                                                <a href="blog-details.html">Feugiat senectus   dialo ornare Suspendis <br />
                                                    curabitur beginar  Purus sapien</a>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* brand area end here */}

                {/* brand area start here */}
            </main>


        </FrontendLayout>
    );
}