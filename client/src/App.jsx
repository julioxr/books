import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BookDetails from "./pages/BookDetails";
import Explore from "./pages/Explore";

function App() {
    return (
        <div className="h-auto w-[390px] overflow-scroll bg-[#FBF8F2] px-4">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/book/:id" element={<BookDetails />} />
                    <Route path="/update/:id" element={<Update />} />
                    <Route path="/explore" element={<Explore />} />
                    {/* <Route path="/favorites" element={<Favorites />} /> */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
