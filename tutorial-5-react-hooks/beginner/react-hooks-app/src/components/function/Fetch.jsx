import React, { useState, useEffect } from 'react';


export const Fetch = () => {

    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setData(data))
    }

    // componentDidMount
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h2>Posts</h2>
            <ul>
                {
                    data.map((item) => {
                        return <li key={item.id}>{item.title}</li>
                    })
                }
            </ul>
        </>
    )
}