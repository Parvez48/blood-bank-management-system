import { useEffect, useState } from "react";

const DonorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      const res = await fetch(
        "https://blood-bank-management-system-2-apm2.onrender.com"
      );
      const data = await res.json();
      setDonors(data);
    };
    fetchDonors();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Recent Blood Donors</h2>
      {donors.length === 0 ? (
        <p>No donors available.</p>
      ) : (
        <ul className="space-y-3">
          {donors.map((donor) => (
            <li
              key={donor._id}
              className="bg-white shadow-md rounded p-4 border"
            >
              <p>
                <strong>Blood Group:</strong> {donor.bloodGroup}
              </p>
              <p>
                <strong>Location:</strong> {donor.location}
              </p>
              <p>
                <strong>Donor:</strong>{" "}
                {donor.donorEmail?.split("@")[0] || "Anonymous"}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(donor.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DonorList;
