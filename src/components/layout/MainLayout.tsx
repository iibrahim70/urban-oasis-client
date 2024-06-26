import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
