import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-wrapper">
      <div className="navbar">
        {/* LOGO */}
        <div className="logo">
          ☕ <span>Cafe Bliss</span>
        </div>

        {/* LINKS */}
        <div className={menuOpen ? "links active" : "links"}>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          {/* BUTTON */}
          <button className="order-btn">Order Now</button>

          {/* MENU ICON */}
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      <style>{`
        /* FONT & GLOBAL FIXES */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        /* Taake poori website par koi bhi cheez right side par horizontal scroll na banaye */
        html, body {
          overflow-x: hidden;
          width: 100%;
        }

        /* WRAPPER (Desktop/Tablet) */
        .nav-wrapper {
          position: fixed;
          top: 18px;
          left: 0;
          right: 0;
          margin: 0 auto;
          width: 100%;
          max-width: 1180px;
          padding: 0 16px;
          display: flex;
          justify-content: center;
          z-index: 1000;
        }

        /* NAVBAR */
        .navbar {
          width: 100%;
          padding: 14px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-radius: 60px;
          background: rgba(255, 228, 232, 0.72);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.4);
          transition: 0.4s ease;
          position: relative;
        }

        .navbar:hover {
          transform: translateY(-2px);
        }

        /* LOGO */
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #6b2d2d;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.3px;
          cursor: pointer;
          white-space: nowrap;
          transition: 0.3s;
        }

        .logo:hover {
          transform: scale(1.03);
        }

        /* LINKS */
        .links {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          gap: 32px;
        }

        .links a {
          position: relative;
          text-decoration: none;
          color: #6b2d2d;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.4px;
          transition: 0.3s;
        }

        .links a::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background: #6b2d2d;
          border-radius: 10px;
          transform: translateX(-50%);
          transition: 0.3s ease;
        }

        .links a:hover::after {
          width: 100%;
        }

        /* RIGHT SIDE */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .order-btn {
          padding: 11px 24px;
          border: none !important;
          border-radius: 30px !important;
          background: linear-gradient(135deg, #7a2e2e, #5c1f1f) !important;
          color: white !important;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.3px;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 6px 18px rgba(107, 45, 45, 0.25);
          transition: 0.35s ease;
        }

        .order-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 12px 22px rgba(107, 45, 45, 0.3);
        }

        .menu-icon {
          display: none;
          font-size: 24px;
          color: #6b2d2d;
          cursor: pointer;
        }

        /* ========================= */
        /* TABLET RESPONSIVE */
        /* ========================= */
        @media(max-width: 992px) {
          .navbar {
            padding: 14px 22px;
            border-radius: 45px;
          }
          .links {
            gap: 22px;
          }
          .links a {
            font-size: 13px;
          }
          .logo {
            font-size: 20px;
          }
          .order-btn {
            padding: 10px 18px;
            font-size: 13px;
          }
        }

        /* ========================= */
        /* MOBILE RESPONSIVE PERFECT FIX */
        /* ========================= */
        @media(max-width: 768px) {
          .nav-wrapper {
            top: 14px;
            left: 16px !important;
            right: 16px !important;
            width: calc(100vw - 32px) !important; /* Screen size ke mutabiq exact 16px padding dono taraf chhorega */
            padding: 0 !important;
            transform: none !important; /* Translate hata diya taake alignment kharab na ho */
            margin: 0;
          }

          .navbar {
            width: 100%;
            padding: 10px 16px;
            border-radius: 50px; /* Perfect rounded floating capsule shape */
          }

          .order-btn {
            display: none !important;
          }

          .menu-icon {
            display: block;
          }

          /* Mobile Dropdown Menu */
          .links {
            position: absolute;
            top: 55px;
            right: 4px;
            width: 190px;
            background: rgba(255, 240, 243, 0.98);
            backdrop-filter: blur(18px);
            border-radius: 20px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: 0.3s ease;
            z-index: 1001;
          }

          .links.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .links a {
            font-size: 15px;
            width: 100%;
          }
        }

        /* Choti screens (jaise Galaxy S20/iPhone) ke liye perfect padding symmetry */
        @media(max-width: 480px) {
          .nav-wrapper {
            left: 12px !important;
            right: 12px !important;
            width: calc(100vw - 24px) !important;
            top: 12px;
          }
          .logo {
            font-size: 16px;
          }
          .navbar {
            padding: 10px 14px;
          }
        }
      `}</style>
    </div>
  );
}