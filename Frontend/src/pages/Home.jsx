import { Link } from "react-router-dom";
import {
  FaUsers,
  FaTools,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaStar,
  FaHandshake,
  FaRegClock,
  FaArrowRight
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#24243e] text-[#e0e6ed] font-sans">
      {/* Hero */}
      <section className="text-center py-20 px-4 bg-gradient-to-r from-[#232526] to-[#414345] shadow-lg">
        <h2 className="text-5xl font-extrabold text-[#ffe066] mb-4 drop-shadow-lg tracking-tight">
          UrbanElite: Elevate Your Everyday
        </h2>
        <p className="text-lg text-[#f3f3f3] max-w-2xl mx-auto">
          Discover premium home and lifestyle services, delivered by top-rated professionals. UrbanElite brings the future of urban convenience to your doorstep.
        </p>
        <div className="mt-8 space-x-4">
          <Link to="/register" className="bg-[#000000] text-[#232526] px-6 py-3 rounded-md text-lg font-bold shadow-md hover:bg-[#fff6b3] transition-all duration-200">
            Get Started
          </Link>
          <Link to="/register" className="bg-[#232526] border border-[#ffe066] text-[#ffe066] px-6 py-3 rounded-md text-lg font-bold shadow-md hover:bg-[#1a1a2e] transition-all duration-200">
            Become a Provider
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#181a23] py-12 px-6 shadow-inner border-b border-[#ffe066]/10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <FaUsers className="text-4xl text-[#ffe066] mx-auto mb-2" />
            <h3 className="text-xl font-bold">20,000+ Urbanites</h3>
            <p className="text-[#f3f3f3]">Elite users across the city</p>
          </div>
          <div>
            <FaTools className="text-4xl text-[#ffe066] mx-auto mb-2" />
            <h3 className="text-xl font-bold">3,000+ Experts</h3>
            <p className="text-[#f3f3f3]">Verified, skilled, and futuristic professionals</p>
          </div>
          <div>
            <FaCheckCircle className="text-4xl text-[#ffe066] mx-auto mb-2" />
            <h3 className="text-xl font-bold">30+ Premium Services</h3>
            <p className="text-[#f3f3f3]">Home, tech, wellness & more</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gradient-to-r from-[#232526] to-[#414345] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#ffe066]">Why UrbanElite?</h2>
          <p className="text-[#f3f3f3] leading-relaxed max-w-3xl mx-auto">
            UrbanElite is your gateway to a smarter, more connected city life. From smart home cleaning to on-demand tech support, beauty, and repairs — we deliver excellence, transparency, and futuristic convenience. Experience seamless booking, transparent pricing, and elite service quality.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#181a23] py-16 px-6 border-b border-[#ffe066]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#ffe066]">How UrbanElite Works</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <FaRegClock className="text-5xl text-[#ffe066] mx-auto mb-4" />
              <h4 className="text-xl font-semibold">1. Explore Elite Services</h4>
              <p className="text-[#f3f3f3]">Choose from 30+ curated, futuristic services for your urban lifestyle.</p>
            </div>
            <div>
              <FaHandshake className="text-5xl text-[#ffe066] mx-auto mb-4" />
              <h4 className="text-xl font-semibold">2. Book Instantly</h4>
              <p className="text-[#f3f3f3]">Select your time, confirm, and let our experts handle the rest.</p>
            </div>
            <div>
              <FaStar className="text-5xl text-[#ffe066] mx-auto mb-4" />
              <h4 className="text-xl font-semibold">3. Enjoy & Elevate</h4>
              <p className="text-[#f3f3f3]">Relax while UrbanElite delivers. Rate and share your elite experience!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="bg-gradient-to-r from-[#232526] to-[#414345] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#ffe066]">Popular UrbanElite Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Smart Home Cleaning", img: "https://tidycasa.com/wp-content/uploads/2022/12/home-cleaning-extras-large.jpg" },
              { title: "AC & Climate Tech", img: "https://static6.depositphotos.com/1155356/651/i/450/depositphotos_6516796-stock-photo-repairing-ac-compressor.jpg" },
              { title: "Plumbing & IoT", img: "https://media.istockphoto.com/id/1395783965/photo/plumbing-technician-checking-water-installation-with-notepad-ok-gesture.jpg?s=612x612&w=0&k=20&c=At0CYTgR0t5Uw2lf7jIOo4GAh6mUu2WNyDbV2u3bMRs=" },
              { title: "Futuristic Haircare", img: "https://www.greatclips.com/dA/c5a490b5e9/slide2Image/gc-home-clipNotes.png?language_id=1" },
              { title: "Eco Pest Control", img: "https://t4.ftcdn.net/jpg/02/71/16/97/360_F_271169769_Hkz38xdB1S3vBfRQLJhsZ9TFCsze5gED.jpg" },
              { title: "Elite Electricians", img: "https://t3.ftcdn.net/jpg/04/67/65/52/360_F_467655216_z5ZPkarOHB2xJgM3ld09RwnbQ6yTPpU5.jpg" },
            ].map((s) => (
              <div key={s.title} className="bg-[#181a23] rounded-xl shadow-xl hover:shadow-2xl transition-all border border-[#ffe066]/10">
                <img src={s.img} alt={s.title} className="w-full h-48 object-cover rounded-t-xl" />
                <div className="p-4">
                  <h4 className="font-semibold text-lg text-[#ffe066]">{s.title}</h4>
                  <Link to="/login" className="text-sm text-[#ffe066] hover:underline flex items-center mt-2 group">
                    Book Now <FaArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#181a23] py-16 px-6 border-b border-[#ffe066]/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-[#ffe066]">UrbanElite Experiences</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { name: "Riya S.", review: "Booked a smart electrician in minutes. UrbanElite is truly next-gen!" },
              { name: "Meena T.", review: "Salon-at-home was futuristic and flawless. Highly recommend UrbanElite." },
              { name: "Karthik M.", review: "UrbanElite made my AC upgrade seamless and affordable." },
            ].map((t, i) => (
              <div key={i} className="bg-[#232526] p-4 rounded-xl shadow-lg border border-[#ffe066]/10">
                <p className="text-[#f3f3f3] mb-2 italic">“{t.review}”</p>
                <h5 className="text-sm font-semibold text-[#ffe066]">{t.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#232526] to-[#414345] text-[#f3f3f3] mt-12 border-t border-[#ffe066]/20">
        <div className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-2 text-[#ffe066]">UrbanElite</h4>
            <p className="text-sm text-[#f3f3f3]">The future of urban living, delivered to you.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-[#ffe066]">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/login" className="hover:underline">Login</Link></li>
              <li><Link to="/register" className="hover:underline">Register</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-[#ffe066]">Connect</h4>
            <p className="flex items-center gap-2 text-sm"><FaPhoneAlt /> +91 98765 43210</p>
            <p className="flex items-center gap-2 text-sm"><FaEnvelope /> support@urbanelite.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-[#ffe066]">Newsletter</h4>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-2 py-1 rounded text-[#232526]"
            />
            <button className="bg-[#ffe066] text-[#232526] px-4 py-1 mt-2 rounded hover:bg-[#fff6b3] font-bold transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-center text-sm py-4 border-t border-[#ffe066]/10 text-[#f3f3f3]">
          © {new Date().getFullYear()} UrbanElite. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
