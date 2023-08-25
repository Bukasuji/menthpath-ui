"use client";
import React, { useState } from "react";
import { GrCopy } from "react-icons/gr";
import { RxOpenInNewWindow } from "react-icons/rx";
import { BsSun, BsCalendarWeek } from "react-icons/bs";
import { AiOutlineBell, AiOutlineRedo, AiOutlineSend } from "react-icons/ai";

const TrendsComponent = () => {
  return (
    <div className="">
      <header className="text-lg font-bold py-4 mb-2">
        Sure, here are the catchy bullet points for becoming a Frontend Engineer
        with trendy emojis:
      </header>
      <main>
        <ul className="list-none space-y-2 ml-0">
          {[
            "💡 Unleash your creativity: Design stunning user interfaces.",
            "💻 Impact user experience directly and make a difference.",
            "🚀 Stay ahead with evolving technologies.",
            "📱 Embrace progressive web apps for cutting-edge experiences.",
            "🏗️ Master JAMstack architecture for faster development.",
            "⚡️ Harness the power of WebAssembly for high-performance web apps.",
            "🎉 Join the exciting world of #FrontendEngineering! 🌈 #TechTrends",
          ].map((listItem, index) => (
            <li key={index} className="text-base leading-relaxed">
              {listItem}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

const RecomendationsComponent = () => {
  return <div className="">RecomendationsComponent stuff</div>;
};

const ResourcesComponent = () => {
  return <div>ResourcesComponent stuff</div>;
};

const ChatSection = () => {
  const [activeComponent, setActiveComponent] = useState("trends");

  return (
    <div className="w-full bg-white text-black p-4 min-h-screen">
      <header className="flex justify-between items-center text-2xl py-2">
        <h1 className="uppercase text-[#020659] font-bold">AI Mentor</h1>
        <div className="flex items-center space-x-2 cursor-pointer">
          <BsSun />
          <AiOutlineBell />
          <BsCalendarWeek />
        </div>
      </header>

      <div className=" ">
        <header className="flex justify-between border-b-2 border-[#D9D6D1] px-4 py-2 items-center">
          <div className="flex p-1 rounded-md bg-[#D9D6D1]">
            {["resources", "recommendations", "trends"].map((header) => (
              <div
                key={header}
                className={`cursor-pointer rounded-md px-2 ${
                  activeComponent === header ? "bg-white" : ""
                }`}
                onClick={() => setActiveComponent(header)}
              >
                {header}
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <GrCopy className="mr-2" />
            copy points
          </div>
        </header>
        <section className="h-[calc(100vh-302px)]">
          {activeComponent === "trends" && <TrendsComponent />}
          {activeComponent === "recommendations" && <RecomendationsComponent />}
          {activeComponent === "resources" && <ResourcesComponent />}
        </section>
      </div>

      <p className="text-xs mt-2">
        Note: But that&#39;s not all! The power of WebAssembly ⚡️ is
        revolutionizing frontend engineering, offering incredible performance
        gains. 🚀 It's an exciting time to be part of this dynamic field!
      </p>

      <div className="py-2">
      <p className="bg-[#0206592B] px-4 py-2 rounded-[14px] w-full flex justify-between items-center">
          I am stuck in my 9 to 5 job, help me&rsquo;&rsquo;!!
       <div className="flex items-center text-base [&>svg]:mr-2">
         <RxOpenInNewWindow />
          View
       </div>
     </p>

      </div>

      <div className="w-full text-sm my-2 flex items-center justify-center">
        Regenerate response
        <AiOutlineRedo className="ml-2 text-xl" />
      </div>

      <div className="flex items-center bg-[#D9D6D1] rounded-[14px]">
        <input
          type="text"
          name=""
          id=""
          className="bg-inherit rounded-[14px] w-full focus:outline-none 
          outline-none px-4 py-2"
        />
        <i className="cursor-pointer text-lg px-3">
          <AiOutlineSend />
        </i>
      </div>
    </div>
  );
};

export default ChatSection;
