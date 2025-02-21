import { CreateProperty } from '@/Components/forms/CreateProperty';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';






export default function create({ auth, message }) {

    return (
        <AuthenticatedLayout
            users={auth.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="text-xl truncate font-semibold leading-tight text-gray-800 elip">
                        Add New Property
                    </h2>
                    <Link className='px-2 py-2 rounded items-center hover:bg-green-600 bg-green-500 text-white' href={route('property.index')}>Back Property</Link>
                </div>
            }
        >
            <Head title={`Property`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {message && (<div>Property Created</div>)}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <CreateProperty />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
