const prepareForm = [
    [
        { name: 'first_name', label: 'First Name', type: 'text' },
        { name: 'last_name', label: 'Last Name', type: 'text' }
    ],
    [
        { name: 'bio', label: 'Biography', type: 'textarea' }
    ],
    [
        {
            name: 'gender',
            label: 'Gender',
            type: 'select',
            options: [
                { value: '', label: 'Select Gender' },
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' }
            ]
        }
    ],
    [
        {
            name: 'skills',
            label: 'Skills',
            type: 'checkbox',
            options: [
                { value: 'html', label: 'HTML' },
                { value: 'css', label: 'CSS' },
                { value: 'javascript', label: 'JavaScript' }
            ]
        }
    ],
    [
        {
            name: 'agree',
            label: 'Agree to Terms',
            type: 'radio',
            options: [
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' }
            ]
        }
    ]
];