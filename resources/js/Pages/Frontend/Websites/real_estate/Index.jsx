

// export const metadata: Metadata = {
//   title: 'Arible Real Estate | Luxury Homes and Properties',
//   description: 'Discover luxury homes and premium properties with Arible Real Estate. Your trusted partner in finding your dream home.',
//   keywords: ['real estate', 'luxury homes', 'property listings', 'Arible'],
//   openGraph: {
//     title: 'Arible Real Estate | Luxury Homes and Properties',
//     description: 'Discover luxury homes and premium properties with Arible Real Estate. Your trusted partner in finding your dream home.',
//     images: [
//       {
//         url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-SRaZ0WlgzEC8hNsl7BqQapW3ayLtmo.jpeg',
//         width: 1200,
//         height: 630,
//         alt: 'Arible Real Estate',
//       },
//     ],
//   },
// }


import Footer from "./RealEstateComponents/Footer";
import Header from "./RealEstateComponents/Header";
import HeroSlider from "./RealEstateComponents/HeroSlider";
// import OurServices from "./RealEstateComponents/OurServices";
// import RealtorsSlider from "./RealEstateComponents/RealtorsSlider";
// import UpcomingEvents from "./RealEstateComponents/UpcomingEvents";
// import AvailableProperties from "./RealEstateComponents/AvailableProperties";
// import BlogPreview from "./RealEstateComponents/BlogPreview";

export default function Home({ settings }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
                <HeroSlider />
                {/* <AvailableProperties />
                <RealtorsSlider />
                <UpcomingEvents />
                <BlogPreview />
                <OurServices /> */}
            </main>
            <Footer />
        </div>
    )
}

