import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/header/Header';
import Overview from './pages/overview/Overview';
import Itinerary from './pages/Itinerary/Itinerary';
import Costs from './pages/costs/Costs';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import PaymentTerms from './pages/PaymentTerms/PaymentTerms';
import InclusionsExclusions from './pages/InclusionsExclusions/InclusionsExclusions';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/costs" element={<Costs />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/payment" element={<PaymentTerms />} />
          <Route path="/inclusions-exclusions" element={<InclusionsExclusions />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
