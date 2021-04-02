import React from 'react'

export default class CreatePost extends React.PureComponent {
    state = {
        description: '',
        imageUrl: ''
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>
                        Description
                        <br />
                        <input type="text" name="description" onChange={event => this.handleChange(event)} />
                    </label>
                    <br />
                    <label>
                        Image URL
                        <br />
                        <input type="text" name="imageUrl" onChange={event => this.handleChange(event)} />
                    </label>
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

    handleChange = (event) => {
        const target = event.target;
        this.setState({[target.name]: target.value});
    };

    onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const {description, imageUrl} = this.state;
        console.log(description, imageUrl);
    }
}