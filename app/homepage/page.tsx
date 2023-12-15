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

// YourComponent.js
import { useState } from "react";

const filterFunction = () => {
  const input = document.getElementById("myInput") as HTML;
  const filterValue = input.value.toUpperCase();
  const dropdown = document.getElementById("feed-container");
  const links = dropdown.getElementsByTagName("h2");

  for (let i = 0; i < links.length; i++) {
    const textContent = links[i].textContent || links[i].innerText;
    if (textContent.toUpperCase().indexOf(filterValue) > -1) {
      links[i].style.display = "";
    } else {
      links[i].style.display = "none";
    }
  }
};

//const page = () => {
let page = 1;
const content = () => {
  const fetchNewContent = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
      );
      const data = await response.json();
      const feedContainer = document.getElementById(
        "feed-container"
      ) as HTMLElement;

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
};

const timeoutId = setTimeout(() => {
  content();
}, 1500);

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
            id="myInput"
            className="form-control"
            placeholder="search for institution"
            aria-label="search for institution"
            aria-describedby="basic-addon2"
            onKeyUp={filterFunction}
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
