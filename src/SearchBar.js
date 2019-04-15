import React from 'react';

export default class SearchBar extends React.Component {
    state = { searchTerm: '' }

    onFormSubmit = e => {
        e.preventDefault();
        
        this.setState({
            searchTerm: e.target.value
        })
        console.log(e);
        console.log('onFORM submit withing the searchBar component');

        this.props.mySubmit(this.state.searchTerm);



    }

    render() {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit} >
                    <div className="field">
                        <label>User Search</label>
                        <input type="text" onChange={(e) => this.setState({searchTerm: e.target.value})} />
                    </div>
                </form>
            </div>
        );
        }
}