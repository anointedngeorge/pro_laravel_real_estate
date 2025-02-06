
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import PrimaryButton from '../PrimaryButton';
import TextAreaInput from '../TextAreaInput';





export function Editbranch({
    object
}) {

    const { data, setData, post, errors, reset, processing, progress } = useForm({
        'office': object.office || '',
        'phone': object.phone || '',
        'manager': object.manager || '',
        'description': object.description || '',
        _method: "PUT"

    })

    const onFormSubmit = (e) => {
        e.preventDefault();
        post(route('branch.update', object.id))
    }


    return (
        <form onSubmit={onFormSubmit} >
            <div>
                {/* row 1*/}
                <div className='grid grid-cols-1'>
                    <div>
                        <InputLabel
                            htmlFor="office"
                            value="Office"
                        />
                        <TextInput
                            id="office"
                            type="text"
                            defaultValue={data.office}
                            name="office"
                            className="mt-1 block w-full"
                            onChange={(e) => setData("office", e.target.value)}
                        />
                        <InputError message={errors.office} className="mt-2" />
                    </div>
                </div>

                {/* row 2*/}
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <InputLabel
                            htmlFor="manager"
                            value="Manager"
                        />
                        <TextInput
                            id="manager"
                            type="text"
                            defaultValue={data.manager}
                            name="manager"
                            className="mt-1 block w-full"
                            onChange={(e) => setData("manager", e.target.value)}
                        />
                        <InputError message={errors.office} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="phone"
                            value="Phone"
                        />
                        <TextInput
                            id="phone"
                            type="text"
                            defaultValue={data.phone}
                            name="phone"
                            className="mt-1 block w-full"
                            onChange={(e) => setData("phone", e.target.value)}
                        />
                        <InputError message={errors.description} className="mt-2" />
                    </div>
                </div>
                {/* row 2*/}
                <div className='grid grid-cols-1'>
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



                <div className='mt-4'>
                    <PrimaryButton type={'submit'} className='bg-green-500'> Update </PrimaryButton>
                </div>
            </div>
        </form>
    );
}