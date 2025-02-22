
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { ViewData } from '@/Components/ViewData';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';



const CreateBlockComponent = ({ property, propertyBlocks }) => {
    const { data, setData, post, errors } = useForm({
        'name': '',
        'property_id': property.id
    });

    // update property block
    const { data: blockdata, setData: blocksetData, post: blockPost, errors: blockerrors } = useForm({
        name: 'None',
        property_id: property.id,
        _method: "PUT"
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
        blockPost(route('propertyblock.update', e.target.id));
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



const CreateBlockPlotsComponent = ({ property, propertyBlocks, propertyBlockPlots }) => {
    const { data, setData, post, errors } = useForm({
        'name': '',
        'property_block_id': '',
        'property_id': property.id
    });

    // update property block
    const { data: blockdata, setData: blocksetData, post: blockPost, errors: blockerrors } = useForm({
        name: 'None',
        property_block_id: '',
        property_id: property.id,
        _method: "PUT"
    });

    const [editInput, setEditInput] = useState(true);
    const [editInputID, setEditInputID] = useState(true);
    const [editBtnText, setEditBtnText] = useState('Edit');

    const [plotsdata, setPlotsData] = useState([]);

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
        post(route('propertyblockplot.store'));
    }

    const onUpdatePropertyBlock = (e) => {
        e.preventDefault();
        blockPost(route('propertyblockplot.update', e.target.id));
    }

    const filterBlockPlots = (e) => {
        const data = [...propertyBlockPlots.data.filter(f => f.property_block_id == e)];
        setPlotsData(data);
        blocksetData('property_block_id', e);
    }

    return (
        <div className='grid grid-cols-2 gap-x-4 mt-8'>
            <div className='p-3 border-black border-2'>
                <h3 className='text-amber-500 text-2xl font-bold'>Create New Block Plots</h3>
                <hr />
                <div className='mt-4 mb-4'>
                    <form onSubmit={onSubmitF}>
                        <div className='w-full'>
                            <InputLabel
                                htmlFor="block_plot_name"
                                value={'Block Plot Name'}
                            />
                            <TextInput
                                id='block_plot_name'
                                className="w-full"
                                isfocused={'true'}
                                placeholder='Enter Block Plot Name'
                                onChange={e => setData('name', e.target.value)}
                            />
                        </div>

                        <div className='w-full'>
                            <InputLabel
                                htmlFor="block"
                                value={'Block Name'}
                            />
                            <SelectInput
                                id='block_plot_name'
                                className="w-full"
                                isfocused={'true'}
                                placeholder='Enter Block Plot Name'
                                onChange={e => setData('property_block_id', e.target.value)}
                            >
                                <option value="">Choose</option>
                                {propertyBlocks.data.map((item, index) => (
                                    <option value={item.id} key={`block_plot_item_${index}`}>{item.name}</option>
                                ))}
                            </SelectInput>
                        </div>
                        <div className='mt-4'>
                            <PrimaryButton>Create Plot</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>

            <div className='border-s-amber-600 border-2 p-3 bg-amber-50'>
                <h3 className='text-amber-500 text-2xl font-bold'>View Property Block Plots</h3>

                <div className='w-full'>
                    <SelectInput
                        className="w-full"
                        onChange={e => filterBlockPlots(e.target.value)}
                    >
                        <option value="">Choose</option>
                        {propertyBlocks.data.map((item, index) => (
                            <option value={item.id} key={`block_plot_item_${index}`}>{item.name}</option>
                        ))}
                    </SelectInput>
                </div>
                <div>
                    <div className='w-full'>

                        {plotsdata.map((item, index) => (
                            <div className='flex flex-row justify-between mt-2 border-b-2 py-1' key={`blocks_${index}`}>
                                <div>
                                    <div>
                                        {editInputID === `input${index}` ? (
                                            <form onSubmit={onUpdatePropertyBlock} id={`${item.id}`}>
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




export default function show({ auth, property, message, propertyBlocks, propertyBlockPlots }) {

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
                                <div className='w-54'>
                                    <img src={`/storage/${property.image_path}`} alt=".." />
                                </div>
                                <ViewData
                                    objects={property}
                                    exclude='id, description, media_files,image_path'
                                />

                                <div className='mt-8 mb-8 p-3 bg-slake-300 shadow shadow-lg' dangerouslySetInnerHTML={{ __html: property.description }}></div>

                            </div>
                        </div>
                        {/* create new blocks */}

                        <div className="p-6 text-gray-900 grid grid-cols-1 border-none">
                            {/* blocks */}
                            <CreateBlockComponent
                                property={property}
                                propertyBlocks={propertyBlocks}
                            />
                            <CreateBlockPlotsComponent
                                property={property}
                                propertyBlocks={propertyBlocks}
                                propertyBlockPlots={propertyBlockPlots}
                            />

                            {/* blocks plots */}

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
