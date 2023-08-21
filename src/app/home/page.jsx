import History from "@/components/history/History";
import ChatSection from "@/components/home/ChatSection";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-between">
      <ChatSection />
      <History />
    </div>
  );
};

export default page;
