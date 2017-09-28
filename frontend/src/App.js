import React, { Component } from 'react';
import './App.css';
import ComicList from './components/ComicList';
import ComicDialog from './components/ComicDialog';
import Searchbar from './components/searchbar';
import Loading from './components/Loading';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loading />
        <Searchbar />
        <ComicList />
				<ComicDialog />
      </div>
    );
  }
}

export default App;
