import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import PrimaryButton from '../PrimaryButton';
import SelectInput from '../SelectInput';
import TextAreaInput from '../TextAreaInput';

export function CreateRealtorReferralForm({ setData, data, errors, realtor }) {




    // Define dynamic form structure with various field types
    const prepareForm = [
        [
            {
                name: `sponsor_code`,
                label: `Sponsor Code: ${realtor.fullname}`,
                type: 'text',
                params: { 'placeholder': 'Sponsor Code', 'defaultValue': realtor.sponsor_code, 'readOnly': true }
            },
        ],
        [
            { name: 'first_name', label: 'First Name', type: 'text', params: { 'placeholder': 'FirstName' } },
            { name: 'last_name', label: 'Last Name', type: 'text', params: { 'placeholder': 'LastName' } },

        ],
        [
            {
                name: 'account_type',
                label: 'Account Type',
                type: 'select',
                params: { required: true },
                options: [
                    { value: null, label: '...' },
                    { value: 'savings', label: 'Savings' },
                    { value: 'current', label: 'Current' }
                ]
            },
            { name: 'account_number', label: 'Account Number', type: 'text', params: { 'placeholder': 'AccountNumber' } },
            { name: 'account_name', label: 'Account Name', type: 'text', params: { 'placeholder': 'AccountName' } },
            { name: 'bank_name', label: 'Bank Name', type: 'text', params: { 'placeholder': 'BankName' } },

        ],

        [

            { name: 'address', label: 'Address', type: 'text', params: { 'placeholder': 'Address' } },
            { name: 'country', label: 'Country', type: 'text', params: { 'placeholder': 'Country' } },

        ],
        // [
        //     { name: 'bio', label: 'Biography', type: 'textarea' }
        // ],
        // [
        //     {
        //         name: 'gender',
        //         label: 'Gender',
        //         type: 'select',
        //         options: [
        //             { value: '', label: 'Select Gender' },
        //             { value: 'male', label: 'Male' },
        //             { value: 'female', label: 'Female' }
        //         ]
        //     }
        // ],

    ];

    const changePicture = (file) => {
        if (file) {
            const reader = new FileReader(); // Create a FileReader object
            reader.onload = function (e) {
                const imgElement = document.getElementById('imagePreview');
                imgElement.src = e.target.result; // Set image source to preview
                imgElement.style.display = 'block'; // Show the image
            };
            reader.readAsDataURL(file); // Convert file to base64 string
        }

    }

    return (
        <div >

            <div className='mb-4'>
                <InputLabel
                    htmlFor="image"
                    value="Choose Picture"
                />
                <TextInput
                    id="image"
                    type="file"
                    name="image"
                    className="mt-1 block w-full"
                    onChange={(e) => {
                        setData("image", e.target.files[0]);
                        changePicture(e.target.files[0]);
                    }}
                />
                <InputError message={errors.image} className="mt-2" />
            </div>

            {prepareForm.map((row, rowIndex) => (
                <div key={rowIndex} className={`grid grid-cols-${row.length} gap-4 mb-4`} >
                    {row.map((field, fieldIndex) => (
                        <div key={fieldIndex} className="flex flex-col">
                            <InputLabel htmlFor={field.name} value={field.label} />

                            {field.type === 'text' && (
                                <TextInput
                                    id={field.name}
                                    type="text"
                                    name={field.name}
                                    value={data[field.name]}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData(field.name, e.target.value)}
                                    {...field.params}
                                />
                            )}

                            {field.type === 'textarea' && (
                                <TextAreaInput
                                    id={field.name}
                                    name={field.name}
                                    value={data[field.name]}
                                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    onChange={(e) => setData(field.name, e.target.value)}
                                    {...field.params}
                                ></TextAreaInput>
                            )}

                            {field.type === 'select' && (
                                <SelectInput
                                    id={field.name}
                                    name={field.name}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData(field.name, e.target.value)}
                                    {...field.params}
                                >
                                    {field.options.map((option, idx) => (
                                        <option key={idx} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </SelectInput>
                            )}

                            {field.type === 'checkbox' && (
                                <div className="flex gap-2 mt-2">
                                    {field.options.map((option, idx) => (
                                        <label key={idx} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                value={option.value}
                                                checked={data.skills.includes(option.value)}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    setData('skills', data.skills.includes(value)
                                                        ? data.skills.filter((s) => s !== value)
                                                        : [...data.skills, value]
                                                    );
                                                }}
                                            />
                                            <span>{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            )}

                            {field.type === 'radio' && (
                                <div className="flex gap-2 mt-2">
                                    {field.options.map((option, idx) => (
                                        <label key={idx} className="flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                name={field.name}
                                                value={option.value}
                                                checked={data.agree === option.value}
                                                onChange={(e) => setData(field.name, e.target.value)}
                                            />
                                            <span>{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            )}

                            <InputError message={errors[field.name]} className="mt-2" />
                        </div>
                    ))}
                </div>
            ))}


        </div>
    );
}
