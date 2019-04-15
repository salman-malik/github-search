import React from 'react';
import SearchBar from './SearchBar';
import github from './api/github'
import RepoList from './RepoList';

export default class App extends React.Component {
    state = { repos: null, user: null }
    onSearchSubmit = async (term) => {
        console.log('You searched for: ' + term);
        const data = await github.getRepos(term);
        data.sort((a, b) => parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count))
        
        this.setState({ repos: data, user: term })
    }
    

    render() {
        return(
            <div className="ui container" style={{ marginTop:'10px' }}>
                <SearchBar mySubmit={this.onSearchSubmit}/>
                {this.state.user && 
                    <div style={{ alignContent: 'center'}}>
                        <img alt="" className="ui avatar image" src={this.state.repos[0].owner.avatar_url}></img> <strong>{this.state.user}</strong> 
                    </div>}
                <RepoList getRepos={this.state.repos} />
            </div>
        );
    }
}