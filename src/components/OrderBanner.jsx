import burger from "../assets/p1.png";
import coffee from "../assets/c1.png";

export default function OrderBanner() {

  return (
    <section className="order-banner">

      {/* LEFT IMAGE - Appears only on Laptop/Desktop */}
      <div className="banner-img left-img">
        <img
          src={burger}
          alt="Burger"
        />
      </div>

      {/* CONTENT - Centers perfectly on smaller screens */}
      <div className="banner-content">
        <span className="small-tag">
          ☕ Coffee Bliss
        </span>
        <h2>
          Don’t Wait — Visit Us Today!
        </h2>
        <p>
          Enjoy premium coffee, delicious desserts,
          and cozy café vibes crafted specially
          for unforgettable moments.
        </p>
      </div>

      {/* RIGHT IMAGE - Appears only on Laptop/Desktop */}
      <div className="banner-img right-img">
        <img
          src={coffee}
          alt="Coffee"
        />
      </div>

      <style>{`
        /* SECTION BASE STYLES */
        .order-banner {
          position: relative;
          width: 85%;
          max-width: 1240px;
          margin: 60px auto; 
          background: linear-gradient(135deg, #e79ab4, #d97f9d);
          border-radius: 35px;
          padding: 90px 40px; 
          overflow: hidden;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
        }

        /* CONTENT */
        .banner-content {
          text-align: center;
          max-width: 580px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
          width: 100%;
        }

        /* TAG */
        .small-tag {
          display: inline-block;
          padding: 10px 22px;
          border-radius: 40px;
          background: white;
          color: #b35c74;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.05);
        }

        /* TITLE */
        .banner-content h2 {
          font-size: 48px;
          color: #4a1616;
          line-height: 1.2;
          margin: 0 0 16px 0;
          word-break: break-word;
        }

        /* TEXT */
        .banner-content p {
          color: #4a1e27;
          line-height: 1.7;
          font-size: 17px;
          max-width: 520px;
          margin: auto;
          font-weight: 450;
        }

        /* FLOATING IMAGES STYLING (DESKTOP / LAPTOP) */
        .banner-img {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 35px;
          overflow: hidden;
          box-shadow: 0 18px 35px rgba(0,0,0,0.14);
          background: #ffffff20;
          backdrop-filter: blur(6px);
          z-index: 4;
        }

        .banner-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* DESKTOP SIDE ALIGNMENTS */
        .left-img {
          left: 35px;
          top: 50%;
          transform: translateY(-50%) rotate(-8deg);
        }

        .right-img {
          right: 35px;
          top: 50%;
          transform: translateY(-50%) rotate(8deg);
        }

        /* ======================================================== */
        /* --- LAPTOP RESPONSIVE (1100px down to 901px) --- */
        /* ======================================================== */
        @media(max-width: 1100px) {
          .order-banner { width: 90%; padding: 80px 40px; }
          .banner-content h2 { font-size: 40px; }
          .banner-img { width: 120px; height: 120px; }
          .left-img { left: 20px; }
          .right-img { right: 20px; }
        }

        /* ======================================================== */
        /* --- TABLET VIEW (No Images - Tighter Spacing) --- */
        /* ======================================================== */
        @media(max-width: 900px) {
          .order-banner { 
            padding: 60px 30px; /* Perfectly balanced padding since images are gone */
          }
          
          .banner-content h2 { font-size: 36px; }
          .banner-content p { font-size: 16px; }
          
          /* Hiding images completely on tablet to save code weight and screen layout */
          .banner-img { 
            display: none !important; 
          }
        }

        /* ======================================================== */
        /* --- MOBILE VIEW (Ultra Compact & Highly Readable) --- */
        /* ======================================================== */
        @media(max-width: 576px) {
          .order-banner {
            width: 92%;
            padding: 45px 20px; 
            margin: 40px auto;  
            border-radius: 28px; 
          }

          .small-tag {
            padding: 6px 16px;
            font-size: 12px;
            margin-bottom: 14px;
          }

          .banner-content h2 {
            font-size: 28px;
            line-height: 1.3;
            margin-bottom: 12px;
          }

          .banner-content p {
            font-size: 14px;
            line-height: 1.6;
          }
          
          .banner-img { 
            display: none !important; 
          }
        }

        /* Ultra narrow phone optimization */
        @media(max-width: 360px) {
          .order-banner { padding: 35px 15px; }
          .banner-content h2 { font-size: 24px; }
        }
      `}</style>
    </section>
  );
}