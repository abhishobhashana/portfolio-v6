// "use client";

// import Image from "next/image";

// import {
//   useScroll,
//   useTransform,
//   motion,
//   useMotionTemplate,
//   useSpring,
// } from "framer-motion";
// import { H1 } from "./Title/H1";

// const springVars = {
//   stiffness: 100,
//   damping: 20,
// };

// export default function LandingPage() {
//   const { scrollYProgress } = useScroll();

//   const imageScale = useTransform(scrollYProgress, [0, 0.3], [1.5, 1]);
//   const outerImageOpacity = useTransform(scrollYProgress, [0, 0.01], [1, 0]);
//   const maskSize = useSpring(
//     useTransform(scrollYProgress, [0, 1], [2400, 150]),
//     springVars,
//   );
//   const maskPosition = "center 35%";
//   const whiteFillOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

//   const overlayStart = 0.5;
//   const overlayEnd = 1;

//   const rawMaskRadius = useTransform(
//     scrollYProgress,
//     [overlayStart, overlayStart + 0.15, overlayEnd],
//     [0, 150, 900],
//   );

//   const h1ScaleRaw = useTransform(
//     scrollYProgress,
//     [overlayStart, overlayEnd],
//     [5, 1],
//   );

//   const h1Scale = useSpring(h1ScaleRaw, {
//     stiffness: 80,
//     damping: 25,
//     mass: 1.2,
//     restDelta: 0.001,
//     restSpeed: 0.001,
//   });

//   const h1Blur = useTransform(
//     scrollYProgress,
//     [overlayStart, overlayStart + 0.15],
//     ["blur(20px)", "blur(0px)"],
//   );

//   const h1MaskRadius = useSpring(rawMaskRadius, {
//     stiffness: 60,
//     damping: 25,
//     mass: 1.2,
//   });

//   // const secondContentOpacity = useTransform(
//   //   scrollYProgress,
//   //   [0.6, 0.9],
//   //   [0, 1],
//   // );

//   return (
//     <div className="h-[180vh] relative">
//       <motion.div
//         className="fixed inset-0 w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center"
//         style={{
//           scale: imageScale,
//           opacity: outerImageOpacity,
//         }}
//       />

//       <motion.div
//         className="fixed inset-0 flex items-center justify-center bg-white"
//         style={{
//           maskImage: "url('/name.svg')",
//           WebkitMaskImage: "url('/name.svg')",
//           maskRepeat: "no-repeat",
//           WebkitMaskRepeat: "no-repeat",
//           maskSize: useMotionTemplate`${maskSize}px`,
//           WebkitMaskSize: useMotionTemplate`${maskSize}px`,
//           maskPosition,
//           WebkitMaskPosition: maskPosition,
//         }}
//       >
//         {/* Background inside mask */}
//         <motion.div
//           className="absolute inset-0 w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center"
//           style={{
//             scale: imageScale,
//           }}
//         />

//         {/* White fade overlay */}
//         <motion.div
//           className="absolute inset-0 w-full h-full bg-white"
//           style={{ opacity: whiteFillOpacity }}
//         />
//       </motion.div>

//       <motion.div
//         className="fixed inset-0 flex justify-center items-center pointer-events-none"
//         style={{
//           scale: h1Scale,
//           filter: h1Blur,
//           WebkitMaskImage: useMotionTemplate`
//       radial-gradient(
//         circle ${h1MaskRadius}px at 50% 150%,
//         black 80%,
//         transparent 101%
//       )
//     `,
//           maskImage: useMotionTemplate`
//       radial-gradient(
//         circle ${h1MaskRadius}px at 50% 150%,
//         black 80%,
//         transparent 101%
//       )
//     `,
//         }}
//       >
//         <H1 className="font-bold uppercase tracking-tighter text-red">
//           shobhashana
//         </H1>
//       </motion.div>

//       {/* <motion.div
//         className="absolute top-[230vh] w-full flex flex-col items-center text-center text-white px-4"
//         style={{ opacity: secondContentOpacity }}
//       >
//         <h2 className="text-5xl md:text-6xl font-bold mb-4">
//           Welcome to Hero 2
//         </h2>
//         <p className="text-lg md:text-2xl max-w-xl">
//           This is your second content appearing smoothly on scroll.
//         </p>
//       </motion.div> */}
//     </div>
//   );
// }

