import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();
  const [donations, setDonations] = useState([]);
  const [requests, setRequests] = useState([]);

  const fetchHistory = async () => {
    const token = localStorage.getItem("token");
    try {
      const [donationRes, requestRes] = await Promise.all([
        fetch("https://blood-bank-management-system-2-apm2.onrender.com", {
          headers: { Authorization: token },
        }),
        fetch("https://blood-bank-management-system-2-apm2.onrender.com", {
          headers: { Authorization: token },
        }),
      ]);

      const donationData = await donationRes.json();
      const requestData = await requestRes.json();

      setDonations(donationData);
      setRequests(requestData);
    } catch (error) {
      console.error("Error fetching history", error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-xl">
      {/* Profile Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-red-600">
          {user?.name || "N/A"}
        </h2>
        <p className="text-gray-600 text-sm mb-2">{user?.email}</p>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* Donations & Requests */}
      <div className="mt-6 space-y-6">
        {/* Donations */}
        <div>
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            🩸 Your Donations
          </h3>
          {donations.length === 0 ? (
            <p className="text-gray-500">No donations yet.</p>
          ) : (
            <ul>
              {donations.map((d) => (
                <li
                  key={d._id}
                  className="bg-green-100 p-3 rounded-lg shadow-md mb-2"
                >
                  <span className="font-semibold">{d.bloodGroup}</span> –{" "}
                  {d.location}
                  <div className="text-sm text-gray-500">
                    {new Date(d.date).toLocaleDateString()}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Requests */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            🙏 Your Requests
          </h3>
          {requests.length === 0 ? (
            <p className="text-gray-500">No requests yet.</p>
          ) : (
            <ul>
              {requests.map((r) => (
                <li
                  key={r._id}
                  className="bg-blue-100 p-3 rounded-lg shadow-md mb-2"
                >
                  <span className="font-semibold">{r.bloodGroup}</span> –{" "}
                  {r.location}
                  <div className="text-sm text-gray-500">
                    {new Date(r.date).toLocaleDateString()}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
