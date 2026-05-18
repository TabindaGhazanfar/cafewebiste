import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const images = [
  "/src/assets/cafe1.png",
  "/src/assets/cafe2.png",
  "/src/assets/cafe3.png",
];

export default function About() {
  const [index, setIndex] = useState(0);
  const cardsRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  /* GSAP SMOOTH ANIMATION */
  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const position = (i - index + images.length) % images.length;

      if (position === 0) {
        gsap.to(card, {
          x: 0,
          scale: 1,
          rotation: 0,
          opacity: 1,
          zIndex: 3,
          duration: 1.3,
          ease: "power4.out",
        });
      } else if (position === 1) {
        gsap.to(card, {
          x: -25, 
          scale: 0.93,
          rotation: -4,
          opacity: 0.7,
          zIndex: 2,
          duration: 1.3,
          ease: "power4.out",
        });
      } else {
        gsap.to(card, {
          x: -50,
          scale: 0.86,
          rotation: -7,
          opacity: 0.3,
          zIndex: 1,
          duration: 1.3,
          ease: "power4.out",
        });
      }
    });

    /* BLOB FLOAT */
    gsap.to(".about-blob", {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [index]);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* LEFT SIDE */}
        <div className="about-left">
          <h2>About Our Cafe</h2>
          <p>
            At Cafe Bliss, we believe coffee is more than just a drink — it's an
            experience that brings comfort, connection, and joy.
          </p>
          <p>
            From carefully selected premium beans to a warm and inviting
            atmosphere, every detail is crafted to make your moment special.
          </p>
          <p>
            Whether you're starting your day with a fresh brew or unwinding, Cafe Bliss is your perfect place to relax.
          </p>

          {/* COMPACT STATS GRID */}
          <div className="about-stats">
            <div className="about-stat-box">
              <h3>10+</h3>
              <span>Years Experience</span>
            </div>
            <div className="about-stat-box">
              <h3>5k+</h3>
              <span>Happy Customers</span>
            </div>
            <div className="about-stat-box full-width-mobile">
              <h3>24/7</h3>
              <span>Fresh Coffee</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE GALLERY */}
        <div className="about-right">
          <div className="about-blob"></div>
          <div className="about-cards-wrapper">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                ref={(el) => (cardsRef.current[i] = el)}
                className="about-card-img"
                alt="Cafe Interior"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
          background: linear-gradient(180deg, #fffaf9, #fff4f6);
          padding: 90px 0;
          z-index: 20;
          overflow: hidden;
          width: 100%;
        }

        .about-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 40px;
          width: 100%;
          box-sizing: border-box;
        }

        .about-left {
          flex: 1;
          max-width: 620px;
        }

        .about-left h2 {
          font-size: 52px;
          color: #5a2222; /* Halka sa deep maroon behtar contrast ke liye */
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .about-left p {
          color: #4a3b3b; /* Stronger dark shade door se readability badhane ke liye */
          line-height: 1.8;
          margin-bottom: 14px;
          font-size: 15px;
          font-weight: 450; /* Subtle weight enhancements */
        }

        /* STATS COMPACT SETTINGS */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 30px;
        }

        .about-stat-box {
          background: #ffe8ee;
          padding: 16px 20px;
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.03);
          transition: transform 0.3s ease;
        }

        .about-stat-box:hover {
          transform: translateY(-4px);
        }

        .about-stat-box h3 {
          font-size: 26px;
          color: #a04961; /* Clearer contrast */
          margin: 0 0 4px 0;
        }

        .about-stat-box span {
          color: #5c4545; /* Enhanced text definition */
          font-size: 13px;
          line-height: 1.4;
          display: block;
          font-weight: 500;
        }

        /* RIGHT SIDE GALLERY */
        .about-right {
          position: relative;
          width: 380px;
          height: 460px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-cards-wrapper {
          position: relative;
          width: 320px;
          height: 420px;
          margin-left: auto;
        }

        .about-blob {
          position: absolute;
          width: 300px;
          height: 300px;
          background: #f8dbe1;
          border-radius: 60% 40% 50% 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }

        .about-card-img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 36px;
          border: 6px solid rgba(255,255,255,0.85);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          will-change: transform, opacity;
        }

        /* LAPTOP RESPONSIVE */
        @media(max-width: 1200px) {
          .about-section { padding: 70px 0; }
          .about-container { gap: 40px; padding: 0 30px; }
          .about-left h2 { font-size: 42px; }
          .about-right { width: 330px; height: 400px; }
          .about-cards-wrapper { width: 280px; height: 360px; }
        }

        /* TABLET RESPONSIVE */
        @media(max-width: 992px) {
          .about-container {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }
          .about-left { max-width: 100%; }
          .about-stats { max-width: 500px; margin: 25px auto 0; }
          .about-right { width: 100%; height: 400px; }
          .about-cards-wrapper { margin: 0 auto; left: 20px; }
        }

        /* MOBILE VIEW */
        @media(max-width: 576px) {
          .about-section { padding: 40px 0; }
          .about-container { padding: 0 20px; gap: 24px; }
          
          .about-left h2 { font-size: 30px; margin-bottom: 12px; }
          .about-left p { font-size: 13.5px; line-height: 1.6; margin-bottom: 10px; }
          
          .about-stats { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 10px; 
            margin-top: 20px;
            width: 100%;
          }
          
          .about-stat-box { 
            padding: 10px 12px; 
            border-radius: 14px;
          }
          
          .full-width-mobile {
            grid-column: span 2;
          }
          
          .about-stat-box h3 { font-size: 21px; }
          .about-stat-box span { font-size: 11.5px; }

          .about-right {
            height: 270px;
            margin-top: 5px;
          }
          .about-blob {
            width: 180px;
            height: 180px;
          }
          .about-cards-wrapper {
            width: 180px;
            height: 240px;
            left: 12px;
          }
          .about-card-img {
            border-radius: 20px;
            border: 4px solid rgba(255,255,255,0.9);
          }
        }

        @media(max-width: 360px) {
          .about-left h2 { font-size: 26px; }
          .about-right { height: 230px; }
          .about-cards-wrapper { width: 150px; height: 200px; left: 8px; }
          .about-blob { width: 150px; height: 150px; }
        }
      `}</style>
    </section>
  );
}