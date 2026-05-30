import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import FeaturedWorks from './FeaturedWorks';
import MyOffers from './MyOffers';
import Footer from './Footer';
import Digipay from './Digipay';
import Khan from './Khan';
import Dataschool from './Dataschool';
import Letsread from './Letsread';
import Cursor from './Cursor';

function Home() {
  return (
    <>
      <Cursor />
      <Hero />
      <FeaturedWorks />
      <MyOffers />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digipay" element={<Digipay />} />
        <Route path="/khan" element={<Khan />} />
        <Route path="/dataschool" element={<Dataschool />} />
        <Route path="/letsread" element={<Letsread />} />
      </Routes>
    </BrowserRouter>
  );
}