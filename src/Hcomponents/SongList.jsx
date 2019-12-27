import React, {Component, useEffect, useState} from 'react';
import uuid from 'uuid/v1';
import NewSongForm from "./NewSongForm";

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Fire song', id: 1 },
        { title: 'Water song', id: 2 },
        { title: 'Air song', id: 3 },
        { title: 'Earth song', id: 4 },
    ]);
    const [age, setAge] = useState(20);
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid()}])
    };

    useEffect(() => {
        console.log("Used song Run!")
    }, [songs]);

    useEffect(() => {
        console.log("Used age Run!")
    }, [age]);

        return (
            <div className="song-list">
                <ul>
                    {songs.map(song => {
                        return (<li key={song.id}>{song.title}</li>)
                    })}
                </ul>
                <NewSongForm addSong={addSong} />
                <button onClick={() => setAge(age + 1)}>Add 1 to age! {age}</button>
            </div>
        );
};

export default SongList;