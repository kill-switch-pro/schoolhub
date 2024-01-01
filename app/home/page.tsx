import React from "react";
import "../globals.css";
//import "./home.css";
import {
  Bag,
  BagCheck,
  BagX,
  Chat,
  Gear,
  Google,
  Hash,
  House,
  Lightbulb,
  Magnet,
  Search,
  SearchHeart,
  ThreeDots,
} from "react-bootstrap-icons";
import { FaBell } from "react-icons/fa";
import Link from "next/link";
import "./home.css";
import Navigation from "../navigation/page";
//import "bootstrap/dist/css/bootstrap.css";
/*
const Navigation = [
  {
    title: "schoolhub",
    icon: BagCheck,
  },
  {
    title: "home",
    icon: House,
  },
  {
    title: "search",
    icon: Search,
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
  {
    title: "explore",
    icon: Hash,
  },
];
*/
function Home() {
  return (
    <>
      <div className="bg-black h-screen flex justify-center items-center relative ">
        <div className="max-w-screen-xl text-white w-full h-full flex relative">
          {/*left side bar for navigation*/}
          <Navigation />

          <main className="ml-[275px]  p-6 flex w-[600px] min-h-screen  flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
            <h1 className="text-xl font-bold my-4">Home</h1>
            <div className="h-32 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-t-[0.5px] border-gray-600 relative">
              <div className="rounded-full bg-slate-400 w-10 h-10 flex-none"></div>
              <div className="flex flex-col w-full h-full">
                <input
                  type="text"
                  className="w-full h-full bg-transparent border-gray-600 p-4  outline-none border-none"
                  placeholder="say what you feel..."
                />
              </div>
              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className="rounded-full font-bold bg-primary text-lg text-center hover:bg-opacity-90 px-4 py-2 w-full transition duration-200 ">
                    update
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
