import React from 'react';
import './App.css';
import Search from './search/Search';
import Filter from './filter/Filter';
import BookList from './bookList/BookList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      allResults: [],
      displayResults: []
    }
  }
// api key AIzaSyBKLB8_toaqc77eE55ZO_9EiwMdKoK1ze8
  getSearchResults(search) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`;

    const options = {
      method: 'GET',
      headers: {
        'key': 'AIzaSyBKLB8_toaqc77eE55ZO_9EiwMdKoK1ze8'
      }
    }

    fetch(url, options)
      .then(response => {
        if(!response.ok) {
          throw new Error('something went wrong')
        }
        return response.json()
      })
      .then(response => response.json())
      .then(data => {  
        this.setState({
          allResults: data,
          displayResults: data
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  filterResults(filterParam) {
    const newResults = this.state.allResults.filter(value => value.name === filterParam)

    this.setState({
      displayResults: newResults
    })
  }

  render() {
    return (
      <div>
        <h1>Google Book Search</h1>
        <Search />
        <Filter filterResults={this.filterResults()}/>
        <BookList displayResults={this.state.displayResults}/>
      </div>
    )
  }
}

export default App;
