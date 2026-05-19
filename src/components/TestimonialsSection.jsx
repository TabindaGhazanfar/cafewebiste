import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);

 
       useEffect(() => {
  fetch("/db.json")
    .then((res) => res.json())
    .then((data) => {
      setTestimonials(data.testimonials);

      /* SWIPER ANIMATION */
      setTimeout(() => {
        gsap.from(".mySwiper", {
          scrollTrigger: {
            trigger: ".mySwiper",
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      }, 300);

      /* FLOATING CARDS */
      setTimeout(() => {
        gsap.to(".test-card", {
          y: -6,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.12,
        });
      }, 500);
    })
    .catch((err) => console.log(err));
}, []);

  return (
    <section className="testimonial-section">
      {/* BLURS */}
      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      <div className="test-wrapper">
        {/* TITLE */}
        <div className="title">
          <span className="tag">✨ Testimonials</span>
          <h2>What Our Customers Say</h2>
          <p>
            Warm moments, delicious coffee, and unforgettable memories shared by our lovely customers.
          </p>
        </div>

        {/* SWIPER */}
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
          speed={1500}
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
                {/* QUOTE */}
                <div className="quote">“</div>

                {/* REVIEW */}
                <p className="review">{item.review}</p>

                {/* USER */}
                <div className="bottom">
                  <div className="profile">{item.name ? item.name.charAt(0) : "U"}</div>
                  <div className="info">
                    <h3>{item.name}</h3>
                    <span className="stars">{"⭐".repeat(item.rating || 5)}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        /* TESTIMONIAL SECTION */
        .testimonial-section {
          position: relative;
          overflow: hidden;
          background: white;
          margin-top: -30px;
          padding: 70px 20px 110px; /* Safe padding for bottom curve */
          z-index: 20;
        }

        /* BOTTOM CURVE */
        .bottom-curve {
          position: absolute;
          bottom: -70px;
          left: -5%;
          width: 110%;
          height: 120px;
          background: #fff7f8;
          border-radius: 50% 50% 0 0;
          z-index: -1;
        }

        /* BLURS */
        .blur {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          z-index: -1;
        }

        .blur1 {
          width: 220px;
          height: 220px;
          background: #ffdbe5;
          top: 100px;
          left: -80px;
        }

        .blur2 {
          width: 220px;
          height: 220px;
          background: #ffe9cb;
          bottom: 100px;
          right: -80px;
        }

        /* WRAPPER */
        .test-wrapper {
          position: relative;
          z-index: 20;
          max-width: 1500px;
          margin: auto;
        }

        /* TITLE */
        .title {
          position: relative;
          z-index: 50;
          text-align: center;
          margin-bottom: 40px;
          opacity: 1 !important;
          visibility: visible !important;
        }

        /* TAG */
        .tag {
          display: inline-block;
          padding: 10px 24px;
          border-radius: 40px;
          background: white;
          border: 1px solid #f3d6dc;
          color: #d78c9a;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .title h2 {
          font-size: 52px;
          color: #6b2d2d;
          margin-bottom: 15px;
        }

        .title p {
          max-width: 650px;
          margin: auto;
          color: #7a6666;
          line-height: 1.8;
          font-size: 15px;
        }

        /* SWIPER */
        .mySwiper {
          padding: 30px 0 40px; /* Bottom padding balance kiya */
          opacity: 1 !important;
          overflow: visible !important;
        }

        /* CARD WIDTH */
        .custom-slide {
          width: 350px !important;
        }

        /* SIDE CARDS */
        .swiper-slide {
          opacity: 1;
          transform: scale(0.92);
          transition: all 0.6s ease;
        }

        .swiper-wrapper {
          transition-timing-function: linear !important;
        }

        /* ACTIVE CARD */
        .swiper-slide-active {
          transform: scale(1) !important;
          z-index: 10;
        }

        /* CARD */
        .test-card {
          position: relative;
          min-height: 210px;
          padding: 30px 26px;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.07);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }

        .test-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.10);
        }

        /* COLORS */
        .color0 { background: linear-gradient(135deg, #ffdbe5, #fff3f6); }
        .color1 { background: linear-gradient(135deg, #ffe7c9, #fff6ea); }
        .color2 { background: linear-gradient(135deg, #d8f7ff, #effcff); }
        .color3 { background: linear-gradient(135deg, #eddcff, #faf3ff); }

        /* QUOTE */
        .quote {
          position: absolute;
          top: 5px;
          left: 16px;
          font-size: 70px;
          color: rgba(255,255,255,0.65);
          font-family: cursive;
        }

        /* REVIEW */
        .review {
          margin-top: 35px;
          margin-bottom: 22px;
          font-size: 14px;
          line-height: 1.7;
          color: #5d4d4d;
        }

        /* BOTTOM */
        .bottom {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* PROFILE */
        .profile {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7a2e2e, #5a1f1f);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 700;
        }

        /* INFO */
        .info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .info h3 {
          color: #6b2d2d;
          font-size: 18px;
          margin-bottom: 3px;
        }

        .stars {
          font-size: 13px;
        }

        /* =====================================
           1. TABLET VIEW (max-width: 1024px)
        ===================================== */
        @media (max-width: 1024px) {
          .testimonial-section {
            padding: 50px 20px 80px; /* Swiper aur footer ke gap ko manage karne ke liye */
          }
          .mySwiper {
            padding: 20px 0 30px;
          }
          .custom-slide {
            width: 300px !important;
          }
        }

        /* =====================================
           2. MOBILE VIEW (max-width: 768px)
        ===================================== */
        @media (max-width: 768px) {
          .testimonial-section {
            margin-top: -10px; 
            padding: 35px 15px 65px; /* Bottom spacing tight aur sleek rakhi hai */
          }

          .tag {
            padding: 6px 16px;
            font-size: 12px;
            margin-bottom: 12px;
          }

          .title {
            margin-bottom: 20px;
          }

          .title h2 {
            font-size: 28px;
            line-height: 1.3;
            margin-bottom: 10px;
          }

          .title p {
            font-size: 13px;
            line-height: 1.6;
            padding: 0 10px;
          }

          /* Swiper spacing before footer curve */
          .mySwiper {
            padding: 10px 0 25px; 
          }

          .custom-slide {
            width: 270px !important; 
          }

          .test-card {
            min-height: 170px;
            padding: 20px 18px;
            border-radius: 14px;
          }

          .quote {
            font-size: 50px;
            top: 0px;
            left: 12px;
          }

          .review {
            margin-top: 25px;
            margin-bottom: 15px;
            font-size: 13px;
            line-height: 1.5;
          }

          .profile {
            width: 42px;
            height: 42px;
            font-size: 18px;
          }

          .info h3 {
            font-size: 15px;
          }

          .stars {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}