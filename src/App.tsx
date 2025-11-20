import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DataPage from "./pages/DataPage";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";


export default function App() {
    return (
        <div className="flex">
            <Sidebar />


            <div className="flex-1">
                <Topbar />
                <div className="p-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/data" element={<DataPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}