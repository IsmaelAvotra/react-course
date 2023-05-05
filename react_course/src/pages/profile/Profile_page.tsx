import { useState, useContext } from "react";
import "./Profile.css";
import { AppContext } from "../../App";

const ProfilePage = () => {
  const [newUsername, setNewUsername] = useState("");
  const { username, setUsername } = useContext(AppContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewUsername(e.target.value);
  };

  const handleSubmit = () => {
    if (newUsername !== "") {
      setUsername(newUsername);
      setNewUsername("");
    }
  };

  return (
    <div className="profile">
      <h2>Profile page for {username}</h2>
      <div className="edit-username">
        <input
          type="text"
          placeholder="Enter a new username here ..."
          value={newUsername}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Change username</button>
      </div>
    </div>
  );
};

export default ProfilePage;
