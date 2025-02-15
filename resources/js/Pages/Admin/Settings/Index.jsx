import { Editbranch } from '@/Components/forms/Editbranch';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import { formatString } from '@/Functions';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';



const TextForm = ({ setData, settings }) => {
    return (
        <div className='mb-4 grid grid-cols-1 gap-x-4 gap-y-4'>
            <div>
                <label className='text-red-500'>Title</label>
                <TextInput className='w-full p-2' type='text' defaultValue={settings['title']} onChange={e => setData('title', e.target.value)} />
            </div>
            <div>
                <label className='text-red-500'>Dashboard Title</label>
                <TextInput className='w-full p-2' type='text' defaultValue={settings['dashboard_title']} onChange={e => setData('dashboard_title', e.target.value)} />
            </div>
            <div>
                <label className='text-red-500'>Phone</label>
                <TextInput className='w-full p-2' type='text' defaultValue={settings['phone']} onChange={e => setData('phone', e.target.value)} />
            </div>
            <div>
                <label className='text-red-500'>Email Address</label>
                <TextInput className='w-full p-2' type='text' defaultValue={settings['email_address']} onChange={e => setData('email_address', e.target.value)} />
            </div>
            <div>
                <label className='text-red-500'>Address</label>
                <TextInput className='w-full p-2' type='text' defaultValue={settings['address']} onChange={e => setData('address', e.target.value)} />
            </div>

            <div>
                <label className='text-red-500'>Frist Generation Percentages</label>
                <TextInput className='w-full p-2' type='text' defaultValue={settings['first_generation_percentage']} onChange={e => setData('first_generation_percentage', e.target.value)} />
            </div>
            <div>
                <label className='text-red-500'>Second Generation Percentages</label>
                <TextInput className='w-full p-2' type='text' defaultValue={settings['second_generation_percentage']} onChange={e => setData('second_generation_percentage', e.target.value)} />
            </div>
            <div>
                <label className='text-red-500'>Third Generation Percentages</label>
                <TextInput className='w-full p-2' type='text' defaultValue={settings['third_generation_percentage']} onChange={e => setData('third_generation_percentage', e.target.value)} />
            </div>

            <div>
                <label className='text-red-500'>Login Form Title</label>
                <TextInput className='w-full p-2' type='text' defaultValue={settings['login_form_title']} onChange={e => setData('login_form_title', e.target.value)} />
            </div>


            <div>
                <label className='text-red-500'>Choose Website <span className='text-green-500 font-bold'>{settings['website']}</span></label>
                <SelectInput className="w-full" onChange={e => setData('website', e.target.value)}>
                    <option value="Default"></option>
                    <option value="Wello">Wello</option>
                    <option value="Nero">Nero</option>
                    <option value="real_estate">Real Estate</option>
                </SelectInput>
            </div>

            <div className='grid' >
                <label className='text-red-500'>Short Description</label>
                <TextAreaInput defaultValue={settings['short_description']} onChange={e => setData('short_description', e.target.value)}>
                </TextAreaInput>
            </div>

        </div>
    );
}


const SocialsForm = ({ setData, settings }) => {
    return (
        <div className='mb-4 grid grid-cols-4 gap-x-4 gap-y-4 max-sm:grid-cols-1'>
            <div>
                <label className='text-red-500'>Facebook</label>
                <TextInput className='w-full p-2' type='text' defaultValue={settings['facebook']} onChange={e => setData('facebook', e.target.value)} />
            </div>

            <div>
                <label className='text-red-500'>Instagram</label>
                <TextInput className='w-full p-2' type='text' defaultValue={settings['instagram']} onChange={e => setData('instagram', e.target.value)} />
            </div>

            <div>
                <label className='text-red-500'>Twitter</label>
                <TextInput className='w-full p-2' type='text' defaultValue={settings['twitter']} onChange={e => setData('twitter', e.target.value)} />
            </div>

            <div>
                <label className='text-red-500'>LinkedIn</label>
                <TextInput className='w-full p-2' type='text' defaultValue={settings['linkedin']} onChange={e => setData('linkedin', e.target.value)} />
            </div>

            <div>
                <label className='text-red-500'>Google</label>
                <TextInput className='w-full p-2' type='text' defaultValue={settings['google']} onChange={e => setData('google', e.target.value)} />
            </div>
        </div>
    );
}




const ImageForm = ({ setData, settings }) => {


    return (
        <div>

            <h3 className='text-lg text-red-500'>Images</h3>
            <div className='mb-4 flex flex-row'>
                <div>

                    <picture>
                        <img src={settings['logo'] ? `/storage/${settings['logo']}` : "/images/logo.png"} alt="Logo" style={{ width: '60px', height: '60px' }} />
                    </picture>

                    <label className='text-red-500'>Logo</label>
                    <TextInput className='w-full p-2' type='file' onChange={e => setData('logo', e.target.files[0])} />
                </div>
                
                <div>
                    <picture>
                        <img src={settings['favicon'] ? `/storage/${settings['favicon']}` : "/images/logo.png"} alt="Favicon" style={{ width: '60px', height: '60px' }} />
                    </picture>
                    <label className='text-red-500'>Favicon Logo</label>
                    <TextInput className='w-full p-2' type='file' onChange={e => setData('favicon', e.target.files[0])} />
                </div>

            </div>
        </div>
    );
}



export default function index({ auth, settings_data }) {

    const { data, post, setData } = useForm();
    const { settings: pagesettings } = usePage().props;

    const onsubmit = (e) => {
        e.preventDefault();
        // console.log(data);

        post(route('settings.store'))

    }

    useEffect(() => {
        for (const key in pagesettings) {
            if (Object.prototype.hasOwnProperty.call(pagesettings, key)) {
                const element = pagesettings[key];
                if ((key !== 'logo') && (key !== 'favicon')) {
                    setData(key, element);
                }
            }
        }
    }, [pagesettings])


    return (
        <AuthenticatedLayout
            users={auth.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="text-xl truncate font-semibold leading-tight text-gray-800">
                        Settings Section
                    </h2>

                    {/*<Link className='px-2 py-2 rounded items-center hover:bg-green-600 bg-green-500 text-white' href={route('branch.index')}>Branches</Link>*/}

                </div>
            }
        >
            <Head title={`Settings Section`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={onsubmit} >
                                <h3 className='text-white mb-3 mt-3 font-bold bg-slate-600 p-3'>Company Information</h3>
                                <TextForm setData={setData} settings={pagesettings} />
                                <h3 className='text-white mb-3 mt-3 font-bold bg-slate-600 p-3'>Socials</h3>
                                <SocialsForm setData={setData} settings={pagesettings} />
                                <h3 className='text-white mb-3 mt-3 font-bold bg-slate-600 p-3'>Logo/Favicons</h3>
                                <ImageForm setData={setData} settings={pagesettings} />
                                <PrimaryButton>Update Settings</PrimaryButton>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
