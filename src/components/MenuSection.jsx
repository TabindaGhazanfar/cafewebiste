import { useEffect, useState, useRef } from "react";

/* GSAP */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* IMAGES */
import c4 from "../assets/c4.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

gsap.registerPlugin(ScrollTrigger);

const images = [c4, c2, c3, p1, p2, p3];

export default function MenuSection() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true); 
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      fetch("http://localhost:5000/menu")
        .then((res) => res.json())
        .then((data) => {
          const updatedData = data.map((item, index) => ({
            ...item,
            img: images[index] || p3,
          }));

          setMenuItems(updatedData);
          setLoading(false); 

          /* TITLE ANIMATION */
          gsap.from(".title", {
            scrollTrigger: {
              trigger: ".title",
              start: "top 85%",
            },
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          });

          /* CARDS ANIMATION */
          gsap.from(".menu-card", {
            scrollTrigger: {
              trigger: ".menu-grid",
              start: "top 80%",
            },
            y: 60,
            opacity: 0,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out",
          });
        })
        .catch((err) => {
          console.log("Fetch Error:", err);
          setLoading(false);
        });

    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  useEffect(() => {
    if (!loading && menuItems.length > 0) {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh(); 

        gsap.fromTo(".view-btn", 
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".view-btn-wrap",
              start: "top 95%", 
              toggleActions: "play none none none"
            }
          }
        );
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [loading, menuItems]);

  return (
    <section className="menu-section" id="menu" ref={sectionRef}>
      {/* BLOBS */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="menu-wrapper">
        {/* TITLE */}
        <div className="title">
          <span className="tag">✨ Our Bestsellers</span>
          <h2>Signature Coffee & Desserts</h2>
          <p>
            Freshly brewed coffee and delicious desserts crafted with love every
            single day.
          </p>
        </div>

        {/* GRID */}
        <div className="menu-grid">
          {menuItems.map((item, i) => (
            <div className="menu-card" key={i}>
              <div className="img-box">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="card-content">
                <h3>{item.name}</h3>
                <p className="desc">{item.desc}</p>
                <div className="bottom">
                  <span>{item.price}</span>
                  <button className="card-order-btn">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW BUTTON */}
        {!loading && (
          <div className="view-btn-wrap">
            <button className="view-btn">View Full Menu</button>
          </div>
        )}
      </div>

      <style>{`
        .menu-section {
          position: relative;
          background: linear-gradient(180deg, #fdecef, #fff7f8);
          padding: 80px 40px 100px; /* Laptop standard padding right/left barhai */
          overflow: visible; 
          z-index: 10;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          filter: blur(10px);
          z-index: 1;
        }

        .blob1 { width: 280px; height: 280px; top: 140px; left: -80px; }
        .blob2 { width: 220px; height: 220px; right: -60px; bottom: 180px; }

        .menu-wrapper {
          position: relative;
          z-index: 5;
          max-width: 1200px; /* Maximum desktop bounds safety */
          margin: auto;
        }

        .title { text-align: center; margin-bottom: 35px; }
        .tag {
          display: inline-block;
          padding: 10px 24px;
          border-radius: 40px;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid #f3c8d0;
          color: #d78c9a;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .title h2 { font-size: 56px; color: #6b2d2d; margin-bottom: 16px; line-height: 1.2; }
        .title p { max-width: 620px; margin: auto; color: #7c6666; font-size: 15px; line-height: 1.6; }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px; /* Spacing loose rakhi takay tight na ho */
          margin-top: 60px;
        }

        .menu-card {
          position: relative;
          background: linear-gradient(180deg, #7a2e2e, #5b1d1d);
          border-radius: 32px;
          padding: 16px; /* Content safety bounds inside card */
          overflow: hidden;
          width: 100%;
          box-shadow: 0 15px 35px rgba(0,0,0,0.12);
          transition: transform 0.25s cubic-bezier(0.1, 0.1, 0.05, 1.0), box-shadow 0.25s ease-out;
        }

        .menu-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 50px rgba(0,0,0,0.18);
          transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
        }

        .img-box {
          position: relative;
          width: 100%;
          height: 200px;
          background: linear-gradient(180deg, #fff, #fff6f7);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .img-box img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover;
          transition: transform 0.25s ease-out;
        }

        .menu-card:hover .img-box img {
          transform: scale(1.06);
          transition: transform 0.1s ease-out;
        }

        .card-content {
          padding: 0 4px; /* text elements padding safety */
        }
        .card-content h3 { color: white; font-size: 24px; margin-bottom: 6px; }
        .desc { color: #f3dede; font-size: 14px; margin-bottom: 22px; line-height: 1.7; }

        .bottom { 
          display: flex; 
          align-items: center; 
          justify-content: space-between; 
          flex-wrap: nowrap; /* Horizontal structure locked */
        }
        .bottom span { color: #ffe1e1; font-size: 24px; font-weight: 700; }

        .card-order-btn {
          padding: 10px 22px;
          border: none !important;
          border-radius: 30px !important;
          background: #fff0f3 !important;
          color: #6b2d2d !important;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap; /* Prevents text formatting breaks */
          transition: transform 0.35s ease, background 0.35s ease, box-shadow 0.35s ease;
        }

        .card-order-btn:hover {
          background: white !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }

        .view-btn-wrap {
          display: flex;
          justify-content: center;
          margin-top: 60px; 
          position: relative;
          z-index: 99;
          width: 100%;
        }

        .view-btn {
          padding: 18px 44px;
          border: none;
          border-radius: 60px;
          background: linear-gradient(135deg, #7a2e2e, #5c1f1f);
          color: white;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.5px;
          cursor: pointer;
          box-shadow: 0 14px 30px rgba(0,0,0,0.14);
          transition: all 0.4s ease;
        }

        .view-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        /* ======================================================== */
        /* --- LAPTOP SCREEN OPTIMIZATION (1024px - 1366px) --- */
        /* ======================================================== */
        @media(max-width: 1200px) {
          .menu-section { padding: 70px 25px 90px; }
          .menu-grid { gap: 18px; } /* Tight area optimization */
          
          .card-content h3 { font-size: 21px; }
          .bottom span { font-size: 21px; }
          .card-order-btn { padding: 9px 16px !important; font-size: 13px; }
        }

        /* ======================================================== */
        /* --- TABLET SCREEN FIX (iPad Mini / 992px to 481px) --- */
        /* ======================================================== */
        @media(max-width: 992px) { 
          .menu-section { padding: 60px 24px 80px; }
          
          .title { margin-bottom: 45px; }
          .title h2 { font-size: 40px; margin-bottom: 12px; }
          .title p { font-size: 14px; }
          
          .menu-grid { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 20px; 
            margin-top: 50px; 
          }
          
          .img-box { 
            height: 180px; 
            border-radius: 20px;
          }
          
          .menu-card {
            max-width: 340px; 
            padding: 14px;
            border-radius: 28px;
          }

          .card-content h3 { font-size: 20px; }
          .desc { font-size: 13px; margin-bottom: 18px; }
          .bottom span { font-size: 19px; }
          .card-order-btn { padding: 8px 16px !important; font-size: 12px; }
        }

        /* ======================================================== */
        /* --- MOBILE SCREEN CORRECTION (480px & Under) --- */
        /* ======================================================== */
        @media(max-width: 480px){ 
          .menu-section { padding: 45px 12px 60px; }
          
          .title { margin-bottom: 25px; }
          .title h2 { font-size: 28px; margin-bottom: 10px; }
          .title p { font-size: 13px; }
          .tag { padding: 6px 16px; font-size: 12px; margin-bottom: 12px; }
          
          .menu-grid { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 10px; 
            margin-top: 30px; 
          }
          
          .menu-card {
            max-width: 100%; 
            padding: 10px;
            border-radius: 20px;
          }
          
          .img-box { 
            height: 115px; 
            border-radius: 14px;
          }
          
          .card-content { text-align: left; }
          .card-content h3 { font-size: 14px; margin-bottom: 2px; padding-left: 2px; }
          .desc { font-size: 10px; margin-bottom: 12px; line-height: 1.3; padding-left: 2px; }
          
          .bottom { 
            display: flex;
            flex-direction: row; 
            align-items: center; 
            justify-content: space-between; 
            width: 100%;
            padding: 0 2px;
          }
          
          .bottom span { 
            font-size: 15px; 
            font-weight: 700;
          }
          
          .card-order-btn { 
            padding: 5px 10px !important; 
            font-size: 10px !important;
            border-radius: 16px !important;
          }

          .view-btn-wrap { margin-top: 30px; }
          .view-btn { padding: 12px 28px; font-size: 14px; }
        }

        /* Extremely narrow devices setup */
        @media(max-width: 350px) {
          .menu-grid { gap: 6px; }
          .menu-card { padding: 6px; }
          .img-box { height: 95px; }
          .card-content h3 { font-size: 12px; }
          .bottom span { font-size: 13px; }
          .card-order-btn { padding: 4px 8px !important; font-size: 9px !important; }
        }
      `}</style>
    </section>
  );
}