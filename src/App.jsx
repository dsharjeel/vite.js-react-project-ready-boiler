import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, PageNotFoundError } from "@/pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFoundError />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
