import { Link, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link className="brand" to="/">
            Dr Jiafa Luo
          </Link>
          <nav className="top-nav" aria-label="Primary">
            <Link to="/">Home</Link>
            <Link className="button-link" to="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="page-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Dr Jiafa Luo</p>
      </footer>
    </>
  );
}

export default App;
