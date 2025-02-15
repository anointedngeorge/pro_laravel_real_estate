
import { ViewData } from '@/Components/ViewData';
import { MoneyFormat } from '@/Functions';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';






export default function show({ auth, propertysales }) {

    return (
        <AuthenticatedLayout
            users={auth.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Propertysales <span className='text-amber-500 text-3xl'>{`${propertysales.property_id.name}`}</span>
                    </h2>
                    <Link className='px-2 py-2 rounded items-center hover:bg-green-600 bg-green-500 text-white' href={route('propertysales.index')}>Property Sales</Link>
                </div>
            }
        >
            <Head title={`View Property Sales`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 grid grid-cols-1">
                            <div className='w-full mt-5 mb-5 flex justify-between'>
                                <h3 className='text-lg font-bold'><span className='uppercase text-green-500'>Original Price:</span> {MoneyFormat({ amount: propertysales.amount })}</h3>
                                <h3 className='text-lg font-bold'><span className='uppercase text-green-500'>Initial Payment:</span> {MoneyFormat({ amount: propertysales.initial_amount_paid })}</h3>

                            </div>
                            <div className='grid grid-cols-2 gap-x-6 justify-between'>
                                <div>
                                    <h3 className='font-bold text-lg'>Property Information</h3>
                                    <ViewData
                                        objects={propertysales.property_id}
                                        exclude='id'
                                    />
                                </div>

                                <div >
                                    <h3 className='font-bold text-lg'>Owner's Information (Client)</h3>
                                    <ViewData
                                        objects={propertysales.client_id}
                                        exclude='id'
                                    />
                                </div>
                            </div>

                            <div className='mt-10'>
                                <hr />
                            </div>
                            <div className='grid grid-cols-3 gap-x-6 mt-10'>
                                <div>
                                    <h3 className='font-bold text-lg'>First Generation Information</h3>
                                    <ViewData
                                        objects={propertysales.first_generation}
                                        exclude='id, referralLink, image_path,first_name,last_name'
                                    />
                                </div>

                                <div>
                                    <h3 className='font-bold text-lg'>Second Generation Information</h3>
                                    <ViewData
                                        objects={propertysales.second_generation}
                                        exclude='id, referralLink, image_path,first_name,last_name'
                                    />
                                </div>

                                <div>
                                    <h3 className='font-bold text-lg'>Third Generation Information</h3>
                                    <ViewData
                                        objects={propertysales.third_generation}
                                        exclude='id, referralLink, image_path,first_name,last_name'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </AuthenticatedLayout>
    );
}
