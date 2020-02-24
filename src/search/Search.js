import React from 'react'

class Search extends React.Component {
    constructor(ptops) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const searchTerm = this.state;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`

        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error('something went wrong')
                }
                return response.json()
            })
            .then(data => {
                this.setState({
                    searchTerm: ''
                })
            })
            .catch(err => {
                this.setState({
                    error: err.message
                })
            })
    }

    searchChanged(search) {
        this.setState({
            search
        })
    }

    render() {
        return (
            <div className="searchForm">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div className="searchInput">
                        <label htmlFor="search"></label>
                        <input 
                            type="search"
                            placeholder="Search for books"
                            value={this.state.searchTerm}
                            onChange={e => this.searchChanged(e.target.value)}
                        />
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default Search;