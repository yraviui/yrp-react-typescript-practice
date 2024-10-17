import React, { useState, ChangeEvent } from 'react';
import { SelectBox } from './selectcomponents';
import type { SelectOption } from './selectcomponents';

const notifications = ['Notification', 'Notification2', 'Notification3'];

const M23 = () => {
    const options: SelectOption[] = [
        { label: 'Select Notification', value: '' },
        ...notifications.map((o) => ({ label: o, value: o })),
    ];
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <h1>Select Box</h1>
            <SelectBox
                options={options}
                value={value}
                onChange={onChange}
                label="Notification:"
            />
            {value && <p>Selected value: {value}</p>}
        </div>
    );
}

export default M23