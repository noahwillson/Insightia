import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import CoursesDetails from "./pages/CoursesDetails";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CoursesDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
