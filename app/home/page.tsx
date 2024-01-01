import React from "react";
import "../globals.css";
//import "./home.css";
import {
  Chat,
  Gear,
  Google,
  House,
  Lightbulb,
  Magnet,
  Search,
} from "react-bootstrap-icons";
import { FaBell } from "react-icons/fa";
import Link from "next/link";
import "./home.css";
//import "bootstrap/dist/css/bootstrap.css";

const Navigation = [
  {
    title: "home",
    icon: House,
  },
  {
    title: "learn",
    icon: Lightbulb,
  },
  {
    title: "chat",
    icon: Chat,
  },
  {
    title: "setting",
    icon: FaBell,
  },
];

function Home() {
  return (
    <>
      <div className="bg-black h-screen flex justify-center items-center relative ">
        <div className="max-w-screen-xl text-white w-full h-full flex relative">
          {/*left side bar for navigation*/}
          <section className="fixed w-72 flex flex-col h-screen space-y-4 my-4">
            <Link href={"/"} className="p-2 text-2xl">
              <Magnet />
            </Link>
            {Navigation.map((item) => (
              <Link
                className="hover:bg-white/50 transition duration-200 rounded-3xl flex items-center justify-center space-x-2  p-4"
                href={`/${item.title.toLowerCase()}`}
                key={item.title}
              >
                <div>
                  <item.icon />
                </div>
                {item.title !== "schoolhub" && <div>{item.title}</div>}
              </Link>
            ))}
            <button className="rounded bg-blue-500 m-4 p-2 text-center">
              post
            </button>
          </section>
          {/*
          <main>main body</main>
          <section>left view</section>
           */}
        </div>
      </div>
    </>
  );
}

export default Home;
