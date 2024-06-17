import { Routes, Route } from "react-router-dom";
import Welcome from "./routes/Welcome/welcome";
import ErrorPage from "./routes/PageNotFound/errorPage";
import { LoginPage } from "./routes/LogIn/logIn";
import { ProtectedRoute } from "./routes/ProtectedRoute/protectedRoute";
import { AuthProvider } from "./hooks/useAuth";
import "./App.css";
import { Dashbord } from "./routes/Dashbord/dashbord";

export default function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route errorElement={<ErrorPage/>} path="/" element={<Welcome />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashbord"
        element={
          <ProtectedRoute>
            <Dashbord />
          </ProtectedRoute>
        }
      />
    </Routes>
  </AuthProvider>
  );
}
