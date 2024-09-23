import React, { useEffect, useState } from 'react';

const FetchDataComponent = () => {
    const [data, setData] = useState([]);

    function fetchData() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data)

                // set state for the re-render
                setData(data)
            })
            .catch(error => console.error('Error fetching data:', error));
    }
    
    const fetchAsync = async () => {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = response.json();

        console.log(data)

        // let react know re-render..
        setData(data)
    }
   
    // component did mount...
    useEffect(fetchData, []);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {
                    data.map(post => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchDataComponent;
