import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="shadow-lg rounded-lg bg-slate-100 w-1/5 m-2">
      <Link to={"/watch?v=" + info?.id}>
        <img
          className="w-full border rounded-lg"
          src={thumbnails.medium.url}
          alt="card-img"
        />
        <div className="flex my-1">
          <img
            className="h-8"
            src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
            alt="channel-img"
          />
          <div className="flex justify-start mx-1">
            <ul>
              <li className="font-bold">{title}</li>
              <li>{channelTitle}</li>
              <li>{statistics.viewCount} views</li>
            </ul>
          </div>
          <img
            className="h-6 flex justify-end ml-auto"
            src="https://cdn-icons-png.flaticon.com/512/7066/7066144.png"
            alt="options"
          />
        </div>
      </Link>
    </div>
  );
}

export default VideoCard;
