import React, { Component } from 'react';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({ posts: data }))
            .catch(error => console.error('Error fetching posts:', error));
    }

    render() {
        return (
            <div>
                <h2>Posts</h2>
                <ul>
                    {this.state.posts.map(post => (
                        <li key={post.id}>
                            <strong>{post.title}</strong>: {post.body}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Posts;
