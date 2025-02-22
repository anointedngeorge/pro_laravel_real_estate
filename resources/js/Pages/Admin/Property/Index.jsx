import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import Pagination from '@/Components/Pagination';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { formatString, rangeGenerator } from '@/Functions';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { useState } from 'react';



const AddMediaFiles = ({ pagedata, closeModal = () => { } }) => {
    const { data, setData, post, errors } = useForm({
        'property_id': pagedata.id
    });

    const onSubmitForm = (e) => {
        e.preventDefault();
        post(route('property.media', pagedata.id));
        // console.log(data);
    }

    return (
        <div className='w-full p-3'>
            <div className='w-full p-2'>
                <div className='flex justify-end'><span onClick={closeModal} className='cursor-pointer'>Close</span></div>
            </div>
            <form onSubmit={onSubmitForm}>
                <div className='grid'>
                    <div className='flex '>
                        <div>
                            <InputLabel value={'Files'} />
                            <TextInput type="file" className="w-full" onChange={e => setData('media', e.target.files[0])} />
                        </div>

                        <div>
                            <InputLabel value={'Type'} />
                            <SelectInput onChange={e => setData('type', e.target.value)}>
                                <option >...</option>
                                <option value="layout">Layouts</option>
                                <option value="image">Image</option>
                                <option value="documents">Documents</option>
                            </SelectInput>
                        </div>
                    </div>
                    <div><PrimaryButton>Upload</PrimaryButton></div>
                </div>
            </form>
            <div className='mt-4'>
                <table className='w-full p-2'>
                    <thead>
                        <tr>
                            <th>Media</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pagedata.media_files.map((item, index) => (
                            <tr key={`${index}_media`} className='mt-2 mb-2'>
                                <td><img src={item.media_path ? `/storage/${item.media_path}` : '/images/blank_bg.jpg'} alt="..." width={100} height={100} /></td>
                                <td>{item.type}</td>
                                <td><button className='bg-red-500 px-2 py-1 rounded text-white'>Delete</button></td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>


            <div className='w-full p-2'>
                <div className='flex justify-end'><span onClick={closeModal} className='cursor-pointer'>Close</span></div>
            </div>
        </div>
    );
}




const TableHeading = ({ children }) => {
    return (
        <th className='border border-gray-200 px-4 py-2'>
            {children}
        </th>
    );
}


const TableRow = ({ children }) => {
    return (
        <td className='border border-gray-200 px-4 py-2'>
            {children}
        </td>
    );
}




export default function Property({ ...pageData }) {
    const queryParams = pageData.queryParams || {}

    const onChangeLimit = (limit) => {
        queryParams.limit = limit;
        router.get(route(`property.index`), queryParams);
    }

    const tableFilter = (input) => {
        // Convert input to uppercase for case-insensitive search
        let filter = input.toUpperCase();
        let table = document.getElementById("myTable");
        let tr = table.getElementsByTagName("tr");

        // Loop through all table rows (starting from index 1 to skip the header row)
        for (let i = 1; i < tr.length; i++) {
            let tds = tr[i].getElementsByTagName("td");
            let rowMatch = false;

            // Loop through all columns in the row
            for (let td of tds) {
                if (td) {
                    let txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        rowMatch = true;
                        break; // No need to check other columns if one matches
                    }
                }
            }

            // Show or hide the row based on whether there was a match
            tr[i].style.display = rowMatch ? "" : "none";
        }
    };


    const onDestroy = (object) => {
        router.delete(route('property.destroy', object.id));
    }


    const propertyAvailability = (status, objectID) => {

        router.put(route('property.availability', {
            'property': objectID,
            'status': status
        }));
    }


    const [page, setPage] = useState('');
    const [clxModal, setClxModal] = useState(false);
    const [pagedata, setPageData] = useState({});

    const closeModal = () => {
        let st = clxModal ? false : true;
        setClxModal(st);
    }

    return (
        <AuthenticatedLayout
            users={pageData.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold leading-tight text-amber-500">
                        Property
                    </h2>
                    <Link className='px-2 py-2 rounded items-center hover:bg-green-600 bg-green-500 text-white' href={route('property.create')}>Add Property</Link>
                </div>
            }
        >
            <Head title="Property" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {pageData.message && (
                        <div className='w-full py-4 bg-green-500 text-white px-2'>
                            {pageData.message}
                        </div>
                    )}

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="pagination-footer">
                                <Pagination links={pageData.property.meta.links} />
                            </div>
                            <div className='overflow-auto'>
                                {/*top line*/}
                                <div className='grid grid-cols-3 mb-8 mt-4'>

                                    <div>

                                        <SelectInput
                                            name="status"
                                            id="project_status"
                                            className="w-full"
                                            defaultValue={queryParams.limit}
                                            onChange={e => onChangeLimit(e.target.value)}
                                        >
                                            {[...rangeGenerator(0, 50, 5)].map((num) => (
                                                <option key={`$page${num}`} value={num}>{num}</option>
                                            ))}

                                        </SelectInput>
                                    </div>
                                    <div></div>
                                    <div >
                                        <TextInput
                                            id="myInput"
                                            onKeyUp={e => tableFilter(e.target.value)}
                                            type='search'
                                            placeholder='Search'
                                            className='w-full'
                                        />
                                    </div>
                                </div>
                                {/*bottom line*/}
                                <table
                                    id="myTable"
                                    className='px-4 w-full border-collapse border border-gray-200 text-left'
                                >

                                    <thead className='bg-gray-100'>
                                        <tr>
                                            <TableHeading>ID</TableHeading>
                                            <TableHeading>Name</TableHeading>
                                            <TableHeading>quantity</TableHeading>
                                            <TableHeading>Status</TableHeading>
                                            <TableHeading>Actions</TableHeading>
                                        </tr>
                                    </thead>
                                    <tbody className='odd:bg-white even:bg-gray-50'>
                                        {pageData.property.data.map((property, index) => (
                                            <tr key={property.sponsor_code}>
                                                <TableRow>{index + 1}</TableRow>
                                                <TableRow>{property.name}</TableRow>
                                                <TableRow>{property.quantity}</TableRow>
                                                <TableRow>
                                                    <p>{formatString(property.property_status)}</p>
                                                    <SelectInput onChange={e => propertyAvailability(e.target.value, property.id)} >
                                                        <option >Choose</option>
                                                        <option value="available">Available</option>
                                                        <option value="soldout">SoldOut</option>
                                                    </SelectInput>
                                                </TableRow>
                                                <TableRow>
                                                    <ul className='text-nowrap flex gap-x-2 px-2 py-3'>
                                                        <li>
                                                            <Link className='text-blue-500' href={route('property.edit', property.id)}>Edit</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='text-amber-500' href={route('property.show', property.id)}>View</Link>
                                                        </li>
                                                        {/*
                                                         <li>
                                                            <Link
                                                                className='text-green-500'
                                                                href={route('property.clients', property.id)}>
                                                                Clients
                                                            </Link>
                                                        </li>
                                                        */}
                                                        <li>
                                                            <button onClick={e => {
                                                                setPageData(property)
                                                                setClxModal(true);
                                                            }} className='bg-green-500 text-white px-4 py-1 rounded'>Media</button>
                                                        </li>
                                                        <li>
                                                            <button className='text-red-500' onClick={e => onDestroy(property)}>Delete</button>
                                                        </li>
                                                    </ul>
                                                </TableRow>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                            <div className="pagination-footer">
                                <Pagination links={pageData.property.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Modal show={clxModal} closeable={true}  >
                <AddMediaFiles pagedata={pagedata} closeModal={closeModal} />
            </Modal>
        </AuthenticatedLayout>
    );
}
