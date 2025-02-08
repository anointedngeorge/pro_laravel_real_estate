
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { ViewData } from '@/Components/ViewData';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';



const CreateBlockComponent = ({ property, propertyBlocks }) => {
    const { data, setData, post, errors } = useForm({
        'name': '',
        'property_id': property.id
    });

    // update property block
    const { data: blockdata, setData: blocksetData, put, errors: blockerrors } = useForm({
        'name': '',
        'property_id': property.id,
        '__method': 'PUT'
    });

    const [editInput, setEditInput] = useState(true);
    const [editInputID, setEditInputID] = useState(true);
    const [editBtnText, setEditBtnText] = useState('Edit');

    const toggleInputState = (inputid) => {
        if (editInputID === inputid) {
            // If clicking the same button, toggle back to default state
            setEditInputID(null);
            setEditInput(true);
            setEditBtnText('Edit');
        } else {
            // Enable editing for the selected input
            setEditInputID(inputid);
            setEditInput(false);
            setEditBtnText('Editing');
        }
    };


    const onSubmitF = (e) => {
        e.preventDefault();
        post(route('propertyblock.store'));
    }

    const onUpdatePropertyBlock = (e) => {
        e.preventDefault();
        const block = e.target.id;
        put(route('propertyblock.update', 5));
    }


    return (
        <div className='grid grid-cols-2 gap-x-4'>
            <div className='p-3 border-black border-2'>
                <h3 className='text-amber-500 text-2xl font-bold'>Create New Blocks</h3>
                <hr />
                <div className='mt-4 mb-4'>
                    <form onSubmit={onSubmitF}>
                        <div className='w-full'>
                            <InputLabel
                                htmlFor="block_name"
                                value={'Block Name'}
                            />
                            <TextInput
                                id='block_name'
                                className="w-full"
                                isfocused={'true'}
                                placeholder='Enter Block Name'
                                onChange={e => setData('name', e.target.value)}
                            />

                        </div>
                        <div className='mt-4'>
                            <PrimaryButton>Create Block</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>

            <div className='border-s-amber-600 border-2 p-3 bg-amber-50'>
                <h3 className='text-amber-500 text-2xl font-bold'>View Property Blocks</h3>
                <div>
                    <div className='w-full'>

                        {propertyBlocks.data.map((item, index) => (
                            <div className='flex flex-row justify-between mt-2 border-b-2 py-1' key={`blocks_${index}`}>
                                <div>

                                    <div>
                                        {editInputID === `input${index}` ? (
                                            <form onSubmit={onUpdatePropertyBlock} id={item.id}>
                                                <input
                                                    type="text"
                                                    id={`input${index}`}
                                                    defaultValue={blockdata.name}
                                                    className="border border-gray-400 rounded px-2 py-1"
                                                    onChange={e => blocksetData('name', e.target.value)}
                                                    hidden={editInputID === `input${index}` ? editInput : true}
                                                />

                                                <button type="submit" className="ml-2 bg-blue-500 text-white px-3 py-1 rounded">
                                                    Update
                                                </button>
                                            </form>
                                        ) : <div>{item.name}</div>}
                                    </div>
                                </div>
                                <div className='flex gap-x-2'>
                                    <button
                                        className='bg-green-500 text-white font-bold px-3 py-1 rounded'
                                        onClick={() => {
                                            toggleInputState(`input${index}`);
                                            blocksetData('name', item.name)
                                            // blocksetData('id', item.id);
                                        }}
                                    >
                                        {editInputID === `input${index}` ? editBtnText : 'Edit'}
                                    </button>
                                    <button className='bg-red-500 text-white font-bold px-3 py-1 rounded'>Delete</button>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    );
}





export default function show({ auth, property, message, propertyBlocks }) {

    return (
        <AuthenticatedLayout
            users={auth.user}
            header={
                <div className='flex justify-between '>
                    <h2 className="text-xl truncate w-3/4 font-semibold leading-tight text-gray-800">
                        View <span className='text-amber-500 text-3xl'>{`${property.name}`}</span>
                    </h2>
                    <Link className='px-2 py-2 rounded items-center hover:bg-green-600 bg-green-500 text-white' href={route('property.index')}>Property</Link>
                </div>
            }
        >
            <Head title={`View Property`} />



            <div className="py-12">

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {message && (
                        <div className='px-4 py-2 bg-green-500 text-white'>
                            {message}
                        </div>
                    )}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">

                        <div className="p-6 text-gray-900 grid grid-cols-1">

                            <div>
                                <ViewData
                                    objects={property}
                                    exclude='id'
                                />
                            </div>
                        </div>
                        {/* create new blocks */}

                        <div className="p-6 text-gray-900 grid grid-cols-1 border-none">
                            {/* blocks */}
                            <CreateBlockComponent
                                property={property}
                                propertyBlocks={propertyBlocks}
                            />


                            {/* blocks plots */}


                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
