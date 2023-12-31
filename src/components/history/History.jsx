import React from "react";
import "./history.css";

const History = () => {
  return (
    <div
      className="max-w-[250px] w-[25%] min-w-[250px] 
    py-5 bg-[#D9D6D1] justify-center"
    >
      {/* <div className="py-5 relative">
        <div className="flex items-center justify-around">
          <h2 className="text-[#070745] font-bold text-[20px] history">
            HISTORY
          </h2>
          <h3 className="font-bold text-[14px] leading-[16.9px] text-[#020659]">
            6/20
          </h3>
        </div>

        <div className="flex gap-x-4 w-[230px] px-3 py-4 h-[100px] bg-white absolute  top-20 left-1/2 -translate-x-1/2 rounded-md">
          <div className="w-[20px] h-[20px] mt-4 shadows"></div>

          <div className="">
            <h2 className="font-bold text-[16px] leading- text-[#020659]">
              Create welcome form
            </h2>
            <p className="font-semibold text-[14px] text-black leading-10">
              Neque porro quisquam
            </p>
          </div>
        </div>

        <div className="  w-full absolute top-52  text-center px-1 border-b border-black pb-5">
          <div className="">
            <h2 className="font-bold text-[18px] leading-5 text-[#020659]">
              Est qui dolorem ipsum
            </h2>
            <p className="font-semibold text-[14px] leading-10 text-black">
              quia dolor sit amet, consectetur
            </p>
          </div>
          <div>
            <h2 className="font-bold text-[18px] leading-5 text-[#020659]">
              Est qui dolorem ipsum
            </h2>
            <p className="font-semibold text-[14px] leading-8 text-black">
              quia dolor sit amet, consectetur
            </p>
          </div>
        </div>
        <div className="absolute w-full top-[360px] text-center px-1 pb-5">
          <div>
            <h2 className="font-bold text-[20px] mb-2  leading-9 text-[#020659]">
              SUGGESTIONS
            </h2>
          </div>
          <div className="">
            <h2 className="font-bold text-[18px] leading-5 text-[#020659]">
              Est qui dolorem ipsum
            </h2>
            <p className="font-semibold text-[14px] leading-10 text-black">
              quia dolor sit amet, consectetur
            </p>
          </div>
          <div className="">
            <h2 className="font-bold text-[18px] leading-5 text-[#020659]">
              Est qui dolorem ipsum
            </h2>
            <p className="font-semibold text-[14px] leading-10 text-black">
              quia dolor sit amet, consectetur
            </p>
          </div>
        </div>
      </div> */}

      <div className="flex items-center justify-around">
        <h2 className="text-[#070745] font-bold text-[20px] history">
          HISTORY
        </h2>
        <h3 className="font-bold text-[14px] leading-[16.9px] text-[#020659]">
          6/20
        </h3>
      </div>
      <div className="border-b-2 border-black flex flex-col items-center
       overflow-y-auto h-[calc(50dvh-70px)]">
        <div className="flex w-[230px] mt-5 px-3 py-4 h-[100px] bg-white rounded-md">
          <div className="w-[20px] h-[20px] mt-4 shadows"></div>

          <div className="">
            <h2 className="font-bold text-[16px] text-[#020659]">
              Create welcome form
            </h2>
            <p className="font-semibold text-[14px] text-black leading-10">
              Neque porro quisquam
            </p>
          </div>
        </div>
        {[1, 2, 3, 4, 5].map((idx) => (
          <div className="" key={idx}>
            <div>
              <h2 className="font-bold text-[18px] leading-5 text-[#020659]">
                Est qui dolorem ipsum
              </h2>
              <p className="font-semibold text-[14px] leading-10 text-black">
                quia dolor sit amet, consectetur
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-around">
        <h2 className="font-bold text-[20px] mb-2  flex items-center leading-9 text-[#020659]">
          SUGGESTIONS
        </h2>
      </div>

      <div className="border-b-2 flex flex-col items-center overflow-y-auto h-[calc(50dvh-44px)]">
        {[1, 2, 3, 4, 5].map((idx) => (
          <div className="" key={idx}>
            <div>
              <h2 className="font-bold text-[18px] leading-5 text-[#020659]">
                Est qui dolorem ipsum
              </h2>
              <p className="font-semibold text-[14px] leading-10 text-black">
                quia dolor sit amet, consectetur
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
