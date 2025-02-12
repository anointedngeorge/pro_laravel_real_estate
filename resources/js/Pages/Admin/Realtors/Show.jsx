
import { ViewData } from '@/Components/ViewData';
import { copyToClipboard } from '@/Functions';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { FaCopy } from "react-icons/fa";





export default function show({ auth, data }) {

    return (
        <AuthenticatedLayout
            users={auth.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        View <span className='text-amber-500 text-3xl'>{`${data.realtor.fullname}`}</span> details
                    </h2>
                    <Link className='px-2 py-2 rounded items-center hover:bg-green-600 bg-green-500 text-white' href={route('realtors.index')}>Realtors</Link>
                </div>
            }
        >
            <Head title={`View Realtors`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className='p-3 '>
                            <h3 className='text-2xl text-green-600 font-extrabold'>

                                <span><Link
                                    title='Click to view'
                                    href={data.realtor.referralLink}
                                    target='_blank'
                                >
                                    {data.realtor.referralLink}
                                </Link>
                                </span>
                                <span
                                    className="text-blue-500 cursor-pointer ml-2 text-lg"
                                    onClick={e => copyToClipboard(`${data.realtor.referralLink}`)}>
                                    <div className='flex flex-row items-center gap-x-2'>
                                        <FaCopy />
                                        Copy Link
                                    </div>
                                </span>
                            </h3>
                        </div>
                        <div className="p-6 text-gray-900 grid grid-cols-4">
                            <div>
                                <ViewData
                                    objects={data.realtor}
                                    exclude='referralLink,id,image_path'
                                />
                            </div>
                            <div>
                                <h3>First Generation List</h3>
                                <pre>{JSON.stringify(data.first, undefined, 2)}</pre>
                            </div>
                            <div>
                                <h3>Second Generation List</h3>
                                <pre>{JSON.stringify(data.second, undefined, 2)}</pre>
                            </div>
                            <div>
                                <h3>Third Generation List</h3>
                                <pre>{JSON.stringify(data.third, undefined, 2)}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
