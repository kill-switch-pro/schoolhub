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
import { time } from "console";
import { title } from "process";
import Link from "next/link";
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
    icon: Gear,
  },
];

function Home() {
  return (
    <>
      <div className="w-full h-auto flex justify-center relative bg-black">
        <div className="max-w-screen-lg w-full h-full flex relative">
          {/*left side bar for navigation*/}
          <section className="fixed w-72 flex flex-col h-screen">
            <Link href={"/"} className="my-4">
              <Magnet size={25} />
            </Link>
            {Navigation.map((item) => (
              <Link
                className="bg-white/50 flex items-center justify-center space-x-2 rounded-3xl p-4"
                href={`/${item.title.toLowerCase()}`}
                key={item.title}
              >
                <div>
                  <item.icon size={30} />
                </div>
                {item.title !== "schoolhub" && <div>{item.title}</div>}
              </Link>
            ))}
            <button className="rounded m-4 bg-red-700 p-4 text-center">
              post
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
