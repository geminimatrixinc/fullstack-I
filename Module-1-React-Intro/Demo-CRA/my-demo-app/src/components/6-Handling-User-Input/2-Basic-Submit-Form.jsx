import React from 'react';

const BasicSubmitForm = () => {
 
    const handleChange = (event) => {
        console.log(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        alert(`Form submitted with value:`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
            <p>Current Value: </p>
        </form>
    );
};

export default BasicSubmitForm;
