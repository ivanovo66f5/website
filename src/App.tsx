import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import Sources from "./views/Sources/Sources";
import Working from "./views/Working/Working";
import "./globals.scss";

export default function App() {
    return (
        <HashRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sources" element={<Sources />} />
                <Route path="/working" element={<Working />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
}