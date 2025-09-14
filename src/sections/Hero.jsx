import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useMaskSettings } from '../../constants';
import ComingSoon from "./ComingSoon";

import heroBg from "/images/hero-bg.webp";
import heroText from "/images/hero-text.webp";
import trailerLogo from "/images/watch-trailer.png";
import playIcon from "/images/play.png";
import bigHeroText from "/images/big-hero-text.svg";

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings();

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set('.mask-logo', { marginTop: '-100vh', opacity: 0 });
    gsap.set('.entrance-message', { marginTop: '0vh' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        scrub: 2.5,
        end: '+=200%',
        pin: true,
      }
    });

    tl
      .to('.fade-out', { opacity: 0, ease: 'power1.inOut' })
      .to('.scale-out', { scale: 1, ease: 'power1.inOut' })
      .to('.mask-wrapper', { maskSize, ease: 'power1.inOut' }, '<')
      .to('.mask-wrapper', { opacity: 0 })
      .to('.overlay-logo', { opacity: 1, onComplete: () => {
        gsap.to('.overlay-logo', { opacity: 0 });
      } }, '<')
      .to('.entrance-message', {
        duration: 1,
        ease: 'power1.inOut',
        maskImage: 'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)'
      }, '<');
  });

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img src={heroBg} alt="background" className="scale-out" />
        <img src={heroText} alt="hero-logo" className="title-logo fade-out" />
        <img src={trailerLogo} alt="trailer" className="trailer-logo fade-out" />
        <div className="play-img fade-out">
          <img src={playIcon} alt="play" className="w-7 ml-1" />
        </div>
      </div>

      <div>
        <img src={bigHeroText} alt="logo" className="size-full object-cover mask-logo" />
      </div>

      <div className="fake-logo-wrapper">
        <img src={bigHeroText} alt="overlay logo" className="overlay-logo" />
      </div>

      <ComingSoon />
    </section>
  )
}

export default Hero;
