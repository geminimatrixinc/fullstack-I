// Create a new Promise
const simplePromise = new Promise((resolve, reject) => {
    const success = true; // Change this to false to see the reject case

    if (success) {
        // Resolve the promise with a message
        resolve('The operation was successful!');
    } else {
        // Reject the promise with an error message
        reject('The operation failed.');
    }
});

// Use the promise
simplePromise
    .then((message) => {
        console.log(message); // Output if promise is resolved
    })
    .catch((error) => {
        console.error(error); // Output if promise is rejected
    });

// async => promises

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((error) => console.error(error))

/// async/await


async function fetchAsnc() {

    try {
    
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();

        console.log(data)
    }
    catch (ex) {
        console.error(ex)
    }

}

fetchAsnc();


