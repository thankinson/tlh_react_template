import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './globalstyles/globalcss.css'
import { Home } from "./pages/home";

const App = () => {

  return (
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<Home />} />

    </Routes>
</BrowserRouter>
  );
}

export default App;
