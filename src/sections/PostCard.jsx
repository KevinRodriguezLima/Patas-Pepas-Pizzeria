import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import overlay from "/images/overlay.webp";
import postcardVideo from "/videos/postcard-vd.mp4";

const PostCard = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".post-card",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<"
      );
    };
  });

  return (
    <section className="post-card">
      <div className="animated-gradient-bg" />

      <div className="post-card-wrapper group hover:rotate-1 hover:-[1.02] transition duration-700">
        <img src={overlay} alt="Overlay" />

        <video
          ref={videoRef}
          muted
          playsInline
          autoPlay
          preload="auto"
          src={postcardVideo}
        />

        <button className="group-hover:bg-yellow transation duration-700">
          Explore Leonida Keys
        </button>
      </div>
    </section>
  );
};

export default PostCard;
