import { usePage } from "@inertiajs/react";

export default function ApplicationLogo({props, width='100px', height='100px'}) {

    const { settings } = usePage().props;
    return (
        <div>
        <pre>{JSON.stringify(props)}</pre>
            <img src={`/storage/${settings.logo}`} alt="" style={{
                width: width, height: height
            }} />
        </div>
    );
}
