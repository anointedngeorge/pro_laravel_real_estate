
import { CreateRealtor } from '@/Components/forms/CreateRealtor';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';






export default function edit({ auth }) {

    return (
        <AuthenticatedLayout
            users={auth.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Create New Realtor
                    </h2>

                    <Link className='px-2 py-2 rounded items-center hover:bg-green-600 bg-green-500 text-white' href={route('realtors.index')}>Realtors List</Link>

                </div>
            }
        >
            <Head title={`Realtors`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <CreateRealtor />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
