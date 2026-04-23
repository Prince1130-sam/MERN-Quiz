import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";
import Topics from "./pages/Topics";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Navbar />

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/topics/:unitId" element={<Topics />} />
          <Route path="/quiz/:topicId" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Route>

        <Route element={<ProtectedRoute adminOnly={true} />}>
          <Route path="/admin" element={<AdminPanel />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;