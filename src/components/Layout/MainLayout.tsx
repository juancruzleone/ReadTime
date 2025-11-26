import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="appContainer">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
