import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import View from "./pages/View";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addContact" element={<AddEdit />} />
        <Route path="/update/:id" element={<AddEdit />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
