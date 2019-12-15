import React, { useState } from "react";
import "./App.css";
import DisplayEmployee from "./Components/DisplayEmployee";
import axios from "axios";
import ShowImage from "./Components/ShowImage";

function App() {
  const [names, setNames] = useState([
    "Suresh",
    "Munnangi",
    "Kruthi",
    "Agastya"
  ]);

  const [users, setUsers] = useState([]);
  const [gitUser, setGitUser] = useState();

  const getUsers = async e => {
    console.log("gitUser : " + e.target.value);
    const gitUser = e.target.value;
    const api_url =
      gitUser != null
        ? "https://api.github.com/users/" + gitUser
        : "https://api.github.com/users";

    console.log("url : " + api_url);
    if (api_url.length >= 5) {
      await axios.get(api_url).then(res => {
        const res_data = res.data;
        console.log(res_data);
        setUsers(res_data);
      });
    }
  };

  return (
    <div className='App'>
      <button onClick={getUsers}> axios</button>
      <input type='text' placeholder='enter the value' onChange={getUsers} />

      <br />
      {names.map(name => (
        <h3>
          <DisplayEmployee name1={name} />
        </h3>
      ))}

      <br />
      <h3>
        {console.log("length is :: " + users.length)}
        <ShowImage imagelocation={users.avatar_url} />
      </h3>
    </div>
  );
}

export default App;
