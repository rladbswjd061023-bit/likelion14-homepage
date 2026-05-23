import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import Main from "./pages/Main/Main.jsx";
import Members from "./Members.jsx";
import Recruit from "./pages/Recruit.jsx";
import Project from "./pages/Project.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/members" element={<Members />} />
        </Route>
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/project" element={<Project />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;