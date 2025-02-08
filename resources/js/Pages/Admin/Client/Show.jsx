
import { ViewData } from '@/Components/ViewData';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';






export default function show({ auth, client }) {

    return (
        <AuthenticatedLayout
            users={auth.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        View Client <span className='text-amber-500 text-3xl'>{`${client.fullname}`}</span>
                    </h2>
                    <Link className='px-2 py-2 rounded items-center hover:bg-green-600 bg-green-500 text-white' href={route('client.index')}>New Client</Link>
                </div>
            }
        >
            <Head title={`View Client`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 grid grid-cols-2">
                            <div>
                                <ViewData objects={client} />
                            </div>
                            <div>
                                Total Referred
                                <h1 className='font-bold text-2xl'>400 Referrals</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
