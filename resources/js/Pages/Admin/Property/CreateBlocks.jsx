
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { ViewData } from '@/Components/ViewData';
import { MoneyFormat } from '@/Functions';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';



const CreateBlockComponent = () => {
    return (
        <div className='grid grid-cols-2 gap-x-4'>
            <div className='p-3 border-black border-2'>
                <h3 className='text-amber-500 text-2xl font-bold'>Create New Blocks</h3>
                <hr />
                <div className='mt-4 mb-4'>
                    <form>
                        <div className='w-full'>
                            <InputLabel
                                htmlFor="block_name"
                                value={'Block Name'}
                            />
                            <TextInput
                                id='block_name'
                                className="w-full"
                                isfocused={true}
                                placeholder='Enter Block Name'
                            />
                        </div>
                        <div className='mt-4'>
                            <PrimaryButton>Create</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>

            <div className='border-s-amber-600 border-2 p-3 bg-amber-50'><h3>View Blocks</h3></div>
        </div>
    );
}


const CreateBlockPlotsComponent = () => {
    return (
        <div className='grid grid-cols-2 gap-x-4 mt-10 mb-10'><h3>View Blocks Plots</h3></div>
    );
}







export default function CreateBlocks({ auth, property }) {

    return (
        <AuthenticatedLayout
            users={auth.user}
            header={
                <div className='flex justify-between '>
                    <h2 className="text-xl truncate w-3/4 font-semibold leading-tight text-gray-800">
                        <b>{`Property Blocks Page`}</b>
                    </h2>
                    <Link className='px-2 py-2 rounded items-center hover:bg-green-600 bg-green-500 text-white' href={route('property.index')}>Property</Link>
                </div>
            }
        >

            <Head title={`Property Blocks`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <small><span className='text-amber-500 text-3xl'>{`${property.name}`}</span></small>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 grid grid-cols-1 border-none">
                            {/* blocks */}

                            <CreateBlockComponent />


                            {/* blocks plots */}
                            <CreateBlockPlotsComponent />

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
