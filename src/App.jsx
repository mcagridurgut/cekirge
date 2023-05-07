import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignUp,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./components/auth/Login";
import { Dashboard } from "./pages/Dashboard";
import { dark, light } from "@clerk/themes";
import { useTheme } from "./utils/ThemeContext";

const clerk_pub_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const MemHeader = Header;
const MemFooter = Footer;

MemHeader.displayName = "Header";
MemFooter.displayName = "Footer";

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
  const theme = useTheme();

  const clerkTheme = {
    baseTheme: theme.darkMode ? dark : light,
  };

  return (
    <ClerkProvider
      appearance={{
        baseTheme: clerkTheme.baseTheme,
      }}
      publishableKey={clerk_pub_key}
      navigate={(to) => navigate(to)}
    >
      <MemHeader />
      <main className="min-h-[70vh] md:min-h-[80vh] grid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sign-in/*"
            element={<Login routing="path" path="/sign-in" />}
          />
          <Route
            path="/sign-up/*"
            element={<SignUp routing="path" path="/sign-up" />}
          />
          <Route
            path="/dashboard/*"
            element={
              <>
                <SignedIn path="/sign-in">
                  <Dashboard />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn to="/sign-in" />
                </SignedOut>
              </>
            }
          />
          <Route
            path="*"
            element={
              <h1
                className={
                  "text-center text-7xl h-inherit flex justify-center items-center pt-40"
                }
              >
                DORT YUZ DORT
              </h1>
            }
          />
        </Routes>
      </main>
      <MemFooter />
    </ClerkProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}

export default App;
