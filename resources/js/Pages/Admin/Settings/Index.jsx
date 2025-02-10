import { Editbranch } from '@/Components/forms/Editbranch';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextAreaInput from '@/Components/TextAreaInput';
import { formatString } from '@/Functions';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';








export default function index({ auth, settings }) {

    const { data, post, setData } = useForm();

    const onsubmit = (e) => {
        e.preventDefault();
        post(route('settings.store'))

    }

    const addMoreSettingsParameters = [
        // { name: 'login_form_title', description: 'form title' },
    ];

    useEffect(() => {
        settings.map(item => {
            setData(item.name, item.description)
        })
    }, [settings])


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
                                {settings.map((item, index) => (
                                    <div key={index} className='mt-4 mb-8'>
                                        <InputLabel
                                            value={formatString(item.name)}
                                            className='text-lg font-bold'
                                        />
                                        <TextAreaInput onChange={e => {
                                            setData(item.name, e.target.value)
                                        }} className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" defaultValue={item.description}></TextAreaInput>
                                    </div>
                                ))}


                                {addMoreSettingsParameters.map((item, index) => (
                                    <div key={`more${index}`} className='mt-4 mb-8'>
                                        <InputLabel
                                            value={formatString(item.name)}
                                            className='text-lg font-bold'
                                        />
                                        <TextAreaInput onChange={e => {
                                            setData(item.name, e.target.value)
                                        }} className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" defaultValue={item.description}></TextAreaInput>
                                    </div>
                                ))}

                                <PrimaryButton>Update Settings</PrimaryButton>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
