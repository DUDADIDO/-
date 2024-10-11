import { useState, useEffect } from "react";

import Question from "@/components/mainpage/question.jsx";

const dummy = [
  {
    id: 1,
    title: "질문 제목 1",
    content:
      "질문 내용 1질문 내용 1질문 내용 1질문 내용 1질문 내용 1질문 내용 1질문 내용 1질문 내용 1질문 내용 1질문 내용 1질문 내용 1",
    writer: "작성자 1",
    create_at: "2022-01-01",
    view_cnt: 123123,
  },
  {
    id: 2,
    title: "질문 제목 2",
    content:
      "질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2질문 내용 2",
    writer: "작성자 2",
    create_at: "2022-02-01",
    view_cnt: 321321,
  },
  {
    id: 3,
    title: "질문 제목 3",
    content: "질문 내용 3",
    writer: "작성자 3",
    create_at: "2022-03-01",
    view_cnt: 454545,
  },
];

export default function MainQnA() {
  return (
    <div className="w-1/2 h-5/6 rounded-2xl shadow-2xl border-gray-400 bg-appGrey2 mt-10">
      <p className="p-4 text-3xl font-bold">많이 본 QnA</p>
      <div className="flex flex-col px-10 h-[80%] justify-around">
        {dummy.map((question) => (
          <Question key={question.id} data={question} />
        ))}
      </div>
    </div>
  );
}
