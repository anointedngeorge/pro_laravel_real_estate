import { usePage } from "@inertiajs/react";
import FrontendLayout from "./FrontendLayout";


export default function About({ auth, data }) {

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
        <FrontendLayout settings={settings} title={data.title} assetmodules={nero}>
            <main>


                <section className="experience-area pt-110 pb-120 mt-40">
                    <div className='mt-8 mb-8 p-3 bg-slake-300 shadow shadow-lg' dangerouslySetInnerHTML={{ __html: data.content }}></div>
                </section>

            </main>
        </FrontendLayout>
    )
}