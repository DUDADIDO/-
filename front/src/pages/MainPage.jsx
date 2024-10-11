import ExpertList from "@/components/mainpage/ExpertList.jsx";
import MainQnA from "@/components/mainpage/MainQnA.jsx";
import { useState, useEffect } from "react";

export default function MainPage() {
  return (
    <div className="flex w-full h-full gap-[10vh] px-[10vh] justify-between items-center relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 my-4 text-center">
        <h1 className="text-2xl font-bold">알쏭달쏭</h1>
        <p>대충 알쏭달쏭 설명하는 글... 이미지로 대체 가능</p>
      </div>
      <MainQnA />
      <ExpertList />
    </div>
  );
}
