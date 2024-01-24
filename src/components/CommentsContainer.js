import React from "react";
import Comments from "./Comments";

function CommentsContainer() {
  const comments = [
    {
      name: "Pushkar Gupta",
      text: `how's the App`,
      replies: [
        {
          name: "Akshay Saini",
          text: `Doing a great job buddy`,
          replies: [
            {
              name: "Pushkar Gupta",
              text: `Thanks a lot Sir`,
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Pushkar Gupta",
      text: `how's the App`,
      replies: [
        {
          name: "Akshay Saini",
          text: `Doing a great job buddy`,
          replies: [
            {
              name: "Pushkar Gupta",
              text: `Thanks a lot Sir`,
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Pushkar Gupta",
      text: `how's the App`,
      replies: [
        {
          name: "Akshay Saini",
          text: `Doing a great job buddy`,
          replies: [
            {
              name: "Pushkar Gupta",
              text: `Thanks a lot Sir`,
              replies: [],
            },
          ],
        },
      ],
    },
  ];
  return (
    <div>
      <p className="font-bold">Comments: </p>
      <div>
        {comments.map((comment, index) => (
          <Comments key={index} data={comment} />
        ))}
      </div>
    </div>
  );
}

export default CommentsContainer;
