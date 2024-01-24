import React from "react";
import { Link } from "react-router-dom";
function WatchListCard({ cardItem }) {
  const {
    snippet: { channelTitle, title, thumbnails },
    id: { videoId },
  } = cardItem;
  // id.videoId
  // thumbnails.medium || standard
  return (
    <Link to={"/watch?v=" + videoId}>
      <div className="flex m-2">
        <img className="w-40 rounded-lg" src={thumbnails.medium.url} alt="" />
        <div className="mx-2">
          <ul>
            <li className="font-bold text-sm">{title}</li>
            <li className="from-neutral-400 text-xs">{channelTitle}</li>
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default WatchListCard;
