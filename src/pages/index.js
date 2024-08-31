import Head from "next/head";
import { motion } from "framer-motion";
import {
  AboutCard,
  BirthdayCard,
  EmailCard,
  ExpCard,
  GithubCard,
  InstagramCard,
  OnlineCard,
  ProjectsCard,
  Skills,
  SpotifyCard,
  ThemeCard,
  YoutubeCard
} from "@/components";


export default function Home() {
  return (
    <>
      <Head>
        <title>The BullG | Editor</title>
        <meta name="theme-color" content="#3F275C" />
        <meta name="apple-mobile-web-app-status-bar" content="#3F275C" />
        <meta
          name="description"
          content="Explore my expertise in crafting engaging visual stories through video editing and management. My work highlights a commitment to creativity, precision, and continuous growth in the ever-evolving world of digital media. Dive into my projects that reflect a passion for storytelling and technical excellence."
        />
        <meta name="googlebot" content="notranslate" />
        <meta name="author" content="The BullG" />
        <link rel="author" href="https://thebullg.in" />
        <link rel="canonical" href="https://thebullg.in" />
        <meta
          name="keywords"
          content="bullg,thebullg,bull,g,the,portfolio,thebullg portfolio,bullgin"
        />
        <meta name="creator" content="The BullG" />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />

        <meta property="og:title" content="The BullG | Editor" />
        <meta
          property="og:description"
          content="Explore my expertise in crafting engaging visual stories through video editing and management. My work highlights a commitment to creativity, precision, and continuous growth in the ever-evolving world of digital media. Dive into my projects that reflect a passion for storytelling and technical excellence."
        />
        <meta property="og:url" content="https://thebullg.in/" />
        <meta
          property="og:site_name"
          content="The BullG, Portfolio"
        />
        <meta property="og:locale" content="es_CO" />
        <meta
          property="og:image:url"
          content="https://yt3.googleusercontent.com/UIIDGD5dmTVrC5J5svEHOx84p5q8krC2LLgeQBBNWOVI6eof80OlJ8yQhjY35SsiN-omVdR1Vg=s160-c-k-c0x00ffffff-no-rj"
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="The BullG" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thebullg" />
        <meta name="twitter:creator" content="@thebullg" />
        <meta
          name="twitter:title"
          content="The BullG | Editor"
        />
        <meta
          name="twitter:image"
          content="https://yt3.googleusercontent.com/UIIDGD5dmTVrC5J5svEHOx84p5q8krC2LLgeQBBNWOVI6eof80OlJ8yQhjY35SsiN-omVdR1Vg=s160-c-k-c0x00ffffff-no-rj"
        />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: -2000 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100, duration: 1 }}
        transition={{ duration: 2.5, delay: 0.5, type: "spring" }}
        className="flex flex-col m-5"
      >
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
          <AboutCard />
          <ThemeCard />
          <BirthdayCard />
          <InstagramCard />
          <YoutubeCard />
          <ProjectsCard />
          <GithubCard />
          <Skills />
          <ExpCard />
          <SpotifyCard />
          <OnlineCard />
          <EmailCard />
        </div>
      </motion.div>
    </>
  );
}
