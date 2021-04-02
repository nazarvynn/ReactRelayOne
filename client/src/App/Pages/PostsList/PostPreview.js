import React from 'react'
import PropTypes from 'prop-types';

export default class PostPreview extends React.PureComponent {
    static propTypes = {
        data: PropTypes.shape({
            id: PropTypes.number,
            description: PropTypes.string,
            imageUrl: PropTypes.string
        })
    };

    render() {
        const { id, description, imageUrl } = this.props.data;
        return (
            <div className="post">
                <h1>{ description }</h1>
                <img src={ imageUrl } width="100" alt={ description } />
                <br />
                <button onClick={event => this.onDelete(event, id)}>Delete</button>
            </div>
        );
    }

    onDelete = (event, id) => {
        console.log('delete', id);
    }
}