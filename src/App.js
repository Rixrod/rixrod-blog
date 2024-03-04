import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Footer from "./Footer";
import Business from "./routes/Business";
import Entertainment from "./routes/Entertainment";
import Health from "./routes/Health";
import Lifestyle from "./routes/Lifestyle";
import News from "./routes/News";
import Politics from "./routes/Politics";
import Science from "./routes/Science";
import Sports from "./routes/Sports";
import Technology from "./routes/Technology";
import ViewPost from "./ViewPost";
// import Nav from "./Nav";
// import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Nav/> */}
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/health" element={<Health />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/news" element={<News />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/view-post/:postId" element={ViewPost} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
