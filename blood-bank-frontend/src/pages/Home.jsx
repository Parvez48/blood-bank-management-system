// src/pages/Home.jsx
const Home = () => {
  return (
    <div className="relative min-h-screen bg-red-50 flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://e1.pxfuel.com/desktop-wallpaper/186/607/desktop-wallpaper-black-website-background-website.jpg')",
          opacity: 0.3,
        }}
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center p-6 max-w-2xl bg-white bg-opacity-90 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-red-700 mb-4">
          🩸 Welcome to the Blood Bank
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Saving lives, one drop at a time. Join us to donate or request blood
          from trusted donors in your area.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/register"
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded shadow transition duration-200"
          >
            Become a Donor
          </a>
          <a
            href="/request"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded shadow transition duration-200"
          >
            Request Blood
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
