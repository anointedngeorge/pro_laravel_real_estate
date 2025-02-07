import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-aut max-w-7x sm:px-6">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            <div class="flex -mx-2">
                                <div class="w-1/3 px-2">
                                    <div class="bg-gray-400 h-12"></div>
                                </div>
                                <div class="w-1/3 px-2">
                                    <div class="bg-gray-500 h-12"></div>
                                </div>
                                <div class="w-1/3 px-2">
                                    <div class="bg-gray-400 h-12"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
