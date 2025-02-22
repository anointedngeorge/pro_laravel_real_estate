import Pagination from "@/Components/Pagination";
import { Link } from "@inertiajs/react";

const Listing = ({ content }) => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="w-full h-52">
                <img src={`/storage/${content.image_path}`} className="object-cover" alt="" />
            </div>

            <div className="w-full">
                <Link href={route('frontend.property', content.id)}><h4 className="text-center text-lg hover:underline">{content.name}</h4></Link>

                <p className="text-center bg-primary"><strong className="text-light">{content.property_status}</strong></p>
            </div>
        </div>
    )
}


export function PropertyListing({ contents }) {
    return (
        <section className="popular-services pt-110 pb-90 gry-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-10">
                        <div className="section_title_wrapper text-center mb-50 wow fadeInUp" data-wow-delay="0.3s">
                            <span className="subtitle price-sb-title">

                            </span>
                            <h2 className="section-title section-title-black">
                                Property Listing
                            </h2>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div ></div>
                        <div >
                            <label >Filter</label>
                            <select className="w-full">
                                <option ></option>
                                <option value="soldout">SoldOut</option>
                                <option value="available">Available</option>
                            </select>

                        </div>
                    </div>

                </div>
                <div className="row">
                    {contents.data.map((content, index) => (
                        <Listing key={`content_${index}`} content={content} />
                    ))}
                </div>
                <Pagination links={contents.meta.links} />
            </div>
        </section>
    );
}