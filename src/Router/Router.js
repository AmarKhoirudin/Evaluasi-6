import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Home, Kontak, Makanan, Minuman } from "../Container";

const Routes = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/makanan" component={Makanan} />
        <Route path="/minuman" component={Minuman} />
        <Route path="/kontak" component={Kontak} />
      </Router>
    </div>
  );
};

export default Routes;
