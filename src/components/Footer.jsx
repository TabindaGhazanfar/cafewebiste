import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="footer-section" id="contact">

      {/* TOP SHAPE DIVIDER */}
      <div className="custom-shape-divider-top-1778433650">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".15"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".3"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      {/* GLOW BLURS */}
      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      {/* NEWSLETTER */}
      <div className="newsletter">
        <div className="news-left">
          <h3>☕ Stay Updated</h3>
          <p>Subscribe to get special offers and coffee updates.</p>
        </div>

        <div className="news-input">
          <input
            type="email"
            placeholder="Enter your email"
          />
          <button>Subscribe</button>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="footer-wrapper">
        {/* LEFT BRAND SECTION */}
        <div className="footer-left">
          <h1>☕ Coffee Bliss</h1>
          <p>Every cup tells a story. What’s yours?</p>

          {/* SOCIAL (NON-CLICKABLE) */}
          <div className="social-icons">
            <span className="social-icon-disabled"><FaInstagram /></span>
            <span className="social-icon-disabled"><FaFacebookF /></span>
            <span className="social-icon-disabled"><FaTwitter /></span>
            <span className="social-icon-disabled"><FaPinterestP /></span>
          </div>
        </div>

        {/* LINKS SECTION */}
        <div className="footer-links-area">
          {/* QUICK LINKS (NON-CLICKABLE) */}
          <div className="footer-links-box">
            <h3>Quick Links</h3>
            <span className="footer-text-link">Home</span>
            <span className="footer-text-link">About</span>
            <span className="footer-text-link">Menu</span>
            <span className="footer-text-link">Gallery</span>
            <span className="footer-text-link">Contact</span>
          </div>

          {/* OUR MENU (NON-CLICKABLE) */}
          <div className="footer-links-box">
            <h3>Our Menu</h3>
            <span className="footer-text-link">Hot Coffee</span>
            <span className="footer-text-link">Cold Coffee</span>
            <span className="footer-text-link">Desserts</span>
            <span className="footer-text-link">Specials</span>
          </div>

          {/* CONTACT US (NON-CLICKABLE) */}
          <div className="footer-links-box contact-box">
            <h3>Contact Us</h3>
            <div className="footer-text-link"><FaMapMarkerAlt /> Gujrat</div>
            <div className="footer-text-link"><FaPhoneAlt /> +923001234567</div>
            <div className="footer-text-link"><FaEnvelope /> coffeebliss</div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2026 Coffee Bliss. All Rights Reserved.
      </div>

      <style>{`
        /* SECTION BASE STYLES */
        .footer-section {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          background: #4a1c1c; 
          padding: 130px 45px 30px; 
          margin-top: 0;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .custom-shape-divider-top-1778433650 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: 3;
        }

        .custom-shape-divider-top-1778433650 svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 110px;
        }

        .custom-shape-divider-top-1778433650 .shape-fill {
          fill: #ffffff;
        }

        .blur {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          filter: blur(40px);
          z-index: 1;
        }
        .blur1 { width: 320px; height: 320px; top: 60px; left: -120px; }
        .blur2 { width: 260px; height: 260px; right: -100px; bottom: 90px; }

        /* NEWSLETTER BOX */
        .newsletter {
          position: relative;
          z-index: 5;
          max-width: 1140px;
          margin: 0 auto 60px; 
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50px;
          padding: 24px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .news-left h3 {
          color: white;
          font-size: 22px;
          margin: 0 0 6px 0;
          font-weight: 600;
        }

        .news-left p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          margin: 0;
        }

        .news-input {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 30px;
          overflow: hidden;
          width: 460px;
          height: 52px;
          padding: 4px;
          box-sizing: border-box;
        }

        .news-input input {
          flex: 1;
          border: none;
          outline: none;
          padding: 0 20px;
          font-size: 14px;
          color: #333;
          background: transparent;
        }

        .news-input button {
          height: 100%;
          padding: 0 28px;
          border: none;
          border-radius: 25px;
          background: #f7a3a7; 
          color: #4a1c1c;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .news-input button:hover { background: #f5888e; }

        /* FOOTER WRAPPER */
        .footer-wrapper {
          position: relative;
          z-index: 5;
          max-width: 1140px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          gap: 50px;
        }

        .footer-left { max-width: 300px; display: flex; flex-direction: column; gap: 15px; }
        .footer-left h1 { color: white; font-size: 28px; margin: 0; font-weight: 700; }
        .footer-left p { color: rgba(255, 255, 255, 0.7); line-height: 1.6; margin: 0; font-size: 14px; }

        /* NON-CLICKABLE SOCIALS DESKTOP */
        .social-icons { display: flex; gap: 12px; }
        .social-icons .social-icon-disabled {
          width: 38px; height: 38px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; color: white;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: default;
          user-select: none;
        }

        .footer-links-area { display: flex; gap: 80px; }
        .footer-links-box { display: flex; flex-direction: column; min-width: 140px; }
        .footer-links-box h3 { color: white; font-size: 16px; margin: 0 0 18px 0; font-weight: 600; opacity: 0.9; }

        /* NON-CLICKABLE TEXT LINKS DESKTOP */
        .footer-links-box .footer-text-link {
          color: rgba(255, 255, 255, 0.7); margin-bottom: 12px;
          font-size: 14px; display: flex; align-items: center; gap: 10px;
          cursor: default;
          user-select: none;
        }

        .footer-bottom {
          text-align: center; margin-top: 60px; padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.4); font-size: 13px; position: relative; z-index: 5;
        }

        /* ======================================================== */
        /* IPAD / TABLET STYLES */
        /* ======================================================== */
        @media(max-width: 992px) {
          .footer-section { padding-top: 110px; padding-bottom: 30px; padding-left: 24px; padding-right: 24px; }
          .newsletter { flex-direction: column; border-radius: 24px; text-align: center; padding: 25px 20px; margin-bottom: 40px; width: 100%; }
          .news-input { width: 100%; max-width: 450px; }
          .footer-wrapper { flex-direction: column; gap: 30px; align-items: center; text-align: center; }
          .footer-left { max-width: 100%; align-items: center; }
          .social-icons { justify-content: center; }
          .footer-links-area { width: 100%; justify-content: space-between; gap: 20px; }
          .footer-links-box { text-align: left; }
          .footer-links-box .footer-text-link { justify-content: flex-start; }
        }

        /* ======================================================== */
        /* ULTRA COMPACT MOBILE VIEW (MINIMAL HEIGHT & FIXED LINKS) */
        /* ======================================================== */
        @media(max-width: 600px) {
          .footer-section {
            padding: 55px 12px 12px 12px !important; 
          }

          .custom-shape-divider-top-1778433650 svg {
            height: 35px; 
          }

          /* NEWSLETTER COMPACT */
          .newsletter {
            padding: 10px 12px !important;
            border-radius: 12px;
            margin: -25px auto 15px auto !important;
            gap: 6px;
          }
          .news-left h3 { font-size: 14px; margin-bottom: 0px; }
          .news-left p { display: none; } 
          
          .news-input { height: 36px; width: 100%; border-radius: 6px; }
          .news-input input { padding: 0 10px; font-size: 11.5px; }
          .news-input button { padding: 0 12px; font-size: 11.5px; border-radius: 4px; }

          /* BRAND ROW */
          .footer-wrapper { 
            gap: 15px !important; 
            flex-direction: column !important;
            align-items: stretch !important;
            text-align: left !important;
          } 
          
          .footer-left {
            max-width: 100%;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding-bottom: 10px;
          }
          .footer-left h1 { font-size: 18px; }
          .footer-left p { display: none; } 
          
          .social-icons { gap: 6px; }
          .social-icons .social-icon-disabled { width: 28px; height: 28px; font-size: 12px; }

          /* 3 COLUMNS GRID (Zero Scroll Height) */
          .footer-links-area {
            display: grid;
            grid-template-columns: repeat(3, 1fr) !important; 
            gap: 10px 5px !important; 
            margin-top: 5px;
          }

          .contact-box {
            grid-column: span 1 !important; 
          }

          .footer-links-box h3 { font-size: 12px; margin-bottom: 6px; color: #f7a3a7; }
          
          .footer-links-box .footer-text-link { 
            margin-bottom: 4px !important; 
            font-size: 11px; 
            gap: 4px; 
            word-break: break-all; 
          }
          .footer-links-box svg { font-size: 10px; flex-shrink: 0; }

          /* BOTTOM COPYRIGHT */
          .footer-bottom { 
            margin-top: 15px; 
            padding-top: 8px; 
            font-size: 10px; 
          }
        }
      `}</style>
    </footer>
  );
}