import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import View from "./components/student/View";
import Edit from "./components/student/Edit";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view/:id" element={<View />} />
            <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;