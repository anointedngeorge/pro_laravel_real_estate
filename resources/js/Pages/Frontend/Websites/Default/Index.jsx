import FrontendLayout from "@/Layouts/FrontendLayout";

export default function Index({ website }) {
    
    return (
        <FrontendLayout website={website}>
            Default Page dsd {website}
        </FrontendLayout>
    );
}