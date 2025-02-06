
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { router, useForm } from '@inertiajs/react';
import PrimaryButton from '../PrimaryButton';





export function EditClient({
    object
}) {

    const { data, setData, post, errors, reset, processing, progress } = useForm({
        'first_name': object.first_name || '',
        'last_name': object.last_name || '',
        'phone': object.phone || '',
        _method: "PUT"

    })

    const onFormSubmit = (e) => {
        e.preventDefault();
        post(route('client.update', object.id))
    }


    return (
        <form onSubmit={onFormSubmit} >
            <div>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <InputLabel
                            htmlFor="firstname"
                            value="FirstName"
                        />
                        <TextInput
                            id="firstname"
                            type="text"
                            defaultValue={data.first_name}
                            name="first_name"
                            className="mt-1 block w-full"
                            onChange={(e) => setData("first_name", e.target.value)}
                        />
                        <InputError message={errors.first_name} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="lastname"
                            value="LastName"
                        />
                        <TextInput
                            id="lastname"
                            type="text"
                            defaultValue={data.last_name}
                            name="last_name"
                            className="mt-1 block w-full"
                            onChange={(e) => setData("last_name", e.target.value)}
                        />
                        <InputError message={errors.last_name} className="mt-2" />
                    </div>
                </div>

                <div className='grid grid-cols-1'>
                    <div>
                        <InputLabel
                            htmlFor="phone"
                            value="Phone"
                        />
                        <TextInput
                            id="phone"
                            type="text"
                            defaultValue={data.first_name}
                            name="phone"
                            className="mt-1 block w-full"
                            onChange={(e) => setData("phone", e.target.value)}
                        />
                        <InputError message={errors.phone} className="mt-2" />
                    </div>


                </div>

                <div className='mt-4'>
                    <PrimaryButton type={'submit'} className='bg-green-500'> Update </PrimaryButton>
                </div>
            </div>
        </form>
    );
}