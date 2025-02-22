


export default function Realtors() {
    return (
        <div className="recent-project-area theme-bg p-relative pt-120 pb-55 fix">

            <div className="custom-container">
                <div className="row justify-content-center">
                    <div className="col-xxl-10">
                        <div className="section_title_wrapper text-center mb-50 wow fadeInUp" data-wow-delay="0.3s">
                            <span className="subtitle price-sb-title">
                                Verified Realtors
                            </span>
                            <h2 className="section-title section-title-black">
                                Our Realtors
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-xxl-8">
                        <div className="padding-swiper p-relative">
                            <div className="swiper-container project-active-1 wow fadeInUp" data-wow-delay="1s">
                                <div className="swiper-wrapper">
                                    <div className="mproject__1 swiper-slide" data-swiper-autoplay={8000}>
                                        <div className="mproject__1--img">
                                            <img src="../neroupgrade/img/recent-project/reect-project2.jpg" className="img-fluid" alt="img" />
                                        </div>
                                        <div className="mproject__1--overlay">
                                            <div className="mproject__1--overlay__social">
                                                <a href="project.html"><i className="far fa-long-arrow-right" /></a>
                                            </div>
                                            <div className="mproject__1--overlay__text">
                                                <span className="theme-color"> Technology</span>
                                                <h4 className="mproject__1--title"><a href="project.html">Awesome Project</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mproject__1 swiper-slide" data-swiper-autoplay={8000}>
                                        <div className="mproject__1--img">
                                            <img src="../neroupgrade/img/recent-project/reect-project3.jpg" className="img-fluid" alt="img" />
                                        </div>
                                        <div className="mproject__1--overlay">
                                            <div className="mproject__1--overlay__social">
                                                <a href="project.html"><i className="far fa-long-arrow-right" /></a>
                                            </div>
                                            <div className="mproject__1--overlay__text">
                                                <span className="theme-color">Senior Technician</span>
                                                <h4 className="mproject__1--title"><a href="project.html">Mechanical Project</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mproject__1 swiper-slide" data-swiper-autoplay={8000}>
                                        <div className="mproject__1--img">
                                            <img src="../neroupgrade/img/recent-project/reect-project2.jpg" className="img-fluid" alt="img" />
                                        </div>
                                        <div className="mproject__1--overlay">
                                            <div className="mproject__1--overlay__social">
                                                <a href="project.html"><i className="far fa-long-arrow-right" /></a>
                                            </div>
                                            <div className="mproject__1--overlay__text">
                                                <span className="theme-color"> Technology</span>
                                                <h4 className="mproject__1--title"><a href="project.html">Best Project</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mproject__1 swiper-slide" data-swiper-autoplay={8000}>
                                        <div className="mproject__1--img">
                                            <img src="../neroupgrade/img/recent-project/reect-project3.jpg" className="img-fluid" alt="img" />
                                        </div>
                                        <div className="mproject__1--overlay">
                                            <div className="mproject__1--overlay__social">
                                                <a href="project.html"><i className="far fa-long-arrow-right" /></a>
                                            </div>
                                            <div className="mproject__1--overlay__text">
                                                <span className="theme-color">Senior Man</span>
                                                <h4 className="mproject__1--title"><a href="project.html">Qualityful Project</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* If we need navigation buttons */}
                            <div className="mt-testimonial-slider-arrow">
                                <div className=" project-button-next"><i className="fal fa-long-arrow-left" /></div>
                                <div className=" project-button-prev"><i className="fal fa-long-arrow-right" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}