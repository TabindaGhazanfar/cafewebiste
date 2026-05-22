import { useEffect, useRef } from "react";
/* GSAP */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // 🚀 ScrollTrigger import kiya
import cafe from "../assets/cafe.webp"; 

// Register the plugin lazmi karna hai
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);       // 🚀 Background image ke liye ref
  const contentRef = useRef(null);  // 🚀 Text content ke liye ref

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      /* 🚀 AHMAD BHAI'S PARALLAX EFFECT */
      // Jab user scroll karega toh background image dynamic aur premium slow speed se move hogi
      gsap.to(bgRef.current, {
        yPercent: 20, // Halka vertical shift depth create karne ke liye
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true, // Smooth pinning and syncing with scrollbar
        },
      });

      /* 🚀 CATCHY FADE-IN / FADE-OUT ON SCROLL */
      // Scroll karne par hero ka text content smoothly upar slide hote hue opacity drop karega
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom 40%", // Adhay scroll tak clear fade layer create karega
          scrub: true,
        },
      });

      /* FLOATING CIRCLE 1 */
      gsap.to(".c1", {
        y: 20,
        x: 15,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* FLOATING CIRCLE 2 */
      gsap.to(".c2", {
        y: -15,
        x: -10,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <div className="hero" id="home" ref={containerRef}>
      <img
        ref={bgRef} // 🚀 Ref attached here
        src={cafe}
        alt="Cafe"
        className="bg"
        fetchpriority="high" 
        style={{ transform: "scale(1.2)" }} // 🚀 Parallax bounds secure karne ke liye default zoom scale
      />

      {/* OVERLAY */}
      <div className="overlay"></div>

      {/* DECOR */}
      <div className="circle c1"></div>
      <div className="circle c2"></div>

      {/* CONTENT */}
      <div className="content" ref={contentRef}> {/* 🚀 Ref attached here */}
        <h1>
          Sip the Perfect
          <br />
          Coffee Moment
        </h1>

        <p>
          Experience the magic in every sip made specially for coffee lovers.
        </p>

        <div className="buttons">
          <button className="primary-btn">
            Explore
          </button>
        </div>
      </div>

      {/* SVG DIVIDER */}
      <div className="custom-shape-divider-bottom-1778423407">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,
            172-41.86,82.39-16.72,168.19-17.73,
            250.45-.39C823.78,31,906.67,72,
            985.66,92.83c70.05,18.48,
            146.53,26.09,214.34,3V0H0V27.35
            A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          overflow-x:hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
          
        .hero{
          position:relative;
          width:100%;
          min-height: 120vh;
          overflow:hidden;
          display:flex;
          align-items:center;
          justify-content:center;
          background: #1c0a0a;
          padding: 120px 20px 160px 20px;
        }

        .bg{
          position:absolute;
          top: 0;
          left: 0;
          width:100%;
          height:100%;
          object-fit:cover;
          object-position: center;
          will-change: transform;
          backface-visibility:hidden;
        }

        .overlay{
          position:absolute;
          inset:0;
          background: linear-gradient(
            rgba(40,20,20,0.42),
            rgba(40,20,20,0.38)
          );
          z-index:1;
        }

        .circle{
          position:absolute;
          border-radius:50%;
          background: rgba(255,255,255,0.08);
          backdrop-filter:blur(1px);
          filter:blur(1px);
          z-index:2;
        }

        .c1{
          width:240px;
          height:240px;
          top:-80px;
          left:-60px;
        }

        .c2{
          width:180px;
          height:180px;
          right:-40px;
          bottom:120px;
        }

        .content{
          position:relative;
          z-index:9;
          text-align:center;
          width:100%;
          max-width:1000px;
          padding:20px;
          margin-top: 20px;
          will-change: transform, opacity;
        }

        /* HEADING FIXES FOR LCP */
        .content h1{
          font-size:74px;
          line-height:1.15;
          font-family:'Pacifico', cursive;
          font-display: swap;
          color:#ffffff;
          margin-bottom:40px;
          max-width:900px;
          margin-left:auto;
          margin-right:auto;
          text-shadow: 0 10px 35px rgba(0,0,0,0.75);
          will-change: transform, opacity;
        }

        .content p{
          margin:20px auto 40px auto;
          max-width:720px;
          line-height:1.8;
          font-size:20px;
          font-weight:500;
          color:#ffffff;
          text-shadow: 0 6px 18px rgba(0,0,0,0.65);
          letter-spacing:0.3px;
        }

        .buttons{
          display:flex;
          justify-content:center;
          margin-top:18px;
          position:relative;
          z-index:9;
        }

        .primary-btn{
          padding:16px 40px;
          border:none;
          border-radius:50px;
          background: linear-gradient(
            135deg,
            #6f2323,
            #842d2d
          );
          color:#fff;
          font-size:16px;
          font-weight:700;
          cursor:pointer;
          box-shadow: 0 14px 30px rgba(0,0,0,0.28);
          transition: all 0.35s ease;
        }

        .primary-btn:hover{
          transform:translateY(-3px);
          box-shadow: 0 18px 36px rgba(0,0,0,0.34);
          filter:brightness(1.08);
        }

        .custom-shape-divider-bottom-1778423407{
          position:absolute;
          bottom: -1px;
          left:0;
          width:100%;
          overflow:hidden;
          line-height:0;
          transform:rotate(180deg);
          z-index:3;
        }

        .custom-shape-divider-bottom-1778423407 svg{
          position:relative;
          display:block;
          width:calc(100% + 1.3px);
          height:140px;
        }

        .custom-shape-divider-bottom-1778423407 .shape-fill{
          fill:#fff7f8;
        }

        @media(max-width:992px){
          .hero {
            min-height: auto;
            height: auto;
            padding: 110px 24px 100px 24px;
          }
          .content h1{
            font-size:54px;
            margin-bottom: 24px;
          }
          .content p{
            font-size:17px;
            margin-bottom: 30px;
          }
          .custom-shape-divider-bottom-1778423407 svg {
            height: 80px;
          }
        }

        @media(max-width:768px){
          .hero{
            min-height: auto !important; 
            height: auto !important;
            padding-top: 100px;
            padding-bottom: 80px;
          }

          .content{
            padding: 0 10px;
            margin-top: 0px;
          }

          .content h1{
            font-size: clamp(32px, 7.5vw, 42px);
            line-height: 1.2;
            margin-bottom: 16px;
          }

          .content p{
            font-size: 14px;
            line-height: 1.55;
            max-width: 100%;
            margin: 0 auto 24px;
          }

          .primary-btn{
            width: 160px;
            padding: 12px 20px;
            font-size: 14px;
          }

          .circle{
            display:none;
          }

          .custom-shape-divider-bottom-1778423407{
            bottom:-1px;
          }

          .custom-shape-divider-bottom-1778423407 svg{
            width: 100%;
            margin-left: 0;
            height: 45px;
            display: block;
          }
        }

        @media(max-width: 380px) {
          .hero {
            padding-top: 85px;
            padding-bottom: 65px;
          }
          .content h1 {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}