import React from "react";
import "../globals.css";
import "./home.css";
import {
  Bag,
  BagCheck,
  BagX,
  Chat,
  Dot,
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
import Navigation from "../navigation/page";

function Home() {
  return (
    <>
      <div className="bg-black h-full flex justify-center items-center relative ">
        <div className="max-w-screen-xl w-full h-full flex relative">
          {/* navigation */}
          <Navigation />

          <main className="ml-[275px] flex w-[600px] min-h-screen h-full flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
            <h1 className="text-xl font-bold p-2">Home</h1>

            <div className=" px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-t-[0.5px] border-gray-600 relative"></div>

            <div className="rounded-full bg-slate-400 w-10 h-10 flex-none"></div>
            <div className="flex flex-col w-full h-full">
              <input
                type="text"
                className="w-full text-2xl h-full bg-transparent placeholder-gray-600 border-gray-600 p-4  outline-none border-none"
                placeholder="say what you feel..."
              />{" "}
              <div className="w-full justify-between items-center flex ">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className="rounded-full font-bold bg-primary text-lg text-center hover:bg-opacity-90 px-4 py-2 w-full transition duration-200 ">
                    update
                  </button>
                </div>
              </div>
            </div>

            <div className=" flex flex-col">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="border-t-[0.5px] px-4 border-b-[0.5px] flex space-x-4"
                >
                  <div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full" />
                  </div>
                  {/* post container */}
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-1">
                      <div>web dev</div>
                      <div>@web</div>
                      <div>
                        <Dot />
                      </div>
                      <div>1 hr ago</div>
                    </div>
                    {/* media (comment and image) */}
                    <div className="text-white text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Molestiae quae facilis dolorum? Pariatur optio, provident
                      ducimus est aliquam dolore nesciunt quaerat beatae dolorem
                      vero? Excepturi ipsa voluptatum enim ipsum fuga! Lorem
                      ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>

                    <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl"></div>
                    {/*activity icon , like, comment , repost, share */}
                    <div className="flex items-center space-x-2 w-full">
                      <div>C</div>
                      <div>L</div>
                      <div>R</div>
                      <div>sh</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
