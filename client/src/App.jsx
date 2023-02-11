import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="bg-[#FBF8F2] h-screen overflow-scroll px-4">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Books />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/update" element={<Update />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
