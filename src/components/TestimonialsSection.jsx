import { useEffect, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function TestimonialsSection({ testimonialsDataFromDb, isLoading }) {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // DATA SYNC FROM PROPS
  useEffect(() => {
    if (!isLoading && testimonialsDataFromDb && testimonialsDataFromDb.length > 0) {
      setTestimonials(testimonialsDataFromDb);
      setLoading(false);
    } else if (!isLoading && (!testimonialsDataFromDb || testimonialsDataFromDb.length === 0)) {
      setLoading(false); // Data empty hone par loop infinite na chale
    }
  }, [testimonialsDataFromDb, isLoading]);

  // FLOATING CARD ANIMATION
  useEffect(() => {
    if (loading || testimonials.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.to(".test-card", {
        y: -6,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.1,
      });
    });

    return () => ctx.revert();
  }, [loading, testimonials]);

  return (
    <section className="testimonial-section">
      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      <div className="test-wrapper">
        {/* TITLE */}
        <div className="title">
          <span className="tag">✨ Our Reviews</span>
          <h2>What Our Customers Say</h2>
          <p>
            Warm moments, delicious coffee, and unforgettable memories shared
            by our lovely customers.
          </p>
        </div>

        {/* SWIPER / LOADER */}
        {loading ? (
          <div style={{ textAlign: "center", color: "#6b2d2d", padding: "20px" }}>
            Loading Reviews...
          </div>
        ) : testimonials.length === 0 ? (
          <div style={{ textAlign: "center", color: "#7a6666", padding: "20px" }}>
            No reviews available right now.
          </div>
        ) : (
          <Swiper
            effect={"coverflow"}
            centeredSlides={true}
            grabCursor={true}
            loop={testimonials.length > 2}
            slidesPerView={"auto"}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            speed={1200}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 80,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={item.id || index} className="custom-slide">
                <div className={`test-card color${index % 4}`}>
                  <div className="quote">“</div>
                  <p className="review">{item.review || "No review content provided."}</p>
                  <div className="bottom">
                    <div className="profile">
                      {item.name ? item.name.charAt(0) : "U"}
                    </div>
                    <div className="info">
                      <h3>{item.name || "Anonymous User"}</h3>
                      <span className="stars">
                        {"⭐".repeat(item.rating || 5)}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <style>{`
        .testimonial-section { position: relative; overflow: hidden; background: #ffffff !important; margin-top: -30px; padding: 70px 20px 110px; z-index: 20; }
        .blur { position: absolute; border-radius: 50%; filter: blur(40px); z-index: -1; }
        .blur1 { width: 220px; height: 220px; background: #ffdbe5; top: 100px; left: -80px; }
        .blur2 { width: 220px; height: 220px; background: #ffe9cb; bottom: 100px; right: -80px; }
        .test-wrapper { position: relative; z-index: 20; max-width: 1500px; margin: auto; }
        .title { text-align: center; margin-bottom: 40px; }
        .title h2 { font-size: 52px; color: #6b2d2d; margin-bottom: 15px; }
        .title p { max-width: 650px; margin: auto; color: #7a6666; line-height: 1.8; font-size: 15px; }
        .tag { display: inline-block; padding: 10px 24px; border-radius: 40px; background: white; border: 1px solid #f3d6dc; color: #d78c9a; font-size: 14px; font-weight: 600; margin-bottom: 20px; box-shadow: 0 8px 20px rgba(0,0,0,0.05); }
        .mySwiper { padding: 30px 0 40px; overflow: visible !important; }
        .custom-slide { width: 350px !important; }
        .swiper-slide { opacity: 1; transform: scale(0.92); transition: transform 0.6s ease, opacity 0.6s ease; }
        .swiper-wrapper { transition-timing-function: ease-out !important; }
        .swiper-slide-active { transform: scale(1) !important; z-index: 10; }
        .test-card { position: relative; min-height: 210px; padding: 30px 26px; border-radius: 18px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.07); transition: box-shadow 0.3s ease; }
        .color0 { background: linear-gradient(135deg, #ffdbe5, #fff3f6); }
        .color1 { background: linear-gradient(135deg, #ffe7c9, #fff6ea); }
        .color2 { background: linear-gradient(135deg, #d8f7ff, #effcff); }
        .color3 { background: linear-gradient(135deg, #eddcff, #faf3ff); }
        .quote { position: absolute; top: 5px; left: 16px; font-size: 70px; color: rgba(255,255,255,0.65); font-family: cursive; }
        .test-card .review { margin-top: 35px; margin-bottom: 22px; font-size: 14px; line-height: 1.7; color: #5d4d4d; }
        .test-card .info h3 { color: #6b2d2d; font-size: 18px; margin-bottom: 3px; }
        .bottom { display: flex; align-items: center; gap: 10px; }
        .profile { width: 55px; height: 55px; border-radius: 50%; background: linear-gradient(135deg, #7a2e2e, #5a1f1f); color: white; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 700; }
        .info { display: flex; flex-direction: column; justify-content: center; }
        .stars { font-size: 13px; }
        @media (max-width: 1024px) { .testimonial-section { padding: 50px 20px 80px; } .mySwiper { padding: 20px 0 30px; } .custom-slide { width: 300px !important; } }
        @media (max-width: 768px) { .testimonial-section { margin-top: -10px; padding: 35px 15px 65px; } .tag { padding: 6px 16px; font-size: 12px; margin-bottom: 12px; } .title { margin-bottom: 20px; } .title h2 { font-size: 28px !important; line-height: 1.3; margin-bottom: 10px; } .title p { font-size: 13px !important; line-height: 1.6; padding: 0 10px; } .mySwiper { padding: 10px 0 25px; } .custom-slide { width: 270px !important; } .test-card { min-height: 170px; padding: 20px 18px; border-radius: 14px; } .quote { font-size: 50px; top: 0px; left: 12px; } .test-card .review { margin-top: 25px; margin-bottom: 15px; font-size: 13px; line-height: 1.5; } .profile { width: 42px; height: 42px; font-size: 18px; } .test-card .info h3 { font-size: 15px !important; } .stars { font-size: 11px; } }
      `}</style>
    </section>
  );
}