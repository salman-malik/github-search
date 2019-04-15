import React from 'react';

const RepoList = (props) => {
    const myRepos = props.getRepos;

    return (        
        myRepos && myRepos.slice(0, 5).map(keys => {
            return (
                <div>
                    <table>
                        <tr>
                            <th>Repo Name:</th>
                            <td>{keys.name}</td>
                        </tr>
                        <tr>
                            <th>Count:</th>
                            <td>{keys.stargazers_count}</td>
                        </tr>
                    </table>
                </div>
            )
        })
    )
}

export default RepoList
