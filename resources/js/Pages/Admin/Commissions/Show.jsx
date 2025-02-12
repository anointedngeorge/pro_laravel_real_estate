
import { ViewData } from '@/Components/ViewData';
import { MoneyFormat } from '@/Functions';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';






export default function show({ auth, commission }) {

    return (
        <AuthenticatedLayout
            users={auth.user}
            header={
                <div>
                <h3 className="text-xl font-semibold leading-tight text-gray-800 w-full">Commission</h3>
                    <div className='flex justify-between'>
                        <p className="text-xl font-semibold leading-tight text-gray-800">
                            View <span className='text-amber-500 text-3xl'>{`${commission.property_sale_id.property_id.name}`}</span>
                        </p>

                        <Link className='px-2 py-2 rounded items-center hover:bg-green-600 bg-green-500 text-white' href={route('commission.index')}>Back Commission</Link>
                    </div>
                </div>
            }
        >
            <Head title={`View Propertysales`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 grid grid-cols-1">
                            <div className='w-full text-right'>
                                <h1 className='text-2xl font-extrabold'>Amount Paid: {MoneyFormat({ amount: commission.amount_paid })}</h1>
                            </div>
                            <div className='w-full grid grid-cols-3 mt-4'>
                                <div>
                                    <h3 className='font-bold text-lg'>Client Information</h3>
                                    <ViewData
                                        objects={commission.property_sale_id.client_id}
                                        exclude='id'
                                    />
                                </div>

                                <div>
                                    <h3 className='font-bold text-lg'>Property Information</h3>
                                    <ViewData
                                        objects={commission.property_sale_id.property_id}
                                        exclude='id'
                                    />
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Commission Information</h3>
                                    <div className='p-5 rounded bg-gray-900 text-white grid grid-cols-1 gap-y-4'>
                                        <div>
                                            <p>First Generation Commission</p>
                                            <p className='text-green-300'>{MoneyFormat({ amount: commission.first_generation_commission })}</p>
                                        </div>

                                        <div>
                                            <p>Second Generation Commission</p>
                                            <p className='text-amber-300'>{MoneyFormat({ amount: commission.second_generation_commission })}</p>
                                        </div>


                                        <div>
                                            <p>Third Generation Commission</p>
                                            <p className='text-red-300'>{MoneyFormat({ amount: commission.third_generation_commission })}</p>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className='mt-10'>
                                <hr />
                            </div>
                            <div className='w-full grid grid-cols-3 mt-10'>
                                <div>
                                    <h3 className='font-bold text-lg'>First Generation Information
                                        <sup>
                                            <span className='bg-gray-950 text-white rounded-full px-3 py-2'>
                                                {commission.property_sale_id.first_generation_commission}%
                                            </span>
                                        </sup>
                                    </h3>
                                    <div>
                                        <img src={commission.property_sale_id.first_generation.image_path} alt="" className='w-20 h-20' />
                                    </div>
                                    <ViewData
                                        objects={commission.property_sale_id.first_generation}
                                        exclude='id,image_path, referralLink'
                                    />
                                </div>

                                <div>
                                    <h3 className='font-bold text-lg'>Second Generation Information
                                        <sup>
                                            <span className='bg-amber-500 text-white rounded-full px-3 py-2'>
                                                {commission.property_sale_id.second_generation_commission}%
                                            </span>
                                        </sup>
                                    </h3>
                                    <div>
                                        <img src={commission.property_sale_id.second_generation.image_path} alt="" className='w-20 h-20' />
                                    </div>
                                    <ViewData
                                        objects={commission.property_sale_id.second_generation}
                                        exclude='id,image_path, referralLink'
                                    />
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Third Generation Information
                                        <sup>
                                            <span className='bg-green-500 text-white rounded-full px-3 py-2'>
                                                {commission.property_sale_id.third_generation_commission}%
                                            </span>
                                        </sup>
                                    </h3>
                                    <div>
                                        <img src={commission.property_sale_id.third_generation.image_path} alt="" className='w-20 h-20' />
                                    </div>
                                    <ViewData
                                        objects={commission.property_sale_id.third_generation}
                                        exclude='id,image_path, referralLink'
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
