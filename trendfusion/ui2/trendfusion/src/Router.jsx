import React from "react";
import { Routes, Route} from "react-router-dom"
import LandingPage from "./component/pages/LandingPage";
import LoginPage from "./component/pages/LoginPage";
import BookDemo from "./component/pages/BookDemo";
import Pricing from "./component/pages/PricingPage";
import Payment from "./component/pages/PaymentPage";
import Dashboard from "./component/pages/HomePage";

function RouteApp() {
    return (
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/welcome" element={<LoginPage/>}/>
        <Route path="/book-demo" element={<BookDemo/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/home" element={<Dashboard/>}/>
      </Routes>
    );
}

export default RouteApp;
