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




export default function branch({ ...pageData }) {


    const onDestroy = (object) => {
        router.delete(route('branch.destroy', object.id));
    }

    return (
        <AuthenticatedLayout
            users={pageData.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold leading-tight text-amber-500">
                        Branchs
                    </h2>
                    <Link className='px-2 py-2 rounded items-center hover:bg-green-600 bg-green-500 text-white' href={route('branch.create')}>Add branchs</Link>
                </div>
            }
        >
            <Head title="branchs" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {pageData.message && (
                        <div className='w-full py-4 bg-green-500 text-white px-2'>
                            {pageData.message}
                        </div>
                    )}

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            <div className='overflow-auto'>

                                <table
                                    id="myTable"
                                    className='px-4 w-full border-collapse border border-gray-200 text-left'
                                >

                                    <thead className='bg-gray-100'>
                                        <tr>
                                            <TableHeading>ID</TableHeading>
                                            <TableHeading>Office</TableHeading>
                                            <TableHeading>Manager</TableHeading>
                                            <TableHeading>Actions</TableHeading>
                                        </tr>
                                    </thead>
                                    <tbody className='odd:bg-white even:bg-gray-50'>
                                        {pageData.branches.data.map((branch, index) => (
                                            <tr key={`${branch.id}_branch`}>
                                                <TableRow>{index + 1}</TableRow>
                                                <TableRow>{branch.office}</TableRow>
                                                <TableRow>{branch.manager}</TableRow>
                                                <TableRow>
                                                    <ul className='text-nowrap flex gap-x-2 px-2 py-3'>
                                                        <li>
                                                            <Link className='text-blue-500' href={route('branch.edit', branch.id)}>Edit</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='text-amber-500' href={route('branch.show', branch.id)}>View</Link>
                                                        </li>
                                                        <li>
                                                            <button className='text-red-500' onClick={e => onDestroy(branch)}>Delete</button>
                                                        </li>
                                                    </ul>
                                                </TableRow>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
