
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { router, useForm } from '@inertiajs/react';
import PrimaryButton from '../PrimaryButton';
import { useState } from 'react';
import { ViewData } from '../ViewData';





export function CreateSalesForm({
    pageData
}) {

    const { data, setData, post, errors, reset, processing, progress } = useForm({
        property_id: '',
        client_id: '',
        quantity: '',
        amount: '',
        sponsor: '',
        initial_amount_paid: ''
    })
    const [sponsor, setSponsor] = useState({
        'first_generation': {},
        'second_generation': {},
        'third_generation': {},
    });


    const onFormSubmit = (e) => {
        e.preventDefault();
        post(route('realtors.update', object.id))
    }

    const fetchSponsor = async (code) => {
        const url = route('propertysales.sponsor', code);

        const request = await fetch(url);
        const response = await request.json();
        setSponsor(response);
    }

    return (
        <div>
            <form onSubmit={onFormSubmit} >
                <div>
                    <div className='grid grid-cols-4 gap-2'>
                        <div>
                            <InputLabel
                                htmlFor="property_listing"
                                value="Choose Property"
                            />
                            <SelectInput
                                id="property_listing"
                                className="mt-1 block w-full"
                                onChange={(e) => setData("property_id", e.target.value)}
                            >
                                <option value="">Select Property</option>
                                {pageData.propertities.data.map((item) => (
                                    <option value="" key={`property_${item.id}`}>{item.name}</option>
                                ))}
                            </SelectInput>
                            <InputError message={errors.property_id} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="client_listing"
                                value="Choose Client"
                            />
                            <SelectInput
                                id="client_listing"
                                className="mt-1 block w-full"
                                onChange={(e) => setData("client_id", e.target.value)}
                            >
                                <option value="">Select Clients</option>
                                {pageData.clients.data.map((item) => (
                                    <option value="" key={`client_${item.id}`}>{item.fullname}</option>
                                ))}
                            </SelectInput>
                            <InputError message={errors.client_id} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="amount"
                                value="Amount"
                            />
                            <TextInput
                                id="amount"
                                type="number"
                                defaultValue={data.last_name}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("amount", e.target.value)}
                            />
                            <InputError message={errors.last_name} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="initial_amount_paid"
                                value="Initial Amount"
                            />
                            <TextInput
                                id="initial_amount_paid"
                                type="number"
                                defaultValue={data.last_name}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("initial_amount_paid", e.target.value)}
                            />
                            <InputError message={errors.last_name} className="mt-2" />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 mt-4 gap-2'>
                        <div>
                            <InputLabel
                                htmlFor="sponsor"
                                value="Sponsor Code"
                            />
                            <TextInput
                                id="sponsor"
                                type="text"
                                placeholder='Sponsor Code'
                                onKeyUp={e => fetchSponsor(e.target.value)}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("sponsor", e.target.value)}
                            />
                            <InputError message={errors.sponsor} className="mt-2" />
                        </div>
                    </div>

                    <div className='mt-4'>
                        <PrimaryButton type={'submit'} className='bg-green-500'> Create </PrimaryButton>
                    </div>
                </div>

            </form>
            <div className='w-full grid grid-cols-3 mt-4'>
                <div>
                    <h3>First Generation</h3>
                    <ViewData
                        objects={sponsor.first_generation}
                        exclude='id, created_at, updated_at, first_name, last_name'
                    />
                </div>
                <div>
                    <h3>Second Generation</h3>
                    <ViewData
                        objects={sponsor.second_generation}
                        exclude='id, created_at, updated_at, first_name, last_name'
                    />
                </div>
                <div>
                    <h3>Third Generation</h3>
                    <ViewData
                        objects={sponsor.third_generation}
                        exclude='id, created_at, updated_at, first_name, last_name'
                    />
                </div>
            </div>
        </div>
    );
}