// Playlist.js
import React, {useCallback, useRef, useEffect} from 'react';

import TrackList from '../TrackList/TrackList';

import './PlayList.module.css'

const Playlist = (props) => {
const onNameChangeRef = useRef(props.onNameChange);

useEffect(() => {
  onNameChangeRef.current = props.onNameChange;
}, [props.onNameChange]);

const handleNameChange = useCallback(
  (event) => {
    onNameChangeRef.current(event.target.value);
  },
  []
);


  return (
    <div className=''>
      <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      <h2>My Playlist</h2>
      <TrackList 
      tracks={props.playlistTracks}
      isRemoval={true}
      onRemove={props.onRemove}/> 
      <button className='Playlist-save' onClick={props.onSave}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;