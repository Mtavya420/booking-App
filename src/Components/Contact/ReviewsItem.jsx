import Image from "next/image";
import React from "react";
export default function ReviewsItem(props) {
  const { item, index } = props;
  const [expand, setExpand] = React.useState(false);
  const expandButton = (
    <span className={`${item.text.length > 150 ? "inline-block" : "hidden"}`}>
      {expand ? "" : "..."}
      <a
        onClick={() => setExpand((prevState) => !prevState)}
        className={`ml-2 text-blue-600 cursor-pointer underline`}
      >
        {`Read ${expand ? "less" : "more"}`}
      </a>
    </span>
  );
  const text = item.text.substring(0, expand ? 4000 : 150);
  return (
    <div className="flex mb-4 flex-row" key={index}>
      <div className="flex-shrink-0">
        <Image
          width="50px"
          src={item.profile_photo_url}
          className="mr-4 mt-2"
          loading="lazy"
        />
      </div>
      <div>
        <a target="_blank" rel="noopener noreferrer" href={item.author_url}>
          <h2 className="text-blue-500 font-bold text-sm">
            {item.author_name}
          </h2>
        </a>
        <span className="text-gray-500 text-xs align-text-top">
          {item.relative_time_description}
        </span>
        <div className="">
          <Image
            width="100px"
            height="20px"
            src="/stars.png"
            alt="reviewItems"
            className="mr-3"
            loading="lazy"
          />
          <p style={{ fontSize: "14px" }} className="leading-snug">
            {text}
            {expandButton}
          </p>
        </div>
      </div>
    </div>
  );
}
