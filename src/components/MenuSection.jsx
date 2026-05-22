import { useEffect, useState, useRef } from "react";

/* GSAP */
import gsap from "gsap";

/* IMAGES */
import c4 from "../assets/c4.webp";
import c2 from "../assets/c2.webp";
import c3 from "../assets/c3.webp";
import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.webp";

const images = [c4, c2, c3, p1, p2, p3];

export default function MenuSection({ menuItemsData, isLoading }) {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  /* SYNC DATA FROM PROPS */
  useEffect(() => {
    if (!isLoading && menuItemsData && menuItemsData.length > 0) {
      const updatedData = menuItemsData.map((item, index) => ({
        ...item,
        img: images[index] || p3,
      }));

      setMenuItems(updatedData);
      setLoading(false);
    }
  }, [menuItemsData, isLoading]);

  /* LIGHT FLOATING EFFECT */
  useEffect(() => {
    if (loading || menuItems.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.to(".menu-card", {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
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
        {!loading && menuItems.length > 0 ? (
          <div className="menu-grid">
            {menuItems.map((item, i) => (
              <div className="menu-card" key={item.id || i}>
                <div className="img-box">
                  <img src={item.img} alt={item.name} loading="lazy" />
                </div>

                <div className="card-content">
                  <h3>{item.name}</h3>
                  {/* FIXED: item.desc ko item.description kiya taake db.json se data map ho sake */}
                <p className="desc">{item.desc}</p>

                  <div className="bottom">
                    <span>{item.price}</span>
                    <button className="card-order-btn">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", color: "#6b2d2d", padding: "40px", fontWeight: "600" }}>
            Loading delicious menu...
          </div>
        )}

        {/* BUTTON */}
        {!loading && (
          <div className="view-btn-wrap">
            <button className="view-btn">
              View Full Menu
            </button>
          </div>
        )}
      </div>

      <style>{`
        .menu-section {
          position: relative;
          background: linear-gradient(180deg, #fdecef, #fff7f8);
          padding: 60px 18px;
          overflow: hidden;
          z-index: 10;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          filter: blur(10px);
          z-index: 1;
        }

        .blob1 { width: 220px; height: 220px; top: 100px; left: -80px; }
        .blob2 { width: 180px; height: 180px; right: -60px; bottom: 120px; }

        .menu-wrapper { position: relative; z-index: 5; max-width: 1200px; margin: auto; }

        .title { text-align: center; margin-bottom: 28px; }

        .tag {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 40px;
          background: rgba(255,255,255,0.8);
          border: 1px solid #f3c8d0;
          color: #d78c9a;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 14px;
        }

        .title h2 { font-size: 42px; color: #6b2d2d; margin-bottom: 12px; line-height: 1.2; font-weight: 700; }
        .title p { max-width: 620px; margin: auto; color: #7c6666; font-size: 15px; line-height: 1.6; }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 35px;
          margin-bottom: 35px;
          align-items: start; /* FIXED: Dono columns ko upar se completely line up rakhega */
        }

        .menu-card {
          background: linear-gradient(180deg, #7a2e2e, #5b1d1d);
          border-radius: 24px;
          padding: 14px;
          box-shadow: 0 10px 24px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          height: 100%; 
          margin-top: 0 !important; /* FIXED: Unwanted alignment shift ko push hone se rokega */
          transition: 0.3s ease;
        }

        .menu-card:hover { transform: translateY(-4px); }

        .img-box {
          width: 100%;
          height: 180px;
          background: white;
          border-radius: 18px;
          overflow: hidden;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .img-box img { width: 100%; height: 100%; object-fit: contain; }

        .card-content { display: flex; flex-direction: column; flex-grow: 1; }
        .card-content h3 { color: white; font-size: 20px; margin-bottom: 6px; font-weight: 700; }
        
        .desc { 
          color: #f3dede; 
          font-size: 13px; 
          line-height: 1.5; 
          margin-bottom: 16px; 
          flex-grow: 1; /* FIXED: Footer buttons ko card ke aamne-samne level par align rakhega */
        }

        .bottom { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: auto; }
        .bottom span { color: white; font-size: 22px; font-weight: 700; }

        .card-order-btn {
          border: none;
          border-radius: 30px;
          padding: 8px 14px;
          background: white;
          color: #6b2d2d;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
        }

        .view-btn-wrap { display: flex; justify-content: center; margin-top: 10px; }
        .view-btn {
          padding: 14px 34px;
          border: none;
          border-radius: 40px;
          background: linear-gradient(135deg, #7a2e2e, #5c1f1f);
          color: white;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }

        @media(max-width: 768px) {
          .menu-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .title h2 { font-size: 32px; }
        }

        @media(max-width: 480px) {
          .menu-section { padding: 35px 14px; }
          .title { margin-bottom: 18px; }
          .title h2 { font-size: 24px; margin-bottom: 8px; }
          .title p { font-size: 12px; padding: 0 6px; }
          .tag { padding: 6px 14px; font-size: 11px; margin-bottom: 10px; }
          .menu-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 20px; }
          .menu-card { padding: 10px; border-radius: 18px; }
          .img-box { height: 100px; border-radius: 12px; margin-bottom: 10px; }
          .card-content h3 { font-size: 13px; margin-bottom: 4px; }
          .desc { font-size: 10px; line-height: 1.3; margin-bottom: 10px; }
          .bottom span { font-size: 16px; }
          .card-order-btn { padding: 5px 10px; font-size: 9px; }
          .view-btn { padding: 12px 28px; font-size: 13px; }
        }
      `}</style>
    </section>
  );
}