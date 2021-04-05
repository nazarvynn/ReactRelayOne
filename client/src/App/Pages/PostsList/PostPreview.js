import React from 'react'
import graphql from "babel-plugin-relay/macro";
import {useMutation} from "react-relay/hooks";

export default function PostPreview(props) {
    // Prop types
    // Store
    // static propTypes = {
    //     data: PropTypes.shape({
    //         id: PropTypes.string,
    //         title: PropTypes.string,
    //         url: PropTypes.string,
    //         thumbnailUrl: PropTypes.string
    //     })
    // };

    const [commit, isInFlight] = useMutation(graphql`
        mutation PostPreviewDeletePhotoMutation($id: ID!) {
            deletePhoto(id: $id)
        }
    `);

    function onDelete(event, id) {
        commit({
            variables: { id },
            onCompleted(data) {
                console.log(data);
            },
        });
    }

    const { id, title, thumbnailUrl } = props.data;

    // if (isInFlight) {
    //         return 'Loading...';
    // }

    return (
        <div className="post">
            <h1>{title}</h1>
            <img src={thumbnailUrl} width="100" alt={title}/>
            <br/>
            <button onClick={event => onDelete(event, id)}>Delete</button>
        </div>
    );
}
