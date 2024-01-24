import React from "react";
import WatchListCard from "./WatchListCard";

function WatchList({ listItems }) {
  // const {} = listItems;
  return (
    <div className="mx-4">
      {listItems.map((item) =>
        <WatchListCard key={item.id.videoId} cardItem={item} />
      )}
    </div>
  );
}

export default WatchList;
