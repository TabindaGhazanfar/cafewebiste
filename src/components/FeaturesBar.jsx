export default function FeaturesBar() {

  const data = [
    {
      icon: "☕",
      title: "Fresh Coffee",
      text: "Premium roasted beans with rich aroma."
    },
    {
      icon: "🌿",
      title: "Natural Ingredients",
      text: "Made with fresh and organic ingredients."
    },
    {
      icon: "✨",
      title: "Premium Taste",
      text: "Crafted carefully for coffee lovers."
    }
  ];

  return (
    <section className="features-bar">
      <div className="features-container">
        {
          data.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                {item.icon}
              </div>
              <div className="feature-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))
        }
      </div>

      <style>{`
        /* SECTION - Heights clear taake content cut na ho */
        .features-bar {
          position: relative;
          background: transparent;
          margin-top: 60px; /* Hero section ke baad ka clear gap */
          margin-bottom: 40px; /* Niche wale section se safe distance */
          padding: 0 40px;
          height: auto !important; /* Fix height ko override kiya */
          min-height: min-content;
          overflow: visible !important; /* Content hide hone se rokne ke liye */
          z-index: 1;
        }

        /* CONTAINER */
        .features-container {
          max-width: 1180px;
          margin: auto;
          background: #ffffff;
          border-radius: 26px;
          padding: 30px 35px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
        }

        /* CARD */
        .feature-card {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 16px;
        }

        /* ICON */
        .feature-icon {
          min-width: 58px;
          height: 58px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          background: linear-gradient(135deg, #ffe3e7, #ffd2d9);
          color: #7a2e2e;
        }

        /* TEXT */
        .feature-content h3 {
          color: #5c1f1f;
          font-size: 18px;
          margin-bottom: 8px;
        }

        .feature-content p {
          color: #777;
          font-size: 13px;
          line-height: 1.7;
          max-width: 210px;
        }

        /* TABLET OPTIMIZATION */
        @media(max-width: 992px) and (min-width: 769px) {
          .features-bar {
            margin-top: 40px;
            margin-bottom: 30px;
            padding: 0 20px;
          }
          .features-container {
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            padding: 22px 20px;
          }
          .feature-card {
            gap: 10px;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .feature-content p {
            max-width: 100%;
          }
        }

        /* MOBILE OPTIMIZATION - Bilkul clean flow */
        @media(max-width: 768px) {
          .features-bar {
            margin-top: 30px; /* Mobile gap */
            margin-bottom: 35px; /* Bottom padding clear ki */
            padding: 0 20px;
            height: auto !important;
          }

          .features-container {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 24px 20px;
            border-radius: 22px;
          }

          .feature-card {
            align-items: center;
            justify-content: flex-start;
            gap: 18px;
            border-bottom: 1px solid #fff0f2;
            padding-bottom: 14px;
          }

          .feature-card:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }

          .feature-icon {
            min-width: 52px;
            height: 52px;
            font-size: 24px;
            border-radius: 15px;
          }

          .feature-content h3 {
            font-size: 16px;
            margin-bottom: 4px;
          }

          .feature-content p {
            font-size: 13px;
            max-width: 100%;
            line-height: 1.5;
          }
        }
      `}</style>
    </section>
  );
}