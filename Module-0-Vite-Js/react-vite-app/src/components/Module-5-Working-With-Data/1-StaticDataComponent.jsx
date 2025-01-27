import React from 'react';

const StaticDataComponent = () => {

    // Static (mock) data
    const data = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' },
        { id: 4, name: 'Mike'}
    ];

    return (
        <div>
            <h1>Static Data</h1>
            <ul>
                {
                    data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default StaticDataComponent;
