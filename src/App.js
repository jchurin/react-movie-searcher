import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import { Title } from './components/title';
import { SearchForm } from './components/search-form';
import { MoviesList } from './components/movies-list';
import { Detail } from './pages/detail';

class App extends Component {

  state = { usedSearch: false, results: [] };

  _handleResults = (results) => {
    this.setState({ results: results, usedSearch: true });
  }

  _renderResults = () => {
    return this.state.results.length === 0
    ? <p>Sorry! There's no results for this search</p>
    : <MoviesList movies={ this.state.results }/>

  }

  render() {

    const url = new URL(document.location);
    const hasId = url.searchParams.has('id');

    if (hasId) {
      return <Detail id={ url.searchParams.get('id') }/>
    }

    return (
      <div className="App">
        <Title>Search movies</Title>
        <div className='search-form-wrapper'>
          <SearchForm onResults={ this._handleResults }/>
        </div>
        {
          this.state.usedSearch
          ? this._renderResults()
          : <small>Use the form to search a movie</small>
        }
      </div>
    );
  }
}

export default App;
