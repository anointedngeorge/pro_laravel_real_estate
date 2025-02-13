import FrontendLayout from "@/Layouts/FrontendLayout";

export default function Index({ website }) {
    return (
        <FrontendLayout website={website}>
            Wello Page dsd {website}
        </FrontendLayout>
    );
}