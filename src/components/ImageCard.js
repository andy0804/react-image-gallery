import React from "react";

export const ImageCard = ({ imageData }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={imageData.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl">
          {imageData.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong> {imageData.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {imageData.downloads}
          </li>
          <li>
            <strong>Likes:</strong> {imageData.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {imageData.tags.split(",").map((i, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{i}
          </span>
        ))}
      </div>
    </div>
  );
};
