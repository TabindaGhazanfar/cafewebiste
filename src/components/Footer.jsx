import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import Threads from './Threads';

export default function Footer() {
  return (
    // ⬇️ lg:pt-40 aur lg:pb-16 add kiya hai laptop view ki height barhanay ke liye
<footer id="contact" className="relative bg-[#4a1c1c] text-white pt-24 sm:pt-32 lg:pt-40 pb-6 lg:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
{/* 🌊 WEBGL ANIMATED THREADS BACKGROUND */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0">
        <Threads
          color={[0.96, 0.64, 0.65]} // #f7a3a7 ka normalized RGB color code
          amplitude={1.5}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>


      {/* 🔥 WAVE SHAPE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="block w-full h-[70px] sm:h-[80px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".15"
            fill="#ffffff"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".3"
            fill="#ffffff"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#ffffff"
          />
        </svg>
      </div>


      {/* NEWSLETTER */}
      <div className="relative z-20 max-w-6xl mx-auto mb-6 bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-3">

        <div className="text-center md:text-left">
          <h3 className="text-base sm:text-xl font-semibold">☕ Stay Updated</h3>
          <p className="text-white/70 text-xs sm:text-sm hidden sm:block">
            Subscribe to get special offers and coffee updates.
          </p>
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch bg-white rounded-lg p-1 gap-2 sm:gap-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 text-sm text-gray-700 outline-none rounded-md sm:rounded-none"
          />

          <button className="bg-[#f7a3a7] text-[#4a1c1c] font-semibold px-4 py-2 text-sm rounded-md sm:rounded-full hover:bg-[#f5888e] transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="relative z-20 max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-5 sm:gap-8">

        {/* LEFT */}
        <div className="flex flex-col gap-2 max-w-sm">
          
          {/* ⬇️ CHANGES MADE HERE: Wrap logo in 'a' tag to point to #home */}
          <a href="#home" className="hover:opacity-80 transition-opacity inline-block w-fit">
            <h1 className="text-xl sm:text-2xl font-bold">☕ Coffee Bliss</h1>
          </a>
          <p className="text-white/70 text-xs sm:text-sm hidden md:block">
            Every cup tells a story. What’s yours?
          </p>

          <div className="flex gap-2">
            {[FaInstagram, FaFacebookF, FaTwitter, FaPinterestP].map((Icon, i) => (
              <span key={i} className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-xs sm:text-sm">
                <Icon />
              </span>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div className="flex flex-wrap w-full lg:w-auto gap-4 sm:gap-8">

          <div className="flex-1 min-w-[100px]">
            <h3 className="text-sm font-semibold mb-2 text-[#f7a3a7]">Quick Links</h3>
            {["Home","About","Menu","Gallery","Contact"].map((item,i)=>(
              <p key={i} className="text-white/70 text-xs sm:text-sm mb-1">{item}</p>
            ))}
          </div>

          <div className="flex-1 min-w-[100px]">
            <h3 className="text-sm font-semibold mb-2 text-[#f7a3a7]">Our Menu</h3>
            {["Hot Coffee","Cold Coffee","Desserts","Specials"].map((item,i)=>(
              <p key={i} className="text-white/70 text-xs sm:text-sm mb-1">{item}</p>
            ))}
          </div>

          <div className="flex-1 min-w-[120px]">
  <h3 className="text-sm font-semibold mb-2 text-[#f7a3a7]">Contact Us</h3>

  <p className="flex items-start gap-2.5 text-white/70 text-xs sm:text-sm mb-2">
    <FaMapMarkerAlt className="w-4 h-4 text-[#f7a3a7] shrink-0 pt-0.5" /> 
    <span>Gujrat</span>
  </p>

  <p className="flex items-start gap-2.5 text-white/70 text-xs sm:text-sm mb-2">
    <FaPhoneAlt className="w-4 h-4 text-[#f7a3a7] shrink-0 pt-0.5" /> 
    <span>+923001234567</span>
  </p>

  <p className="flex items-start gap-2.5 text-white/70 text-xs sm:text-sm mb-2 break-all">
    <FaEnvelope className="w-4 h-4 text-[#f7a3a7] shrink-0 pt-0.5" /> 
    <span>coffeebliss</span>
  </p>
</div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-20 text-center text-white/50 text-xs mt-6 pt-3 border-t border-white/10">
        © 2026 Coffee Bliss. All Rights Reserved.
      </div>

    </footer>
  );
} 