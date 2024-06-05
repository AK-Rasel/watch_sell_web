import React from "react";
import ReactPlayer from "react-player";
import thumbnailImage from "../assets/Home/thumbnail.jpg";
import { FaPlay } from "react-icons/fa";

const VideoPlayer = () => {
  return (
    <div className="h-[55vh]">
      <ReactPlayer
        url="https://youtu.be/ZIqxftmwsBI?si=_KrUtNHbDxBfn2iH"
        light={thumbnailImage}
        playing={true}
        controls={true}
        width="100%"
        height="100%"
        playIcon={
          <button className="h-16 w-16 rounded-full bg-white shadow-2xl hover:shadow-lg hover:bg-primary_color transition-all duration-500 ease-in-out group flex justify-center items-center">
            <FaPlay className="text-text_hover_color group-hover:text-white" />
          </button>
        }
      />
    </div>
  );
};

export default VideoPlayer;
