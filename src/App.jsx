import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-Poppins">
      {/* NavBar */}
      <Navbar />
      {/* All contain */}
      <Outlet />
    </div>
  );
};

export default App;
