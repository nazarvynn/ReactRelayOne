import React, { PureComponent, Suspense } from 'react'
import PostPreview from './PostPreview'
import graphql from "babel-plugin-relay/macro";
import { loadQuery, usePreloadedQuery } from "react-relay/hooks";
import RelayEnvironment from "../../../RelayEnvironment";

const PhotoQuery = graphql`
    query PostsListPhotoQuery($options: PageQueryOptions) {
        photos(options: $options) {
            data {
                id
                title
                url
                thumbnailUrl
            }
            meta {
                totalCount
            }
        }
    }
`;
const queryReference = loadQuery(RelayEnvironment, PhotoQuery, {
    options: {
        paginate: {
            page: 1,
            limit: 10
        },
        sort: {
            field: "id",
            order: "DESC"
        }
    }
});

export default class PostsList extends PureComponent {
    render() {
        return (
            <Suspense fallback={'Loading...'}>
                {queryReference && <Container queryReference={queryReference} />}
            </Suspense>
        );
    }
}

const Container = ({ queryReference }) => {
    const { photos } = usePreloadedQuery(PhotoQuery, queryReference);
    return (
        <div>
            {photos?.data?.map((photo, index) => (
                <PostPreview key={index} data={photo} />
            ))}
        </div>
    );
};