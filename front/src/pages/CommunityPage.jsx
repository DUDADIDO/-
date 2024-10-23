import { useState, useEffect } from "react";

import CommunityArticle from "@/components/communitypage/CommunityArticle.jsx";

export default function CommunityPage() {
  return (
    <div>
      <p>자유게시판</p>
      <CommunityArticle />
    </div>
  );
}
