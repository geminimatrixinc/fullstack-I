import React from 'react';


// Pascal Case -  UpdateStudent  ===> React Functional Component
// Camel Case - updateStudent  ===> Normal JavaScript function

function Todo() {
    const headerStyle = { textAlign: 'center', color: 'darkblue' }
    const inputSytle = {
        backgroundColor: 'darkblue',
        color: 'white',
        padding: '5px 10px',
        border: 'none',
        marginLeft: '5px',
    };

    const listStyle = { listStyleType: 'circle', paddingLeft: '20px' };

    return (
        <div>
            <h1 style={headerStyle}>My To-Do List</h1>
            <div style={{ textAlign: 'center' }}>
                <input
                    type="text"
                    placeholder="Add a new task"
                    style={{ padding: '5px' }}
                />
                <button style={inputSytle}>
                    Add
                </button>
            </div>
            <ul style={listStyle}>
                {/* Task items will be added here */}
            </ul>
        </div>
    );
}

export default Todo;
