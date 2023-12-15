// this is the home page for the website
"use client";
import React from "react";
import "../styles/homepage.css";
import "bootstrap/dist/css/bootstrap.css";
import { Search } from "react-bootstrap-icons";

interface Post {
  title: string;
  body: string;
  // Add other properties as needed
}

//const page = () => {
const feedContainer = document.getElementById("feed-container") as HTMLElement;
let page = 1;

const fetchNewContent = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
    );
    const data = await response.json();

    if (data.length > 0) {
      data.forEach((post: Post) => {
        const postContainer = document.createElement("div");
        postContainer.className = "post-container";
        postContainer.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            `;

        feedContainer.appendChild(postContainer);
      });

      page++;
    }
  } catch (error) {
    console.error("Error fetching new content:", error);
  }
};

// Initial fetch
fetchNewContent();
// Infinite scroll
window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    fetchNewContent();
  }
});
//};

//window.addEventListener("load", page);

//const Home = async () => {
function Home() {
  return (
    <>
      <div className="homePageBody">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="search for institution"
            aria-label="search for institution"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              <Search size={35} className="search-icon" />
            </span>
          </div>
        </div>
        <div id="feed-container"></div>
      </div>
    </>
  );
}

export default Home;
