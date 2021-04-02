import React from 'react'
import PostPreview from './PostPreview'

export default class PostsList extends React.PureComponent {
    render() {
        const posts = [
            {
                id: 1,
                description: 'Jedi 1',
                imageUrl: 'https://i.pinimg.com/236x/02/06/a2/0206a2e0ae3053d7c9fe1c4650138216.jpg'
            },
            {
                id: 2,
                description: 'Jedi 2',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3P0SMtq-heuvlT0r4CxWclGW2CQ9okkSbMRMPUFLnCaar7y9SJYPPN6HaR5As5OOTMw'
            },
            {
                id: 3,
                description: 'Jedi 3',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3xllSu90xZJt0eShm3lh0UpDxxzD9ljOrzPhu85tYnSU5P-8NQd0BpU50o1BKdDbSyc'
            }
        ]

        return (
            <div>
                {posts.map((post, index) => (
                    <PostPreview key={index} data={post} />
                ))}
            </div>
        );
    }
}