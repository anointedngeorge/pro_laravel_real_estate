import '../../../css/app.css';
import '../../bootstrap';

import { CreateRealtorReferralForm } from "@/Components/forms/CreateRealtorReferralForm";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm, usePage } from "@inertiajs/react";



const FormHead = ({ settings }) => {
    return (
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4 bg-red-600 p-2">
            {/* Logo */}

            <div className="shrink-0">
                <img src={settings['logo'] ? `/storage/${settings['logo']}` : "/images/logo.png"} alt="logo_image" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            </div>

            {/* Centered Text Content */}
            <div className="text-center md:text-left flex-1">
                <h3 className="text-xl md:text-3xl font-bold text-white text-center">{settings['title']}</h3>
                <p className="text-sm md:text-base text-center text-slate-100">{settings['address']}</p>
                <p className="text-sm md:text-base text-center text-slate-100">{settings['phone']}</p>

            </div>

            {/* Avatar */}
            <div className="shrink-0">
                <img
                    id="imagePreview"
                    src="/images/avatar.png"
                    alt="logo_image"
                    className="w-20 h-28 md:w-24 md:h-32 object-cover"
                />
            </div>
        </div>
    );
};





const FormFooter = () => {
    return (
        <div className="mt-4">Form footer</div>
    );
}




export default function referralLink({ sponsor_code, realtor, message }) {
    const { settings } = usePage().props;
    const { data, setData, post, errors, processing } = useForm({
        first_name: '',
        last_name: '',
        image: '',
        account_name: '',
        account_number: '',
        account_type: '',
        bank_name: '',
        address: '',
        country: '',

    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        post(route('frontend.realtorreferrals'));
    };


    return (
        <main className="mt-8">
            {message && (
                <div className="p-3 bg-green-500 text-white">{message}</div>
            )}
            <Head title={`${realtor.fullname} Referral Page `} />
            <div className="w-3/4 m-auto p-3 bg-red-50">
                <form onSubmit={onFormSubmit} >
                    <FormHead
                        settings={settings}

                    />
                    <CreateRealtorReferralForm
                        setData={setData}
                        data={data} errors={errors}
                        realtor={realtor}
                    />
                    <FormFooter />
                    <div className='mt-4'>
                        <PrimaryButton type="submit" className='bg-red-600' disabled={processing}>
                            {processing ? 'Processing...' : 'Submit'}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </main>
    );
}