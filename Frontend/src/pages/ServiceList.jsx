import { useEffect, useState } from "react";
import api from "../utils/api";
import { FaMapMarkerAlt, FaTag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await api.get("/services/getservices");
        setServices(res.data);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#181a23] to-[#ffe066] py-12 px-6 text-[#ffe066] font-sans">
      <h2 className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg tracking-tight text-[#ffe066]">
        Explore UrbanElite Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-[#181a23] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 border border-[#ffe066]/20 backdrop-blur-lg flex flex-col"
          >
            {service.image && (
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover rounded-t-3xl border-b border-[#ffe066]/10"
              />
            )}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-2xl font-bold mb-2 text-[#ffe066]">
                {service.title}
              </h3>
              <p className="text-[#f3f3f3] mb-3 text-base">
                {service.description}
              </p>
              <div className="flex items-center text-sm text-[#ffe066]/80 mb-2 gap-2">
                <FaMapMarkerAlt className="text-[#ffe066]" />
                <span>{service.location}</span>
              </div>
              <div className="flex items-center text-sm text-[#ffe066]/80 mb-4 gap-2">
                <FaTag className="text-[#ffe066]" />
                <span>{service.category}</span>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <p className="text-2xl font-extrabold text-[#ffe066]">
                  ₹{service.price}
                </p>
                <button className="bg-[#ffe066] text-black text-md px-6 py-2 rounded-full hover:bg-[#fff6b3] transition font-bold shadow-md" onClick={() => navigate("/booking")}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
