import Head from "next/head";
import React from "react";

export default function Home() {

  return (
      <div className="">
        <Head>
          <title>Menthpath Ai</title>
          <meta name="An ai for answering career questions" content="home page" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        </Head>
        <div className=" bg-[#070745] h-screen w-screen py-2 pl-64 pr-2">
          
            <div className="flex h-[100%]">
                <div class="bg-white py-16 h-[100%] w-[75%] rounded-l-md shadow-md">
                 //abrahams side     
                </div>

                <div class="bg-[#d9d9d9] w-[25%] h-[100%] rounded-r-md">
                  //davidson side
                </div>

            </div>

        </div>
        
      </div>
    );
  }