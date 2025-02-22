import '../../../../../css/app.css';
// import './bootstrap';

import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { NeroAside } from "./Navigation";
import { NeroLogo } from "./Logo";
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init();



const LoadingSpinner = () => (
    <div className="loading-spinner">
        {/* Your spinner implementation */}
        Loading...
    </div>
);

export default function FrontendLayout({ children, assetmodules = {}, title = 'Nero | ', settings = {} }) {
    // Define multiple CSS and JS files for each website module

    const { css = [], js = [] } = assetmodules;
    const [loadState, SetLoadingState] = useState(0);
    useEffect(() => {
        const loadedAssets = [];

        // Load CSS files dynamically
        css.forEach((file) => {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = file;
            document.head.appendChild(link);
            loadedAssets.push(link);
        });
        1
        // Load JS files dynamically
        js.forEach((file) => {
            const script = document.createElement("script");
            script.src = file;
            script.defer = true;
            document.body.appendChild(script);
            loadedAssets.push(script);
        });

        // Cleanup function to remove added files when switching modules
        return () => {
            loadedAssets.forEach((element) => {
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            });
        };

    }, [assetmodules, loadState]);


    return (
        <main>

            <Head title={title} />


            {/* <div id="preloader">
                <div className="preloader">
                    <span></span>
                    <span></span>
                </div>
            </div> */}


            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

            <header className="header-area header-transparent">
                <div className="header-top">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="header-top-left">
                                    <span>Follow us:</span>
                                    <a href="#" target="_blank"><i className="fab fa-facebook" /></a>
                                    <a href="#" target="_blank"><i className="fab fa-instagram" /></a>
                                    <a href="#" target="_blank"><i className="fab fa-twitter" /></a>
                                    <a href="#" target="_blank"><i className="fab fa-google-plus-g" /></a>
                                    <a href="#" target="_blank"><i className="fad fa-wifi" /></a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 d-none d-lg-block">
                                <div className="topbar-text text-center">
                                    <p>{settings['title']}</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="topbar-right">
                                    <span>Free Call:</span>
                                    <a href={settings['phone']} >{settings['phone']}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-menu header-sticky">
                    <div className="custom-container">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-8">
                                <div className="header-logo ">
                                    <a href="index.html">
                                        <NeroLogo settings={settings} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-4">
                                {/* main menu */}
                                <div className="main-menu main-menu-3 d-none d-lg-block" id="white-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="has-dropdown">
                                                <a href="index.html">Home <i className="far fa-plus" /> </a>
                                                <ul className="submenu">
                                                    <li><a href="index.html">Home 01</a></li>
                                                    <li><a href="index-2.html">Home 02</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="#">Pages <i className="far fa-plus" /></a>
                                                <ul className="submenu">
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="team-details.html">Team Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="services.html">Services <i className="far fa-plus" /></a>
                                                <ul className="submenu">
                                                    <li><a href="services.html">Services</a></li>
                                                    <li><a href="service-details.html">Service Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="project.html">Projects <i className="far fa-plus" /></a>
                                                <ul className="submenu">
                                                    <li><a href="project.html">Projects</a></li>
                                                    <li><a href="project-details.html">Project Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="blog.html">Blog <i className="far fa-plus" /></a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="contact.html">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="header__action-item d-lg-none d-flex align-items-center justify-content-end">
                                    <a href="#" className="sidebar-toggle">
                                        <span />
                                        <span />
                                        <span />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
                                <div className="main-menu-wrapper d-flex align-items-center justify-content-end mb-10">
                                    <div className="main-menu-wrapper__search text-left">
                                        <a className="search-btn nav-search search-trigger" href="#"><i className="flaticon-search" /> Search Here</a>
                                    </div>
                                    <div className="menu__cart d-none d-xxl-block">
                                        <a href="contact.html"><i className="flaticon-shopping-cart" />Cart List</a>
                                    </div>
                                    <div className="menu-btn">
                                        <a href="contact.html" className="theme-btn">Get Quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/*side bar*/}
            <NeroAside settings={settings} />
            {children}
            <footer>
                <div className="footer__area footer-bg pt-100 pb-50">
                    <div className="footer__top footer__top-3 pb-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-6">
                                    <div className="footer__subscribe-title wow fadeInUp" data-wow-delay="0.3s">
                                        <h3>Subscribe Now</h3>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="footer__subscribe wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="footer__subscribe-form footer__subscribe-form-2 footer__subscribe-form-3 p-relative">
                                            <input type="text" placeholder="Email Address |" />
                                            <button className="theme-btn">subscribe now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-70">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="footer__widget footer-1 pr-100 mb-30 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="footer__widget-logo mb-35">
                                        <a href="index.html">
                                            <NeroLogo settings={settings} />
                                        </a>
                                    </div>
                                    <p>Consequat lacinia into gravida nisie facils porto lorem ultricies vivamus maecenas one iaculis</p>
                                    <ul className="footer__social">
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                        <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="footer__widget footer-2 pl-60 mb-30 wow fadeInUp" data-wow-delay="0.6s">
                                    <h3 className="footer__widget-title mb-35">
                                        Contact Info
                                    </h3>
                                    <div className="footer__info">
                                        <ul>
                                            <li className="d-flex align-items-start">
                                                <div className="footer__info-icon mr-15">
                                                    <i className="fal fa-map-marker-alt" />
                                                </div>
                                                <div className="footer__info-text">
                                                    <a target="_blank" href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"><span>25/A, Broke Square <br />
                                                        California</span></a>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-start">
                                                <div className="footer__info-icon mr-15">
                                                    <i className="far fa-envelope-open" />
                                                </div>
                                                <div className="footer__info-text">
                                                    <h5>Email:</h5>
                                                    <a href="mailto:info@megazo.com">info@megazo.com</a>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-start">
                                                <div className="footer__info-icon mr-20">
                                                    <i className="fal fa-phone" />
                                                </div>
                                                <div className="footer__info-text">
                                                    <h5>Phone: </h5>
                                                    <a href="tel:02(205)5552255">02 (205) 555 2255</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="footer__widget footer-3 pl-50 mb-30 wow fadeInUp" data-wow-delay="0.9s">
                                    <h3 className="footer__widget-title mb-35">
                                        Recent Post
                                    </h3>
                                    <div className="footer__blog-sm mb-25">
                                        <div className="footer__blog-sm-thumb float-start mr-20">
                                            <a href="blog-details.html">
                                                <img src="../nero/img/blog/footer-blog/f-blog-1.jpg" alt="footer-bimg" />
                                            </a>
                                        </div>
                                        <div className="footer__blog-sm-content">
                                            <div className="footer__blog-sm-meta">
                                                <span> 25 nov 2021</span>
                                            </div>
                                            <h3 className="footer__blog-sm-title">
                                                <a href="blog-details.html"> Nisle metus  nam curabitur magnis nam nost</a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="footer__blog-sm mb-25">
                                        <div className="footer__blog-sm-thumb float-start mr-20">
                                            <a href="blog-details.html">
                                                <img src="../nero/img/blog/footer-blog/f-blog-2.jpg" alt="footer-bimg" />
                                            </a>
                                        </div>
                                        <div className="footer__blog-sm-content">
                                            <div className="footer__blog-sm-meta">
                                                <span>25 nov 2021</span>
                                            </div>
                                            <h3 className="footer__blog-sm-title">
                                                <a href="blog-details.html"> Magnis  nisle nam curabitur Metus nam nost</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-coptright footer-copyright-bg pt-40 pb-40">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="footer__text">
                                    <p>Copyright ©2022 <a href="#">BDevs</a>. All Rights Reserved</p>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="footer__cmenu text-end">
                                    <a href="#">Terms &amp; Conditions .</a>
                                    <a href="services.html">Services .</a>
                                    <a href="#">Privacy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </main>
    );
}
