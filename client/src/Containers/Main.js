
import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import Header from '../Components/Header';
import Footer from "../Components/Footer";
import ContactSection from '../Components/ContactSection';
import AboutSection from '../Components/AboutSection';
import HeroSection from '../Components/HeroSection';
import WorkSection from '../Components/WorkSection';
import NotFound from '../Components/NotFound';

function Main() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Header useAnchorLinks />
              <HeroSection />
              <AboutSection />
              <WorkSection />
              <ContactSection />
              <Footer />
            </div>
          )}
        />
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  )
}

export default withRouter(Main);