// "use client";
// import { useRef, useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// export default function LandingPage() {
//   const bgRef = useRef(null);
//   const containerRef = useRef(null);
//   const abcTextRef = useRef(null);
//   const welcomeTextRef = useRef(null);
//   const overlayRef = useRef(null);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
//       gsap.set(bgRef.current, {
//         scale: 1.05,
//       });

//       gsap.set(overlayRef.current, {
//         opacity: 0,
//       });

//       gsap.set(containerRef.current, {
//         y: 0,
//         ease: "power2.out",
//       });

//       gsap.set(abcTextRef.current, {
//         opacity: 0,
//         scale: 50,
//         color: "white",
//       });

//       gsap.set(welcomeTextRef.current, {
//         opacity: 0,
//         scale: 3,
//         color: "white",
//       });

//       /* ---------- Timeline ---------- */

//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: document.body,
//             start: "top top",
//             end: "+=200%",
//             scrub: 2,
//             markers: true,
//           },
//         })
//         .to(bgRef.current, {
//           scale: 1,
//         })
//         .to(overlayRef.current, {
//           opacity: 1,
//           duration: 0.2,
//         })
//         .to(abcTextRef.current, {
//           opacity: 1,
//           scale: 3,
//           duration: 1,
//           ease: "power2.out",
//         })
//         .to(
//           welcomeTextRef.current,
//           {
//             opacity: 1,
//             scale: 1,
//             duration: 1,
//             ease: "power1.inOut",
//           },
//           "<0.3",
//         );
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       style={{
//         position: "relative",
//         height: "250vh",
//       }}
//     >
//       <div
//         ref={bgRef}
//         style={{
//           position: "fixed",
//           inset: 0,
//           zIndex: 1,
//           pointerEvents: "none",
//         }}
//       >
//         <Image
//           src="/bg.jpg"
//           alt="Background"
//           fill
//           priority
//           style={{
//             objectFit: "cover",
//           }}
//         />
//       </div>

//       <div
//         ref={overlayRef}
//         style={{
//           position: "fixed",
//           inset: 0,
//           background: "black",
//           zIndex: 2,
//           pointerEvents: "none",
//         }}
//       />

//       {/* Text Container */}
//       <div
//         ref={containerRef}
//         className="fixed flex flex-col items-center justify-center z-4"
//       >
//         <p ref={abcTextRef} style={{ fontWeight: "bold", fontSize: "4rem" }}>
//           ABHI
//         </p>
//         <p
//           ref={welcomeTextRef}
//           style={{ fontWeight: "bold", fontSize: "2rem" }}
//         >
//           shobhashana
//         </p>
//       </div>
//     </div>
//   );
// }

// https://www.youtube.com/watch?v=y1K42bm_poY
// "use client";

// import Image from "next/image";

// import { useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function LandingPage() {
//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
//       gsap.set([".hero-image-logo", ".hero-image-copy"], {
//         opacity: 0,
//       });

//       gsap.set(".hero-image-container", {
//         scale: 15,
//       });

//       gsap.set(".overlay", {
//         scale: 15,
//         y: 0,
//         ease: "power2.out",
//         opacity: 0,
//       });

//       gsap.set(".fade-overlay", {
//         opacity: 0,
//         scale: 1,
//         color: "white",
//       });

//       gsap.set(".overlay-copy", {
//         opacity: 0,
//         scale: 3,
//         color: "white",
//         background:
//           "linear-gradient(to bottom, #111117 0%, #111117 50%, #e66461 50%, #e66461 100%)",
//       });

//       // ---------- Timeline ----------
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".hero",
//           start: "top top",
//           end: "+=200%",
//           scrub: 2,
//           markers: true,
//           pin: true,
//         },
//       });

//       // 1️⃣ Fade in the main elements
//       tl.to([".hero-image-logo", ".hero-image-copy"], {
//         opacity: 1,
//         duration: 1,
//       });

//       // 2️⃣ Fade overlay in
//       tl.to(
//         ".fade-overlay",
//         {
//           opacity: 1,
//           duration: 1,
//         },
//         "<0.3",
//       );

//       // 3️⃣ Scale logo container down from huge scale
//       tl.to(
//         ".hero-image-container",
//         {
//           scale: 1,
//           duration: 1.5,
//           ease: "power2.out",
//         },
//         "<0.3",
//       );

//       // 4️⃣ Overlay mask fade in
//       tl.to(
//         ".overlay",
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 1.5,
//           ease: "power2.out",
//         },
//         "<0.5",
//       );

//       // 5️⃣ Overlay copy / text reveal
//       tl.to(
//         ".overlay-copy",
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 1,
//           ease: "power1.inOut",
//         },
//         "<0.3",
//       );
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="hero relative h-[200vh] w-full bg-secondary overflow-hidden">
//       <div className="hero-image-container absolute top-0 left-0 w-full h-full">
//         {/* Main Background */}
//         <Image
//           fill
//           alt="main-bg"
//           src="/bg.jpg"
//           priority
//           className="absolute top-0 left-0 w-full h-full"
//         />

//         {/* Logo */}
//         <div className="hero-image-logo absolute top-[20%] left-1/2 w-[250px] h-auto transform -translate-x-1/2 translate-y-0 object-contain">
//           <Image fill alt="logo" src="./name.svg" priority />
//         </div>

//         {/* Optional second logo */}
//         <Image fill alt="logo2" src="./name.svg" priority />

//         {/* Hero copy */}
//         <div className="hero-image-copy absolute bottom-[10%] left-1/2 -translate-x-1/2 text-center text-white">
//           <p>scrolllllll</p>
//         </div>

//         {/* Fade Overlay */}
//         <div className="fade-overlay absolute inset-0 bg-white will-change-scroll" />

//         {/* Overlay with mask */}
//         <div className="overlay absolute inset-0 transform origin-[center_15%] w-full h-[200%] z-10">
//           <svg width="100%" height="100%">
//             <defs>
//               <mask id="logoRevealMask">
//                 <rect width="100%" height="100%" fill="white" />
//                 <path id="logoMask"></path>
//               </mask>
//             </defs>
//             <rect
//               width="100%"
//               height="100%"
//               fill="#111117"
//               mask="url(#logoRevealMask)"
//             />
//           </svg>
//         </div>

//         {/* Overlay Copy / Text */}
//         <div className="overlay-copy absolute bottom-[25%] left-1/2 -translate-x-1/2 scale-3 text-center z-20">
//           <h1 className="bg-clip-text text-white text-5xl md:text-6xl font-bold">
//             Awencj <br />
//             encjwnecj
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LandingPage() {
  const Logo = () => {
    return (
      <svg
        fill="none"
        height="2.5rem"
        width="2.5rem"
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
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-main-container", {
      scale: 1.45,
      duration: 2.8,
      ease: "power3.out",
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
    });

    bounceTimeline.to(scrollIndicator, {
      y: 20,
      opacity: 0.6,
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
      },
    });

    tl.set(".hero-main-container", {
      scale: 1.25,
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

    // tl.set(".intro-container", { visibility: "visible" });

    // tl.to(".intro-container", { opacity: 1, duration: 3 }, "<+=0.15");

    // tl.fromTo(
    //   ".intro-container",
    //   {
    //     filter: "blur(8px)",
    //   },
    //   {
    //     filter: "blur(0px)",
    //     duration: 3,
    //   },
    //   "<1.2",
    // );

    tl.set(".intro-container", {
      opacity: 0,
      y: 80,
    });

    tl.to(".intro-container", {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power3.out",
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      <div className="fixed top-10 left-10 lg:top-15 lg:left-15 z-50">
        <Logo />
      </div>
      <div className="container relative min-h-screen overflow-hidden bg-linear-to-br from-[#000] to-[#222]">
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
              src="/bg.jpg"
              alt="hero"
              className="hero-main-image absolute inset-0 w-full h-screen object-cover"
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
          ⌄
        </div>
      </div>

      <div className="intro-container flex flex-col justify-center items-center text-left px-6 md:px-0 md:max-w-3xl md:mx-auto z-0">
        <div className="max-w-2xl w-full">
          <h3 className="text-4xl md:text-6xl font-bold md:mb-8 mb-4 tracking-tight text-[#fff9cb] uppercase">
            abhi shobhashana
          </h3>

          <p className="text-xl md:text-3xl font-medium tracking-tight">
            Experienced React.js Developer specializing in building fast,
            scalable, and modern web applications.
          </p>
        </div>
      </div>
    </>
  );
}
