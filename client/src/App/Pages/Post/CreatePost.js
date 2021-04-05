import React from 'react'
import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay/hooks";

export default function CreatePost() {
    const [commit, isInFlight] = useMutation(graphql`
        mutation CreatePostCreatePhotoMutation($input: CreatePhotoInput!) {
            createPhoto(input: $input) {
                id
                title
                thumbnailUrl
            }
        }
    `);

    function onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        const formData = new FormData(event.target);
        const title = formData.get('title')
        const url = formData.get('imageUrl')

        commit({
            variables: {
                input: { title, url, thumbnailUrl: url },
            },
            onCompleted(data) {
                console.log(data);
            },
        });
    }

    if (isInFlight) {
        return 'Loading...';
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Description
                    <br />
                    <input type="text" name="title" />
                </label>
                <br />
                <label>
                    Image URL
                    <br />
                    <input type="text" name="imageUrl" />
                </label>
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
