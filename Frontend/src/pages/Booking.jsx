import { useState, useEffect } from "react";
import api from "../utils/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CalendarDays, MapPin, Clock, Package } from "lucide-react";

const Booking = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [providerId, setProviderId] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await api.get("/services/getservices");
        setServices(res.data);
      } catch (err) {
        console.error("Error loading services:", err);
      }
    };
    fetchServices();
  }, []);

  const handleBooking = async () => {
    if (!selectedServiceId || !providerId || !date || !timeSlot || !address) {
      return alert("Please fill all fields.");
    }

    const bookingData = {
      serviceId: selectedServiceId,
      providerId,
      date,
      timeSlot,
      address,
    };

    try {
      const res = await api.post("/bookings/createbooking", bookingData);
      const bookingId = res.data._id;
      navigate(`/payment/${bookingId}`);
    } catch (err) {
      console.error("Booking failed:", err);
      alert("Booking failed");
    }
  };

  const handleServiceChange = (e) => {
    const serviceId = e.target.value;
    setSelectedServiceId(serviceId);

    const selectedService = services.find((s) => s._id === serviceId);
    if (selectedService?.providerId?._id) {
      setProviderId(selectedService.providerId._id);
    } else {
      setProviderId("");
    }
  };

  const selectedService = services.find((s) => s._id === selectedServiceId);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-black via-[#181a23] to-[#ffe066] text-[#ffe066] font-sans">
      <div className="w-full max-w-xl bg-black shadow-2xl rounded-2xl p-8 border border-[#ffe066]/40 backdrop-blur-md">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-[#ffe066] tracking-tight drop-shadow-lg">Book an UrbanElite Service</h2>

        {/* Service selection */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-[#ffe066]">Select a service</label>
          <div className="flex items-center border border-[#ffe066]/40 rounded-lg px-3 bg-[#181a23]">
            <Package className="text-[#ffe066] mr-2" />
            <select
              value={selectedServiceId}
              onChange={handleServiceChange}
              className="w-full py-2 outline-none bg-transparent text-[#ffe066]"
            >
              <option value="" className="text-[#232526]">Choose a service</option>
              {services.map((s) => (
                <option key={s._id} value={s._id} className="text-[#232526]">
                  {s.title} - ₹{s.price}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-[#ffe066]">Select Date</label>
          <div className="flex items-center border border-[#ffe066]/40 rounded-lg px-3 bg-[#181a23]">
            <CalendarDays className="text-[#ffe066] mr-2" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full py-2 outline-none bg-transparent text-[#ffe066] placeholder-[#ffe066]/60"
            />
          </div>
        </div>

        {/* Time Slot */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-[#ffe066]">Time Slot</label>
          <div className="flex items-center border border-[#ffe066]/40 rounded-lg px-3 bg-[#181a23]">
            <Clock className="text-[#ffe066] mr-2" />
            <input
              type="text"
              placeholder="e.g. 10 AM - 12 PM"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="w-full py-2 outline-none bg-transparent text-[#ffe066] placeholder-[#ffe066]/60"
            />
          </div>
        </div>

        {/* Address */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold text-[#ffe066]">Your Address</label>
          <div className="flex items-center border border-[#ffe066]/40 rounded-lg px-3 bg-[#181a23]">
            <MapPin className="text-[#ffe066] mr-2" />
            <input
              type="text"
              placeholder="Enter full address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full py-2 outline-none bg-transparent text-[#ffe066] placeholder-[#ffe066]/60"
            />
          </div>
        </div>

        {/* Booking Summary */}
        {selectedService && (
          <div className="bg-[#181a23] border border-[#ffe066]/30 rounded-lg p-4 mb-6 text-sm text-[#ffe066]">
            <p><span className="font-semibold">Selected:</span> {selectedService.title}</p>
            <p><span className="font-semibold">Price:</span> ₹{selectedService.price}</p>
            <p><span className="font-semibold">Provider:</span> {selectedService.providerId?.username}</p>
            <p><span className="font-semibold">Date:</span> {date}</p>
            <p><span className="font-semibold">Time:</span> {timeSlot}</p>
            <p><span className="font-semibold">Address:</span> {address}</p>
          </div>
        )}

        {/* Confirm Button */}
        <button
          onClick={handleBooking}
          className="w-full bg-[#ffe066] text-black py-3 rounded-lg font-bold hover:bg-[#fff6b3] transition-all text-lg shadow-md mt-2"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Booking;
