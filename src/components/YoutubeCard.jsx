import React from "react";
import { FaYoutube} from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

export default function YoutubeCard() {
  return (
    <a
      href="https://www.youtube.com/@BullG69"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Youtube"
      className="flex flex-col justify-center items-center bg-[#000000d8] dark:bg-[#242424c0] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
    >
      <MdOpenInNew className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa]" />
      { <FaYoutube className="text-4xl md:text-7xl lg:text-9xl text-white dark:text-[#ffffffaa]" /> }
    </a>
  );
}
