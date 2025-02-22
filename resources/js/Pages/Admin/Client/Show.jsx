
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { ViewData } from '@/Components/ViewData';
import { DateStringFormat, MoneyFormat } from '@/Functions';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';



const PayContent = ({ pagedata, closeModal = () => { } }) => {
    const { data, setData, post, errors } = useForm();

    const onSubmitForm = (e) => {
        e.preventDefault();
        post(route('propertysales.ledger', pagedata.id));
        // console.log(data);

    }

    return (
        <div>
            <div className='w-full p-2'>
                <div className='flex justify-end'><span onClick={closeModal} className='cursor-pointer'>Close</span></div>
            </div>
            <div>
                <div className='flex flex-col  justify-end p-3'>
                    <span>{pagedata && pagedata.property_id && pagedata.property_id.name}</span>

                    <strong>Balance: {MoneyFormat({ amount: pagedata.balance })}</strong>
                </div>

                <div className='flex flex-col gap-y-2 p-3'>

                    <form onSubmit={onSubmitForm} >
                        <div>
                            <InputLabel value={`Enter Amount`} htmlFor={'amount'} />
                            <TextInput type="number" className='w-full p-3' onKeyUp={e => setData('amount_paid', e.target.value)} defaultValue={0} />
                        </div>
                        <div className='mt-4'>
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </form>
                </div>

            </div>

            <div className='w-full p-2'>
                <div className='flex justify-end'><span onClick={closeModal} className='cursor-pointer'>Close</span></div>
            </div>
        </div>
    );
}

const HistoryContent = ({ pagedata, closeModal = () => { }, ledgerList = [] }) => {
    return (
        <div>
            <div className='w-full p-2'>
                <div className='flex justify-end'><span onClick={closeModal} className='cursor-pointer'>Close</span></div>
            </div>
            <div>
                <div className='flex flex-col  justify-end p-3'>
                    <span>{pagedata && pagedata.property_id && pagedata.property_id.name}</span>

                    <strong>Balance: {MoneyFormat({ amount: pagedata.balance })}</strong>
                </div>

                <div className='flex flex-col gap-y-2 p-3'>
                    <table className='w-auto'>
                        <thead className='bg-slate-800 text-white p-2'>
                            <tr>
                                <td>Amount Paid</td>
                                <td>Amount Reamaining</td>
                                <td>Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {ledgerList.map((item, index) => (
                                <tr key={`ledger_${index}`}>
                                    <td>{item && MoneyFormat({ amount: item.amount_paid })}</td>
                                    <td>{item && MoneyFormat({ amount: item.amount_remaining })}</td>
                                    <td>{item && DateStringFormat({ date: item.created_at })}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>


            </div>

            <div className='w-full p-2'>
                <div className='flex justify-end'><span onClick={closeModal} className='cursor-pointer'>Close</span></div>
            </div>
        </div>
    );
}





export default function show({ auth, client, properties, message }) {

    const [clxModal, setClxModal] = useState(false);
    const [pagedata, setPageData] = useState({});
    const [ledgerlist, setLedgerList] = useState([]);
    const [page, setPage] = useState('');

    const closeModal = () => {
        let st = clxModal ? false : true;
        setClxModal(st);
    }




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
                    {message && <div className='bg-green-500 p-3 text-white'>{message.message}</div>}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 grid grid-cols-1">
                            <div>
                                <ViewData objects={client} />
                            </div>
                        </div>


                        <div className="p-6 text-gray-900 grid grid-cols-1 mt-8">

                            <hr />
                            <div className='w-auto'>
                                <h1 className='font-bold text-2xl'>Properties Purchased</h1>
                                <table className='w-full text-left p-2'>
                                    <thead>
                                        <tr>
                                            <th>Property</th>
                                            <th>Plot Quantity</th>

                                            <th>Total Amount</th>
                                            <th>Balance</th>
                                            <th>Total Paid</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {properties.data.map((property, index) => (
                                            <tr key={index}>
                                                <td className='text-red-600'>{property.property_id.name}</td>
                                                <td>{property.quantity}</td>

                                                <td>{MoneyFormat({ amount: property.amount })}</td>
                                                <td>{MoneyFormat({ amount: property.balance })}</td>
                                                <td>{MoneyFormat({ amount: property.ledger })}</td>
                                                <td>
                                                    <div className='w-auto text-nowrap flex gap-x-1 '>
                                                        <button onClick={e => {
                                                            setPageData(property)
                                                            setPage('pay')
                                                            setClxModal(true);
                                                        }} className='bg-green-500 text-white px-4 py-1 rounded'>Pay</button>
                                                        <button onClick={e => {
                                                            setPageData(property)
                                                            setPage('history')
                                                            setClxModal(true);
                                                            setLedgerList(property.ledger_list)
                                                        }} className='bg-orange-500 text-white px-4 py-1 rounded'>Histories</button>

                                                    </div>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                                <hr />
                                {/* modal*/}

                                <Modal show={clxModal} closeable={true}  >
                                    {page === 'pay' ? (
                                        <PayContent pagedata={pagedata} closeModal={closeModal} />
                                    ) : page === 'history' ? (
                                        <HistoryContent
                                            pagedata={pagedata}
                                            closeModal={closeModal}
                                            ledgerList={ledgerlist}
                                        />
                                    ) : (
                                        <p>No content available</p>
                                    )}
                                </Modal>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
