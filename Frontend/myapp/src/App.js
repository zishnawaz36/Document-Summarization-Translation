import React, { lazy, Suspense } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy load components
import TextTranslator from './Components/Translation.jsx';
const Home = React.lazy(() => import('./Components/Home'));
const About = React.lazy(() => import('./Components/About'));
const Contact = React.lazy(() => import('./Components/Contact'));
const Header = React.lazy(() => import('./Components/Header'));
const Services = React.lazy(() => import('./Components/Services'));
const Model = React.lazy(() => import('./Components/Model'));
const Login = React.lazy(() => import('./Components/Login'));
const Signup = React.lazy(() => import('./Components/Signup'));
const Summerization = React.lazy(() => import ('./Components/Summerization'));
const CombineSummaryandTrans = lazy(() => import("./Components/SummaryandTranslate.jsx"));
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path='/both' element={<CombineSummaryandTrans/>}></Route>
          <Route path='/translation' element={<TextTranslator />} /> {/* Corrected the typo */}
          <Route path='/summarization' element={<Summerization />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/model" element={<Model />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
