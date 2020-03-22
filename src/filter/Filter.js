import React from 'react'

class Filter extends React.Component {
    render () {
        
        return (
            <div className='filters'>
                <div className='printTypeFilter'>
                    <form>
                        <label>Print Type:</label>
                        <select onChange={(e) => this.props.printTypeFilter(e.target.value)}>
                            <option value={''}>All</option>
                            <option value={'books'}>Books</option>
                            <option value={'magazines'}>Magazines</option>
                        </select>
                    </form>
                </div>
                <div className='categoryFilter'>
                    <form>
                        <label>Book Type:</label>
                        <select onChange={(e) => this.props.bookTypeFilter(e.target.value)}>
                            <option value={''}>No Filter</option>
                            <option value={'free-ebooks'}>Free e-Books</option>
                            <option value={'paid-ebooks'}>Paid e-Books</option>
                            <option value={'ebooks'}>All e-Books</option>
                        </select>
                    </form>
                </div>
            </div>
        )
    }
}

export default Filter