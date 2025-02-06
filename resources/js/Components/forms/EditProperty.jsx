
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { router, useForm } from '@inertiajs/react';
import PrimaryButton from '../PrimaryButton';
import TextAreaInput from '../TextAreaInput';





export function EditProperty({
    object
}) {

    const { data, setData, post, errors, reset, processing, progress } = useForm({
        'name': object.name || '',
        'quantity': object.quantity || '',
        'description': object.description || '',
        _method: "PUT"

    })

    const onFormSubmit = (e) => {
        e.preventDefault();
        post(route('property.update', object.id))
    }


    return (
        <form onSubmit={onFormSubmit} >
            <div className='grid grid-cols-2 gap-2'>
                <div>
                    <InputLabel
                        htmlFor="name"
                        value="Name"
                    />
                    <TextInput
                        id="name"
                        type="text"
                        defaultValue={data.name}
                        name="name"
                        className="mt-1 block w-full"
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        htmlFor="quantity"
                        value="Quantity"
                    />
                    <TextInput
                        id="quantity"
                        type="number"
                        defaultValue={data.quantity}
                        name="quantity"
                        className="mt-1 block w-full"
                        onChange={(e) => setData("quantity", e.target.value)}
                    />
                    <InputError message={errors.description} className="mt-2" />
                </div>
                <div>
                    <InputLabel
                        htmlFor="description"
                        value="Description"
                    />
                    <TextAreaInput
                        id="description"
                        name="description"
                        className="mt-1 block w-full"
                        onChange={(e) => setData("description", e.target.value)}
                    >{data.description}</TextAreaInput>
                    <InputError message={errors.description} className="mt-2" />
                </div>
            </div>

            <div className='mt-4'>
                <PrimaryButton type={'submit'} className='bg-green-500'> Update </PrimaryButton>
            </div>

        </form>
    );
}