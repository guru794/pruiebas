import "./App.css";
import AnnoucementBody from "./components/AnnoucementBody";
import FaqCards from "./components/FaqCards";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Apply from "./pages/apply/Apply";
import Faq from "./pages/faq/Faq";
import History from "./pages/history";
import MostRecent from "./pages/MostRecent";
import NewsComponent from "./components/newsroom";
import Forms from "./components/Forms";

function App() {
  const location = useLocation();

  return (
    <>
      <header className="">
        <div className="us-official">
          <div className="container lg:w-full md:w-[790px]">
            {" "}
            Official Website of the Department of Homeland Security{" "}
          </div>
        </div>
        {/* LOGOS NAVBAR */}
        <NavBar />
        <AnnoucementBody />

        <section>
          <div className="home-wrapper">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />}></Route>
              <Route path="/apply" element={<Apply />}></Route>
              <Route path="/faq" element={<Faq />}></Route>
              <Route path="/recent" element={<MostRecent />}></Route>
              <Route path="/history" element={<History />}></Route>
            </Routes>
            {location.pathname !== "/faq" &&
              location.pathname !== "/news" &&
              location.pathname !== "/apply" &&
              location.pathname !== "/forms" && (
                <div className=" hidden lg:block bg-white text-center pt-6 pb-14">
                  <h3 className="">
                    Frequently Asked Questions
                    <br />
                    <span>related to this page</span>
                  </h3>
                  <div className="bg-[#ede7dc] p-[10px] grid grid-cols-4 container lg:w-full md:w-[790px] my-6">
                    <FaqCards />
                  </div>
                </div>
              )}
          </div>
        </section>

        <footer className=" font-bold">
          <Footer />
        </footer>
      </header>
    </>
  );
}

export default App;
