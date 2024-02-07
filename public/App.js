import './App.css';
import React from 'react';
import SearchBar from  './components/SearchBar/SearchBar.js';
import SearchResults from './components/SearchResults/SearchResults.js';
import Playlist from './components/PlayList/PlayList.js';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <p>Jammming  is a web application that allows users to create and share playlists of music with friends.</p>
      <p>Welcome to the app! This is a simple example of how you can structure your code.</p>
      <h1>Jammming App</h1>
        <SearchBar />
        <SearchResults />
        <Playlist />
    
    </div>
    
  );
}

export default App;
