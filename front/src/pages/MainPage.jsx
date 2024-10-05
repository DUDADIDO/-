import ExpertList from "@/components/mainpage/ExpertList.jsx";
import MainQnA from "@/components/mainpage/MainQnA.jsx";
import { useState, useEffect } from "react";

export default function MainPage() {
  return (
    <div className="flex w-full h-full gap-[10vh] px-[10vh] justify-between items-center">
      <MainQnA />
      <ExpertList />
    </div>
  );
}
