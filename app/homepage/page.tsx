// this is the home page for the website
import React from "react";
import "../globals.css";

interface User {
  id: number;
  name: string;
}

//const Home = async () => {
function Home() {
  return (
    // const res = fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");
    //console.log(res);
    /*
  let getJoke = () => {
    fetch(res)
      .then((data) => data.json())
      .then((item) => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
      });
  };
  getJoke();
*/
    //const users: User[] = await res.json();

    <>
      <h1>this is the home</h1>
      <div className="jokeContainer"></div>
      <div className="item"></div>
      {/*  <h1>users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.name}></li>
        ))}
      </ul>
        <h2>this is the home page s</h2>*/}
    </>
  );
}

export default Home;
