import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import BlogSection from "./components/BlogSection";
import BlogDetail from "./pages/BlogDetail";
import AdminSignIn from "./pages/AdminSignIn";
import AdminNewPost from "./pages/AdminNewPost";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          
          {/* Portfolio homepage */}
          <Route index element={<Home />} />

          {/* Blog list */}
          <Route path="/blogs" element={<BlogSection />} />

          {/* Blog detail */}
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* Admin pages */}
          <Route path="/admin" element={<AdminSignIn />} />
          <Route path="/admin/new" element={<AdminNewPost />} />

          {/* Not found */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
