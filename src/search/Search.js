import React from 'react'

class Search extends React.Component {

    render() {
        return (
            <div className="searchForm">
                <form onSubmit={e => this.props.handleSearchSubmit(e)}>
                    <div className="searchInput">
                        <label htmlFor="search"></label>
                            <input 
                                type="text"
                                placeholder="Search for books"
                                value={this.props.search} // getting this from setState in 'handleSearch'?
                                onChange={this.props.handleSearch}
                            />
                        
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default Search;