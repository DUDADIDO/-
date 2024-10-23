import { useState, useEffect } from "react";

import CommunityItem from "@/components/communitypage/CommunityItem.jsx";

import CommunityDummy from "@/components/communitypage/CommunityDummy.json";

const dummy = CommunityDummy;

export default function CommunityArticle() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(dummy.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummy.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {currentItems.map((data) => (
        <CommunityItem key={data.id} data={data} />
      ))}
      <div className="mt-10">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
