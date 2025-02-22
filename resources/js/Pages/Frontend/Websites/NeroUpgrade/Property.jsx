import { Link, usePage } from "@inertiajs/react";
import FrontendLayout from "./FrontendLayout";




const Properties = ({ properties, currentPageID }) => {

    const propData = [...properties.data.filter(prop => prop.id !== currentPageID)];

    return (
        <div className="sidebar__widget-content">
            <div className="rc-post">
                {propData.map((property, index) => (
                    <div className="d-flex mb-20" key={`${index}_property`}>
                        <div className="rc-thumb mr-15">
                            <Link href={route('frontend.property', property.id)}>
                                <div className="sidebar-posts-bg-thumb" data-background={`/storage/${property.image_path}`} style={{ backgroundImage: 'url(`/storage/${property.image_path}`)' }} />
                            </Link>
                        </div>
                        <div className="rc-text">
                            <h6><a href={route('frontend.property', property.id)}>{property.name}</a></h6>
                            {/*<div className="rc-meta">January 15, 2021 </div>*/}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}



export default function Property({ property, properties }) {
    const { settings } = usePage().props

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
        <FrontendLayout settings={settings} title={property.name} assetmodules={nero}>
            <main >
                <div className="blog-area pt-120 pb-80 mt-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 blog-post-items blog-padding">
                                <div className="blog__wrapper mr-50">
                                    <article id="post-79" className="blog__item-2 mb-70 format-image mb-50 post-79 post">
                                        <div className="blog__thumb-2 m-img">
                                            <img src={`/storage/${property.image_path}`} alt="img" />
                                        </div>
                                        <div className="blog__content-2">
                                            <div className="post-meta mb-20">
                                                <span><i className="far fa-calendar-check" /> January 15, 2021 </span>
                                                <span><a href="blog-details.html"><i className="far fa-user" />Mega</a></span>
                                                <span><a href="blog-details.html"><i className="far fa-comments" /> No Comments</a></span>
                                            </div>
                                            <div className="post-text mb-30" dangerouslySetInnerHTML={{ __html: property.description }}></div>

                                        </div>
                                    </article>

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog__sidebar">

                                    <div id="bdevs-latest-posts-2" className="sidebar__widget mb-50 widget_bdevs-latest-posts">
                                        <h4 className="sidebar__widget-title mb-50">
                                            Properties
                                        </h4>
                                        <Properties properties={properties} currentPageID={property.id} />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
        </FrontendLayout>
    )
}