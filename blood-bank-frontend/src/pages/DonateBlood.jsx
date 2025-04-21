import { useState } from "react";

const DonateBlood = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleDonate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const res = await fetch("https://blood-bank-management-system-2-apm2.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        fullName,
        phone,
        bloodGroup,
        location,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("Donation submitted successfully!");
      setFullName("");
      setPhone("");
      setBloodGroup("");
      setLocation("");
    } else {
      setMessage(data.message || "Failed to submit");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Donate Blood</h2>
      <form onSubmit={handleDonate} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          className="w-full border p-2 rounded"
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <select
          className="w-full border p-2 rounded"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          required
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <input
          className="w-full border p-2 rounded"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          Submit Donation
        </button>
      </form>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
};

export default DonateBlood;
