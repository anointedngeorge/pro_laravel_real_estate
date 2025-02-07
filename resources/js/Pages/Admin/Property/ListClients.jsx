
import { ViewData } from '@/Components/ViewData';
import { MoneyFormat } from '@/Functions';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';






export default function show({ auth, property, clients }) {

    return (
        <AuthenticatedLayout
            users={auth.user}
            header={
                <div className='flex justify-between '>
                    <h2 className="text-xl truncate w-3/4 font-semibold leading-tight text-gray-800">
                        List All Clients For Property  <span className='text-amber-500 text-3xl'>{`${property.name}`}</span>
                    </h2>
                    <Link className='px-2 py-2 rounded items-center hover:bg-green-600 bg-green-500 text-white' href={route('property.index')}>Property</Link>
                </div>
            }
        >
            <Head title={`View Property`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 grid grid-cols-1">
                            <div className='grid grid-cols-2 gap-x-4 border'>

                                {clients.map((item, index) => (
                                    <div key={`clients_${index}`}>
                                        <h3 className='font-bold text-2xl'>{item.fullname}</h3>
                                        <p className='font-bold'>List of Sales</p>
                                        <table className='w-full'>
                                            <thead>
                                                <tr>
                                                    <td>Sales</td>
                                                    <td>Amount</td>
                                                    <td>Amount Paid</td>
                                                    <td>Actions</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {item.property_sales.map((item, index) => (
                                                    <tr key={`tr${index}`}>
                                                        <td>{index + 1}</td>
                                                        <td>{MoneyFormat({ amount: item.amount })}</td>
                                                        <td>{MoneyFormat({ amount: item.initial_amount_paid })}</td>
                                                        <td>...</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ))}

                                {/*<pre>{JSON.stringify(clients, undefined, 2)}</pre>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
