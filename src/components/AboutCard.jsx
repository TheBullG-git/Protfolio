import React from "react";
import styles from "@/styles/AboutCard.module.css";
import Image from "next/image";

import me from "@/assets/images/me.webp";
import { useTranslation } from "react-i18next";

export default function AboutCard() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="relative col-span-3 aspect-square md:aspect-auto md:row-span-2 bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl overflow-hidden">
      <div className={styles.water}></div>
      <Image
        src={me}
        alt="The BullG"
        className="absolute bottom-0 -right-1/4 w-8/12 md:h-full md:auto object-cover -z-0 hidden md:flex"
        width="512"
        height="512"
        draggable="false"
        placeholder="blur"
        loading="eager"
        priority
      />
      <div className="h-full md:w-8/12 absolute top-0 left-0 p-4 md:p-8 flex flex-col justify-start  md:justify-end">
        <h1 className="text-3xl md:text-xl lg:text-5xl font-bold text-white mb-4 md:mb-5">
          👋 {i18n.language === "es" ? "Hola, soy" : "Hi, I'm"} BullG
        </h1>
        <p className="text-md md:text-lg lg:text-2xl text-white">
            I am a <b>video editor</b> with experience in <b>Adobe Premiere Pro</b> and <b>Final Cut Pro</b>.
            I am skilled in <b>video editing</b>, <b>color grading</b>, and <b>audio synchronization</b>.
            I enjoy learning new techniques and experimenting with different styles.
            With a keen eye for detail, I bring creativity and precision to every project, ensuring high-quality results.
        </p>
      </div>
    </div>
  );
}
