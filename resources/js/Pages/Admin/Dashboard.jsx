import { MoneyFormat } from '@/Functions';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';



const Card = ({ pageData }) => {
    return (
        <div>
            {pageData.map((item, index) => (
                <div className="flex -mx-2 mt-3" key={`first_${index}`}>
                    {item.map((itemx, indexx) => (
                        <div className="w-1/3 px-2" key={`second_${indexx}`}>
                            <div className={itemx.className} >
                                <h3 className='text-white font-bold'>{itemx.label}</h3>
                                <p className='text-right text-teal-50'>{itemx.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}


export default function Dashboard({ ...pageData }) {

    const cardInfo = [
        [
            { content: MoneyFormat({ amount: pageData.Unpaid }), label: 'UnPaid', className: 'bg-green-500 p-4 rounded-lg' },
            { content: MoneyFormat({ amount: pageData.paid }), label: 'Paid', className: 'bg-red-500 p-4 rounded-lg' },
            { content: pageData.totalRealtors, label: 'Total Realtors', className: 'bg-green-500 p-4 rounded-lg' },
            { content: pageData.totalClients, label: 'Total Clients', className: 'bg-amber-500 p-4 rounded-lg' },
        ],
        [
            { content: MoneyFormat({ amount: pageData.totalCommission }), label: 'Total Commission', className: 'bg-amber-500 p-4 rounded-lg' },
            { content: MoneyFormat({ amount: pageData.sales }), label: 'Total Sales', className: 'bg-green-500 p-4 rounded-lg' },
            { content: pageData.totalProperty, label: 'Total Property', className: 'bg-red-500 p-4 rounded-lg' },
            { content: pageData.referrals, label: 'Total Referrals', className: 'bg-green-500 p-4 rounded-lg' },
        ],
    ];


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            {/* <pre>
                {JSON.stringify(pageData.propertySales, undefined, 2)}
            </pre>*/}
            <div className="py-12">
                <div className="mx-aut max-w-7x sm:px-6">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            <Card pageData={cardInfo} />

                            {/* full with */}
                            <div className="flex flex-wrap mt-8">
                                <div class="w-2/3 ml-auto bg-gray-500 h-12"></div>
                                <div class="w-1/3 mr-auto bg-gray-400 h-12"></div>
                            </div>
                            {/* full with */}



                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
