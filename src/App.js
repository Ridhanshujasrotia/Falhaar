import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Logs from "./pages/Logs";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";
import CheckLogin from "./pages/CheckLogin";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";
import Thankyou from "./pages/Thankyou";
import { Loading } from "./components/Loading";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Logs/:pId/:pName" element={<Logs />} />
            <Route path="/Payment/:total_price" element={<Payment />} />
            <Route path="/Thankyou" element={<Thankyou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Shop" element={<CheckLogin />} />
            <Route path="/Contact" element={<CheckLogin />} />
            <Route path="/Cart" element={<CheckLogin />} />
            <Route path="/Logs/:pName/:pId" element={<CheckLogin />} />
            <Route path="/Payment/:total_price" element={<CheckLogin />} />
            <Route path="/Thankyou" element={<CheckLogin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
