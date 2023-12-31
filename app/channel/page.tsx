"use client";
// this is the ChannelPage page for the website

{
  /*
***************************************************
***************************************************

with God nothing shall be imposible 

***************************************************
***************************************************
***************************************************

*/
}
import React from "react";
import "./channelpage.css";
import "bootstrap/dist/css/bootstrap.css";
import { Google, Search } from "react-bootstrap-icons";
import Link from "next/link";
import RootLayout from "../layout";
import { Console } from "console";

interface Post {
  title: string;
  body: string;
  // Add other properties as needed
}

///this is for the search filter
const filterFunction = () => {
  const input = document.getElementById("myInput") as HTML;
  const filterValue = input.value.toUpperCase();
  const dropdown = document.getElementById("feed-container");
  const headerContent = dropdown.getElementsByTagName("h2");

  for (let i = 0; i < headerContent.length; i++) {
    const textContent =
      headerContent[i].textContent || headerContent[i].innerText;
    if (textContent.toUpperCase().indexOf(filterValue) > -1) {
      headerContent[i].style.display = "";
    } else {
      headerContent[i].style.display = "none";
    }
  }
};

//this is for api call post
let page = 1;
const content = () => {
  const fetchNewContent = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=7`
      );
      const info = await fetch(".../dummyJson/link.json");
      //    const datame = await info.json();
      const data = await response.json();
      const feedContainer = document.getElementById(
        "feed-container"
      ) as HTMLElement;

      if (data.length > 0) {
        data.forEach((post: Post) => {
          const postContainer = document.createElement("div");
          postContainer.className = "post-container";
          postContainer.innerHTML = `
          <a href={item.link}>
        <h2>${post.title}</h2>
          </a>
          
          <p>${post.body}</p>
           
            `;

          feedContainer.appendChild(postContainer);
          //     document.getElementById("me").innerHTML = datame;
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
}, 1000);

//};

//window.addEventListener("load", page);

//const ChannelPage = async () => {
function ChannelPage() {
  return (
    <>
      <div className="ChannelPagePageBody">
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
        {/* <h3 id="me"></h3>*/}
        <div id="feed-container"></div>
      </div>
    </>
  );
}

export default ChannelPage;
