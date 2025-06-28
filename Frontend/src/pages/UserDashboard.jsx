import { useEffect, useState } from "react";
import api from "../utils/api";
import { CalendarDays, MapPin, User, Package, Clock } from "lucide-react";

const UserDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await api.get("/bookings/getbookings");
        setBookings(res.data);
      } catch (err) {
        console.error("User fetch error:", err);
      }
    };
    fetchBookings();
  }, []);

  const statusColor = {
    confirmed: "text-green-600 bg-green-100",
    pending: "text-yellow-600 bg-yellow-100",
    cancelled: "text-red-600 bg-red-100",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-cyan-100 px-6 py-12">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500 mb-10 text-center drop-shadow-lg">
        📋 My Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No bookings found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {bookings.map((b) => {
            const statusClass = statusColor[b.status?.toLowerCase()] || "text-gray-600";
            return (
              <div
                key={b._id}
                className="bg-white/80 shadow-xl rounded-3xl p-7 hover:shadow-2xl transition border border-blue-100 backdrop-blur-lg flex flex-col gap-2"
              >
                <h3 className="text-2xl font-bold flex items-center gap-2 mb-2 text-blue-700">
                  <Package className="w-6 h-6 text-blue-500" />
                  {b.serviceId?.title || "Service Title"}
                </h3>

                <p className="flex items-center text-gray-600 mb-1 text-base">
                  <User className="w-5 h-5 mr-2 text-gray-400" />
                  Provider: {b.providerId?.username || "N/A"}
                </p>

                <p className="flex items-center text-gray-600 mb-1 text-base">
                  <CalendarDays className="w-5 h-5 mr-2 text-gray-400" />
                  Date: {b.date || "Not set"}
                </p>

                <p className="flex items-center text-gray-600 mb-1 text-base">
                  <Clock className="w-5 h-5 mr-2 text-gray-400" />
                  Time: {b.timeSlot || "N/A"}
                </p>

                <p className="flex items-center text-gray-600 mb-3 text-base">
                  <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                  Address: {b.address || "N/A"}
                </p>

                <span className={`inline-block px-4 py-1 rounded-full text-md font-semibold ${statusClass} shadow-sm bg-white/60 border border-blue-100`}>
                  {b.status || "Unknown"}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
