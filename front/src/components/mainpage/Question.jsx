import { useState, useEffect } from "react";

export default function Question({ data }) {
  return (
    <div className="flex flex-col min-h-24">
      <div className="flex justify-between mb-4">
        <p className=" text-2xl font-bold">{data.title}</p>
        <p className="flex justify-end items-end text-xs font-bold">
          글쓴이 : {data.writer}
        </p>
      </div>
      <div className="bg-slate-50 shadow-lg h-[100%] p-2 rounded-lg flex justify-start items-center">
        <p className="line-clamp-4">{data.content}</p>
      </div>
    </div>
  );
}
