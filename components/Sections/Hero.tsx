"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const Logo = () => {
    return (
      <svg
        fill="none"
        height="2.2rem"
        width="2.2rem"
        viewBox="0 0 46 35"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-180"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M33.9162 0.800781L17.3358 34.4008L0.776855 0.800781H12.3139L17.3332 11.5445L22.3766 0.800781H33.9162Z"
          fill="currentColor"
        ></path>
      </svg>
    );
  };
  const SlidDownLogo = () => {
    return (
      <svg
        width="34"
        height="14"
        viewBox="0 0 34 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.5609 1.54346C34.0381 2.5875 33.6881 3.87821 32.7791 4.42633L17.0387 13.9181L1.48663 4.42115C0.580153 3.86761 0.235986 2.57483 0.717909 1.53365C1.19983 0.492464 2.32535 0.097152 3.23182 0.650692L17.0497 9.08858L31.051 0.64551C31.96 0.0973872 33.0837 0.499411 33.5609 1.54346Z"
          fill="currentColor"
        ></path>
      </svg>
    );
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-main-container", {
      scale: 1.45,
      duration: 2.8,
      ease: "power3.out",
      onComplete: () => {
        document.body.style.overflow = "visible";
        document.body.style.overflowX = "hidden";
      },
    });

    gsap.to(".overlay", {
      opacity: 0,
      duration: 2.8,
      ease: "power3.out",
      onComplete: () => {
        document.body.style.overflow = "visible";
        document.body.style.overflowX = "hidden";
      },
    });

    const scrollIndicator = document.querySelector(".scroll-indicator");
    const bounceTimeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
      paused: true,
    });

    bounceTimeline.to(scrollIndicator, {
      y: 20,
      duration: 0.8,
      ease: "power1.inOut",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        scrub: 2,
        start: "top top",
        end: "+=2000",
        pin: true,

        onEnter: () => {
          gsap.to(scrollIndicator, { opacity: 0.6, duration: 0.3 });
          bounceTimeline.play();
        },

        onEnterBack: () => {
          gsap.to(scrollIndicator, { opacity: 0.6, duration: 0.3 });
          bounceTimeline.play();
        },

        onLeave: () => {
          gsap.to(scrollIndicator, { opacity: 0, duration: 0.3 });
          bounceTimeline.pause();
        },

        onLeaveBack: () => {
          gsap.to(scrollIndicator, { opacity: 0, duration: 0.3 });
          bounceTimeline.pause();
        },
      },
    });

    tl.set(".hero-main-container", {
      scale: 1,
    });

    tl.to(".hero-main-container", {
      scale: 1,
      duration: 1,
    });

    tl.to(
      ".hero-main-logo",
      {
        opacity: 0,
        duration: 0.5,
      },
      "<",
    );

    tl.to(
      ".hero-main-image",
      {
        opacity: 0,
        duration: 0.9,
      },
      "<+=0.5",
    );

    tl.to(
      ".hero-main-container",
      {
        backgroundSize: "28vh",
        duration: 1.5,
      },
      "<+=0.2",
    );

    tl.fromTo(
      ".hero-text",
      {
        backgroundImage: `radial-gradient(
          circle at 50% 200vh,
          rgba(255, 214, 135, 0) 0,
          rgba(157, 47, 106, 0.5) 90vh,
          rgba(157, 47, 106, 0.8) 120vh,
          rgba(32, 31, 66, 0) 150vh
        )`,
      },
      {
        backgroundImage: `radial-gradient(circle at 50% 3.9575vh, rgb(255, 213, 133) 0vh,
     rgb(247, 77, 82) 50.011vh,
      rgb(145, 42, 105) 90.0183vh,
       rgba(32, 31, 66, 0) 140.599vh)`,
        duration: 3,
      },
      "<1.2",
    );

    tl.fromTo(
      ".hero-text-logo",

      {
        opacity: 0,
        maskImage: `radial-gradient(circle at 50% 145.835%, rgb(0, 0, 0) 36.11%, rgba(0, 0, 0, 0) 68.055%)`,
      },
      {
        opacity: 1,
        maskImage: `radial-gradient(
    circle at 50% 105.594%,
    rgb(0, 0, 0) 62.9372%,
    rgba(0, 0, 0, 0) 81.4686%
  )`,
        duration: 3,
      },
      "<0.2",
    );

    tl.set(".hero-main-container", { opacity: 0 });

    tl.to(".hero-1-container", { scale: 0.85, duration: 3 }, "<-=3");

    tl.set(
      ".hero-1-container",
      {
        maskImage: `radial-gradient(circle at 50% 16.1137vh, rgb(0, 0, 0) 96.1949vh, rgba(0, 0, 0, 0) 112.065vh)`,
      },
      "<+=2.1",
    );

    tl.to(
      ".hero-1-container",
      {
        maskImage: `radial-gradient(circle at 50% -40vh, rgb(0, 0, 0) 0vh, rgba(0, 0, 0, 0) 80vh)`,
        duration: 2,
      },
      "<+=0.2",
    );

    tl.to(
      ".hero-text-logo",
      {
        opacity: 0,
        duration: 2,
      },
      "<1.5",
    );

    tl.set(".hero-1-container", { opacity: 0 });
    tl.set(".hero-2-container", { visibility: "visible", scale: 1.45 });

    tl.to(
      ".hero-2-container",
      { opacity: 1, duration: 3, scale: 1 },
      "<+=0.15",
    );

    tl.fromTo(
      ".hero-2-container",
      {
        backgroundImage: `radial-gradient(
          circle at 50% 200vh,
          rgba(255, 214, 135, 0) 0,
          rgba(157, 47, 106, 0.5) 90vh,
          rgba(157, 47, 106, 0.8) 120vh,
          rgba(32, 31, 66, 0) 150vh
        )`,
      },
      {
        backgroundImage: `radial-gradient(circle at 50% 3.9575vh, rgb(255, 213, 133) 0vh,
     rgb(247, 77, 82) 50.011vh,
      rgb(145, 42, 105) 90.0183vh,
       rgba(32, 31, 66, 0) 140.599vh)`,
        duration: 3,
      },
      "<1.2",
    );

    tl.to(
      ".hero-2-container",
      {
        opacity: 0,
        duration: 3,
        scale: 0.9,
        backgroundImage: `radial-gradient(
          circle at 50% 200vh,
          rgba(255, 214, 135, 0) 0,
          rgba(157, 47, 106, 0.5) 90vh,
          rgba(157, 47, 106, 0.8) 120vh,
          rgba(32, 31, 66, 0) 150vh
        )`,
      },
      "<2",
    );

    tl.fromTo(
      ".hero-transition-image",
      {
        opacity: 0,
        duration: 1,
        filter: "blur(8px)",
        ease: "power2.out",
      },
      {
        opacity: 1,
        duration: 1.5,
        filter: "blur(0px)",
        ease: "power2.out",
      },
      "<2",
    );

    tl.to(
      ".hero-transition-image img",
      {
        scale: 1.1,
        duration: 3,
        ease: "power2.out",
      },
      "<",
    );

    tl.to({}, { duration: 1.5 });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      <div className="hero-transition-image fixed inset-0 opacity-0 pointer-events-none z-0">
        <img
          src="/poster_6.png"
          alt="transition"
          className="w-screen h-screen object-cover"
        />
      </div>

      <div className="fixed top-10 left-10 lg:top-15 lg:left-15 z-50">
        <Logo />
      </div>
      <div className="container relative min-h-screen overflow-hidden">
        <div className="overlay fixed inset-0 bg-black z-1 pointer-events-none" />

        <div className="hero-1-container relative h-screen w-full">
          <div
            className="hero-main-container relative h-screen w-full scale-[1]! bg-no-repeat bg-origin-content"
            style={{
              backgroundImage: "url('/name.png')",
              backgroundSize: "1000vh",
              backgroundPosition: "50% 30%",
            }}
          >
            <img
              src="/name.png"
              alt="logo"
              className="hero-main-logo absolute inset-0 w-full h-screen object-cover"
              draggable="false"
            />

            <img
              src="/poster_2.png"
              alt="hero"
              className="hero-main-image absolute inset-0 w-full h-screen object-top-left object-cover"
              draggable="false"
            />
          </div>

          <div className="absolute inset-0 z-[-1] flex flex-col items-center justify-center gap-16">
            <div
              className="hero-text-logo absolute inset-0 flex flex-col items-center justify-center bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/name.png')",
                backgroundSize: "28vh",
                backgroundPosition: "50% 30%",
              }}
            />

            <h3 className="hero-text text-center uppercase tracking-tight lg:text-7xl text-5xl font-bold bg-clip-text text-transparent">
              shobhashana
            </h3>
          </div>
        </div>

        <div className="hero-2-container absolute inset-0 opacity-0 flex flex-col justify-center items-center text-left px-6 md:px-0 md:max-w-3xl md:mx-auto text-transparent bg-clip-text [-webkit-text-fill-color:transparent]">
          <div className="max-w-2xl w-full">
            <h3 className="text-4xl md:text-6xl font-bold md:mb-8 mb-4 tracking-tight">
              Senior Developer
            </h3>

            <p className="text-xl md:text-3xl font-medium tracking-tight">
              Experienced React.js Developer specializing in building fast,
              scalable, and modern web applications.
            </p>
          </div>
        </div>

        <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 text-pink-300 text-3xl">
          <SlidDownLogo />
        </div>
      </div>
    </>
  );
}
