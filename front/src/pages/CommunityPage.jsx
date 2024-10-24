import { useState, useEffect } from "react";

import CommunityArticle from "@/components/communitypage/CommunityArticle.jsx";

import { HiOutlinePencilAlt } from "react-icons/hi";

export default function CommunityPage() {
  return (
    <div className="flex flex-col justify-start items-center w-10/12 h-full">
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-center items-start w-full">
          <p className=" text-3xl font-semibold mt-10 mb-5">커뮤니티</p>
          <p className="text-lg font-bold">
            여러분의 자유로운 의견을 나눠보세요.
          </p>
        </div>
        <div className="flex justify-end items-end w-full">
          <div className="flex items-center justify-end text-xl bg-appBlue2 px-3 py-1 rounded-lg hover:bg-blue-400 hover:text-white duration-200 hover:cursor-pointer">
            <HiOutlinePencilAlt />
            <p>&nbsp;&nbsp;</p>
            <button>글쓰기</button>
          </div>
        </div>
      </div>
      <hr className="mt-4 mb-1 border-0 dark:bg-gray-500 w-full h-0.5" />
      <CommunityArticle />
    </div>
  );
}
