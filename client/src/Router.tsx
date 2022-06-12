import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MusicAOD from "./components/MusicAOD";
import Board from "./pages/Board";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Test from "./pages/Test";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/board" element={<Board />} />
      </Routes>
      {/* <MusicAOD /> */}
      <Footer />
    </>
  );
}
export default Router;
