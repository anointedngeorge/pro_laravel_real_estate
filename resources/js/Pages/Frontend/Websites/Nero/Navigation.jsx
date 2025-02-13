

export const NeroAside = () => {
    return (
        <div className="sidebar__area">
            <div className="sidebar__wrapper">
                <div className="sidebar__top d-flex align-items-center mb-40">
                    <div className="sidebar__close mr-35">
                        <button className="sidebar__close-btn sidebar-close">
                            <svg viewBox="0 0 22 22">
                                <path d="M12.41,11l5.29-5.29c0.39-0.39,0.39-1.02,0-1.41s-1.02-0.39-1.41,0L11,9.59L5.71,4.29c-0.39-0.39-1.02-0.39-1.41,0
              s-0.39,1.02,0,1.41L9.59,11l-5.29,5.29c-0.39,0.39-0.39,1.02,0,1.41C4.49,17.9,4.74,18,5,18s0.51-0.1,0.71-0.29L11,12.41l5.29,5.29
              C16.49,17.9,16.74,18,17,18s0.51-0.1,0.71-0.29c0.39-0.39,0.39-1.02,0-1.41L12.41,11z" />
                            </svg>
                        </button>
                    </div>
                    <div className="logo">
                        <a href="index.html">
                            <img src="../nero/img/logo/logo-black.png" alt="logo" />
                        </a>
                    </div>
                </div>
                <div className="sidebar__content p-relative z-index-1">
                    <div className="sidebar__menu">
                        <div className="mobile-menu" />
                    </div>
                    <div className="contact-infos mb-30">
                        <div className="contact-list">
                            <h4>Contact Info</h4>
                            <ul>
                                <li><i className="flaticon-location" />28/4 Palmal, London</li>
                                <li><i className="flaticon-letter" /><a href="mailto:info@klenar.com">info@mega.com</a></li>
                                <li><i className="flaticon-phone-call" /><a href="tel:02(205)5552255">02 (205) 555 2255</a></li>
                            </ul>
                            <div className="sidebar__menu--social">
                                <a href="#"><i className="fab fa-facebook-f" /></a>
                                <a href="#"><i className="fab fa-twitter" /></a>
                                <a href="#"><i className="fab fa-instagram" /></a>
                                <a href="#"><i className="fab fa-google" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}