import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import CommunityDetail from "@/components/communitypage/CommunityDetail.jsx";

export default function CommunityDetailPage() {
  const params = useParams();
  const location = useLocation();

  const articleId = params.id;
  const { data } = location.state;

  return (
    <div className="h-full w-full">
      <CommunityDetail data={data} />
    </div>
  );
}
