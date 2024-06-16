import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./components/theme-provider";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Register from "./pages/Register";
import AccountPage from "./pages/AccountPage";
import ActivityPage from "./pages/ActivityPage";
import { Toaster } from "./components/ui/toaster";

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
                <Route path="/activity" element={<ActivityPage />}></Route>
                <Route path="/:username" element={<AccountPage />}></Route>
              </Route>
            </Route>
          </Routes>
          <Toaster />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
