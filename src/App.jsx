import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// PUBLISHABLE_KEY=pk_test_51OFXQGKnFe2R7DJz8n0DsFsKH323O4fnec5I3SNuQrEsLc70xPaP3PNQjdspWqUM8YasqB1YKsdYXPJsHmke9jBP00TX2EPT2Y
const stripePromise = loadStripe('pk_test_51OFXQGKnFe2R7DJz8n0DsFsKH323O4fnec5I3SNuQrEsLc70xPaP3PNQjdspWqUM8YasqB1YKsdYXPJsHmke9jBP00TX2EPT2Y');
const App = () => {
  return (
    <div className="font-Poppins">
      <Elements stripe={stripePromise}>
      {/* NavBar */}
      <Navbar />
      {/* All contain */}
      <Outlet />
      {/* footer */}
      <Footer />
      </Elements>
    </div>
  );
};

export default App;
