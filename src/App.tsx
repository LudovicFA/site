import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Blog, Contact, Home } from "./pages";
import Navbar from "./components/Navbar";
import Experiences from "./pages/Experiences";
import Post from "./pages/Post";
import Works from "./pages/Works";

const App = () => {
  return (
    <main>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
      </Routes>
    </Router>
  </main>
  )
};

export default App;
