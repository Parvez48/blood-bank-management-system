import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RequestBlood from "./pages/RequestBlood";
import DonateBlood from "./pages/DonateBlood";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import DonorList from "./pages/DonorList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/donors" element={<DonorList />} />

        {/* Protected Routes */}
        <Route
          path="/request"
          element={
            <PrivateRoute>
              <RequestBlood />
            </PrivateRoute>
          }
        />
        <Route
          path="/donate"
          element={
            <PrivateRoute>
              <DonateBlood />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
