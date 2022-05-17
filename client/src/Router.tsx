import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Header";
import Home from "./views/Home";
import Login from "./views/Login";
import SignUp from "./views/SignUp";

function Router() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
export default Router;
