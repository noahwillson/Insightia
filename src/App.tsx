import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import CoursesDetails from "./pages/CoursesDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-details" element={<CoursesDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
