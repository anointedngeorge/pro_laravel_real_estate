import { Head } from "@inertiajs/react";



export default function referralLink({ sponsor_code, realtor }) {



    return (
        <main>
            <Head title={`Referral Page for ${sponsor_code}`} />
            <pre>{sponsor_code} {realtor.fullname}</pre>
        </main>
    );
}