import React from 'react';
import './App.css';
import Search from './search/Search';
import Filter from './filter/Filter';
import BookList from './bookList/BookList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      search: '',
      printType: '',
      bookType: ''
    }
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handleSearchSubmit(e) {
    e.preventDefault()
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=AIzaSyBKLB8_toaqc77eE55ZO_9EiwMdKoK1ze8`;
    if (this.state.bookType) {
      url += `&filter=${this.state.bookType}`
    }
    if (this.state.printType) {
      url += `&printType=${this.state.printType}`
    }
    fetch(url)
      // .then(response => {
      //   if(!response.ok) {
      //     throw new Error('something went wrong')
      //   }
      //   return response.json()
      // })

      .then(response => response.json())
      .then(data => {
        if (data.error) {
          if (data.error.code === 400) {
            alert('print type does not match')
          }
        }
         else {
          this.setState({
            results: data.items
          })
        }
      })
      .catch(err => {
        console.log(err)
        // this.setState({
        //   error: err.message
        // })
      })
  }

  handlePrintTypeFilterChange(option) {
    this.setState({
      printType: option
    })
  }

  handleBookTypeFilterChange(option) {
    this.setState({
      bookType: option
    })
  }

  render() {
    return (
      <div>
        <h1>Google Book Search</h1>
        <Search
          handleSearch={this.handleSearch}
          handleSearchSubmit={(e) => this.handleSearchSubmit(e)}
        />

        <Filter
          printTypeFilter={e => this.handlePrintTypeFilterChange(e)}
          bookTypeFilter={e => this.handleBookTypeFilterChange(e)}
        />

        <BookList
          results={this.state.results}
        />
      </div>
    )
  }
}

export default App;
