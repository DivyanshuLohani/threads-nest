import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./components/theme-provider";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            {/* Non PROTECTED ROUTES */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />

            <Route path="/" element={<Layout />}>
              {/* Protected Routes */}
              <Route element={<RequireAuth />}>
                <Route path="/" element={<HomePage />}></Route>
              </Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
