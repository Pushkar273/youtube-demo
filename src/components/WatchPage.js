import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import WatchList from "./WatchList";
import {YOUTUBE_VIDEOS_LIST} from "../utils/constants";
import CommentsContainer from "./CommentsContainer";

function WatchPage() {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const [relatedListItems, setRelatedListItems] = useState([]);

  useEffect(() => {
    dispatch(closeMenu());
    getVideosList();
  }, []);

  const getVideosList = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_LIST);
    const json = await data.json();
    setRelatedListItems(json.items);
  }
  return (
    <div className="mx-32 my-4 flex">
      <div>
        <iframe
          width="873"
          height="491"
          src={`https://www.youtube.com/embed/${params.get("v")}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <CommentsContainer />
      </div>
      <WatchList listItems={relatedListItems} />
    </div>
  );
}

export default WatchPage;
