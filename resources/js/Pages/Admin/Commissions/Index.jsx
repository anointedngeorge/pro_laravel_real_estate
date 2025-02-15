import Pagination from '@/Components/Pagination';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { COMMISSION_STATUS_MAP } from '@/Constants';
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
        router.get(route(`commission.index`), queryParams);
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


    // const onDestroy = (object) => {
    //     router.delete(route('commission.destroy', object.id));
    // }

    const changeCommissionStatus = (e) => {
        const query = `${e}`.split('/');
        const status = query[0];
        const id = query[1];
        router.put(route('commission.changestatus', [status, id]))
    }

    return (
        <AuthenticatedLayout
            users={pageData.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold leading-tight text-amber-500">
                        Commissions
                    </h2>
                    {/* <Link className='px-2 py-2 rounded items-center hover:bg-green-600 bg-green-500 text-white' href={route('commission.create')}>New Sales</Link> */}
                </div>
            }
        >
            <Head title="Commissions" />

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
                                <Pagination links={pageData.commissions.meta.links} />
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

                                                <TableHeading>Client</TableHeading>
                                                <TableHeading>Amount</TableHeading>
                                                <TableHeading>First Generation</TableHeading>
                                                <TableHeading>Second Generation</TableHeading>
                                                <TableHeading>Third Generation</TableHeading>
                                                <TableHeading>Status</TableHeading>
                                                <TableHeading>Actions</TableHeading>
                                            </tr>
                                        </thead>
                                        <tbody className='odd:bg-white even:bg-gray-50'>
                                            {pageData.commissions.data.map((commission, index) => (
                                                <tr key={commission.id}>
                                                    <TableRow>{index + 1}</TableRow>
                                                    <TableRow>{commission.property_sale_id?.property_id.name}</TableRow>

                                                    <TableRow>{commission.client_id.fullname}</TableRow>
                                                    <TableRow>{MoneyFormat({ amount: commission.amount_paid })}</TableRow>
                                                    <TableRow>
                                                        {MoneyFormat({ amount: commission.first_generation_commission })}
                                                    </TableRow>
                                                    <TableRow>
                                                        {MoneyFormat({ amount: commission.second_generation_commission })}
                                                    </TableRow>
                                                    <TableRow>
                                                        {MoneyFormat({ amount: commission.third_generation_commission })}
                                                    </TableRow>


                                                    <TableRow>
                                                        {COMMISSION_STATUS_MAP[commission.status]}
                                                        <select onChange={e => changeCommissionStatus(e.target.value)}>
                                                            <option value={null + `/${commission.id}`}></option>
                                                            <option value={`paid/${commission.id}`}>PAID</option>
                                                            <option value={`unpaid/${commission.id}`}>UNPAID</option>
                                                        </select>
                                                    </TableRow>

                                                    <TableRow>
                                                        <ul className='text-nowrap flex gap-x-2 px-2 py-3'>
                                                            <li>
                                                                <Link className='text-white rounded bg-green-700 p-2' href={route('commission.show', commission.id)}>View Details</Link>
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
                                <Pagination links={pageData.commissions.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
