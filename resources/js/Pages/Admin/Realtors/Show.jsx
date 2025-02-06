
import { ViewData } from '@/Components/ViewData';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';






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
                        <div className="p-6 text-gray-900 grid grid-cols-4">
                            <div>
                                <ViewData objects={data.realtor} />
                            </div>
                            <div><pre>{JSON.stringify(data.first, undefined, 2)}</pre></div>
                            <div><pre>{JSON.stringify(data.second, undefined, 2)}</pre></div>
                            <div><pre>{JSON.stringify(data.third, undefined, 2)}</pre></div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
