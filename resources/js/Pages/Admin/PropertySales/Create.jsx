import { CreateSalesForm } from '@/Components/forms/CreateSalesForm';
import { EditRealtor } from '@/Components/forms/EditRealtor';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';






export default function edit({ ...pageData }) {

    return (
        <AuthenticatedLayout
            users={pageData.auth.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        <span className='text-amber-500 text-3xl mr-1'>New Sales</span>
                    </h2>

                    <Link className='px-2 py-2 rounded items-center hover:bg-green-600 bg-green-500 text-white' href={route('propertysales.index')}>Property Sales</Link>

                </div>
            }
        >
            <Head title={`Property Sales`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <CreateSalesForm pageData={pageData} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
