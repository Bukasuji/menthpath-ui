import React from "react";

const Navbar = () => {
    return(
        <div className="mb-[100px] pl-4 ">
        <div className="flex items-center mb-[50px] ml=[30px]">
        <img className="w-[80px] h-[80px]" src="/images/logo.png" alt="logo" />
        <h2 className="text-white ">MENTHPATH AI</h2> 
        </div>
        <div className="flex items-center mb-5">
        <img className="w-[40px] h-[40px] mr-2" src="/images/Rewards.png" alt="logo" />
        <p className="top-78 left-80 text-white text-[13px]">INTERVIEW PREP</p> 
        <p className="rounded-lg bg-orange-500 top-78 left-80 text-white text-[13px] ml-2 w-[40px] pl-[6px]">PRO</p>
        </div>
        <div className="flex items-center mb-5 ">
        <img className="mr-2" src="/images/Interrogation.png" alt="logo" />
        <p className="top-78 left-80 text-white text-[13px]">QUIZ</p> 
        <p className="rounded-lg bg-orange-500 top-78 left-80 text-white text-[13px] ml-2 w-[40px] pl-[6px]">PRO</p>
        </div>
        <div className="flex items-center mb-5">
        <img className="mr-2" src="/images/web.png" alt="logo" />
        <p className="top-78 left-80 text-white text-[13px]">OFFLINE ACCESS</p> 
        </div>
        <div className="flex items-center mb-5">
        <img className="mr-2" src="/images/Gear.png" alt="Gear" />
        <p className="top-78 left-80 text-white text-[13px]">SETTINGS</p> 
        </div>
        <div className="flex items-center mb-[50px]">
        <img className="mr-2" src="/images/Ray.png" alt="Ray" />
        <p className="top-78 left-80 text-white text-[13px]">FAQs</p> 
        </div>
        <img src="/images/Rectangle.png" alt="rectangle" />
        <img className="h-[42px] mr-2 mt-[20px]" src="/images/Whatsapp.png" alt="rectangle" />

        <div className="mt-[20px] mb-[20px] rounded-lg flex justify-around bg-[#D9D9D9] h-[42px] w-[241px]">
        <p className="mt-[12px] font-extrabold text-[#000000] text-[13px]">LOGIN</p> 
        <img className="ml-19" src="/images/Loggout.png" alt="logo" />
        </div>
        </div>
    )
}
export default Navbar;