import React from "react";

function Comments({ data }) {
  const { name, text, replies } = data;
  return (
    <div className="mt-2 p-2">
      <div className="flex my-2 bg-gray-200 rounded-lg p-2">
        <img
          className="h-12"
          src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
          alt="user"
        />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
      <div className="px-3 border-l-4">
            {replies.map((reply, index) => (
              <Comments key={index} data={reply} />
            ))}
        </div>
    </div>
  );
}

export default Comments;
