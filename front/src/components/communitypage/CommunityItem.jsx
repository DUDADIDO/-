import { useState, useEffect } from "react";

export default function CommunityItem({ data }) {
  return (
    <div>
      <p>{data.id}</p>
      <p>{data.title}</p>
    </div>
  );
}
