import { useEffect, useState } from "react";
import "./Home.css";

interface Music {
  id: number;
  title: string;
  artist: string;
  duration: string;
}

const HomePage = () => {
  const [musics, setMusics] = useState<Music[]>(
    JSON.parse(localStorage.getItem("musicsList") || "[]")
  );
  const [newTitle, setNewTitle] = useState<string>("");
  const [newArtist, setNewArtist] = useState<string>("");
  const [newduration, setNewDuration] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("musicsList", JSON.stringify(musics));
  }, [musics]);

  const handleDelete = (id: number) => {
    const newMusics = musics.filter((music) => music.id !== id);
    if (newMusics.length === 0) {
      setMusics([]);
    } else {
      setMusics(newMusics);
    }
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const handleChangeArtist = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewArtist(event.target.value);
  };

  const handleChangeDuration = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewDuration(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const musicsCopy = [...musics];

    const id = new Date().getTime();
    const title = newTitle;
    const artist = newArtist;
    const duration = newduration;
    const newMusic = {
      id,
      title,
      artist,
      duration,
    } as Music;

    musicsCopy.push(newMusic);
    setMusics(musicsCopy);
    setNewTitle("");
    setNewArtist("");
    setNewDuration("");
  };

  return (
    <div className="songs-container">
      <div className="songs">
        <h2>Lists of songs</h2>
        <div className="musics_container">
          {musics.length !== 0 ? (
            musics.map((music) => {
              const { id, title, artist, duration } = music;
              return (
                <div className="music" key={id}>
                  <h3 className="music_title">
                    Title: {title}
                    <button className="delete" onClick={() => handleDelete(id)}>
                      X
                    </button>
                  </h3>
                  <p className="music_artist">Artist: {artist}</p>
                  <p className="music_duration">Duration: {duration}</p>
                </div>
              );
            })
          ) : (
            <h3>No musics founds</h3>
          )}
        </div>
      </div>
      <div className="title">
        <h2>Add a new music</h2>
      </div>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTitle}
          placeholder="Enter title of music"
          onChange={handleChangeTitle}
          required
        />
        <input
          type="text"
          value={newArtist}
          placeholder="Enter artist "
          onChange={handleChangeArtist}
          required
        />
        <input
          type="text"
          value={newduration}
          placeholder="Enter song duration"
          onChange={handleChangeDuration}
          required
        />
        <button type="submit" className="add">
          Add music
        </button>
      </form>
    </div>
  );
};

export default HomePage;
