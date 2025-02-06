import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Pagination from '@/Components/Pagination';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { rangeGenerator } from '@/Functions';
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




export default function Realtors({ ...pageData }) {
    const queryParams = pageData.queryParams || {}

    const onChangeLimit = (limit) => {
        queryParams.limit = limit;
        router.get(route(`realtors.index`), queryParams);
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
        router.delete(route('realtors.destroy', object.id));
    }

    return (
        <AuthenticatedLayout
            users={pageData.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold leading-tight text-amber-500">
                        Realtors
                    </h2>
                    <Link className='px-2 py-2 rounded items-center hover:bg-green-600 bg-green-500 text-white' href={route('realtors.create')}>Add Realtors</Link>
                </div>
            }
        >
            <Head title="Realtors" />

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
                                <Pagination links={pageData.realtors.meta.links} />
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
                                            <TableHeading>Fullname</TableHeading>
                                            <TableHeading>Sponsor</TableHeading>
                                            <TableHeading>Actions</TableHeading>
                                        </tr>
                                    </thead>
                                    <tbody className='odd:bg-white even:bg-gray-50'>
                                        {pageData.realtors.data.map((realtor, index) => (
                                            <tr key={realtor.sponsor_code}>
                                                <TableRow>{index + 1}</TableRow>
                                                <TableRow>{realtor.fullname}</TableRow>
                                                <TableRow>{realtor.sponsor_code}</TableRow>
                                                <TableRow>
                                                    <ul className='text-nowrap flex gap-x-2 px-2 py-3'>
                                                        <li>
                                                            <Link className='text-blue-500' href={route('realtors.edit', realtor.id)}>Edit</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='text-amber-500' href={route('realtors.show', realtor.id)}>View</Link>
                                                        </li>
                                                        <li>
                                                            <button className='text-red-500' onClick={e => onDestroy(realtor)}>Delete</button>
                                                        </li>
                                                    </ul>
                                                </TableRow>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                            <div className="pagination-footer">
                                <Pagination links={pageData.realtors.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
