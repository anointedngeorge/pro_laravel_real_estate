import Pagination from '@/Components/Pagination';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { MoneyFormat, rangeGenerator } from '@/Functions';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';


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




export default function Propertysales({ ...pageData }) {
    const queryParams = pageData.queryParams || {}

    const onChangeLimit = (limit) => {
        queryParams.limit = limit;
        router.get(route(`propertysales.index`), queryParams);
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
        router.delete(route('propertysales.destroy', object.id));
    }

    return (
        <AuthenticatedLayout
            users={pageData.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold leading-tight text-amber-500">
                        Property Sales
                    </h2>
                    <Link className='px-2 py-2 rounded items-center hover:bg-green-600 bg-green-500 text-white' href={route('propertysales.create')}>New Sales</Link>
                </div>
            }
        >
            <Head title="Property Sales" />

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
                                <Pagination links={pageData.propertysales.meta.links} />
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
                                <div className='overflow-auto'>
                                    <table
                                        id="myTable"
                                        className='px-4 w-full border-collapse border border-gray-200 text-left'
                                    >

                                        <thead className='bg-gray-100'>
                                            <tr>
                                                <TableHeading>ID</TableHeading>
                                                <TableHeading>Property</TableHeading>
                                                <TableHeading>Quantity</TableHeading>
                                                <TableHeading>Client</TableHeading>
                                                <TableHeading>Amount</TableHeading>
                                                <TableHeading>Initial Amount Paid</TableHeading>
                                                <TableHeading>First Generation</TableHeading>
                                                <TableHeading>Second Generation</TableHeading>
                                                <TableHeading>Third Generation</TableHeading>
                                                <TableHeading>Actions</TableHeading>
                                            </tr>
                                        </thead>
                                        <tbody className='odd:bg-white even:bg-gray-50'>
                                            {pageData.propertysales.data.map((propertysale, index) => (
                                                <tr key={propertysale.id}>
                                                    <TableRow>{index + 1}</TableRow>
                                                    <TableRow>{propertysale.property_id.name}</TableRow>
                                                    <TableRow>{propertysale.quantity}</TableRow>
                                                    <TableRow>{propertysale.client_id.fullname}</TableRow>
                                                    <TableRow>{MoneyFormat({ amount: propertysale.amount })}</TableRow>
                                                    <TableRow>{MoneyFormat({ amount: propertysale.initial_amount_paid })}</TableRow>
                                                    <TableRow>
                                                        {propertysale.first_generation.fullname}
                                                        <sup>
                                                            <span className='bg-green-500 text-white p-1 rounded-full'>{propertysale.first_generation_commission}%</span>
                                                        </sup>
                                                    </TableRow>
                                                    <TableRow>
                                                        {propertysale.second_generation.fullname}
                                                        <sup>
                                                            <span className='bg-amber-500 text-white p-1 rounded-full'>{propertysale.second_generation_commission}%</span>
                                                        </sup>
                                                    </TableRow>
                                                    <TableRow>
                                                        {propertysale.third_generation.fullname}
                                                        <sup>
                                                            <span className='bg-gray-500 text-white p-1 rounded-full'>{propertysale.third_generation_commission}%</span>
                                                        </sup>
                                                    </TableRow>

                                                    <TableRow>
                                                        <ul className='text-nowrap flex gap-x-2 px-2 py-3'>
                                                            <li>
                                                                <Link className='text-blue-500' href={route('propertysales.edit', propertysale.id)}>Edit</Link>
                                                            </li>
                                                            <li>
                                                                <Link className='text-amber-500' href={route('propertysales.show', propertysale.id)}>View</Link>
                                                            </li>
                                                            <li>
                                                                <button className='text-red-500' onClick={e => onDestroy(propertysale)}>Delete</button>
                                                            </li>
                                                        </ul>
                                                    </TableRow>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="pagination-footer">
                                <Pagination links={pageData.propertysales.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
