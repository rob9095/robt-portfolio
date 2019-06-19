
import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import Header from '../Components/Header';
import HeroSection from "../Components/HeroSection";
const ContactSection = lazy(()=> import('../Components/ContactSection'));
const AboutSection = lazy(()=> import('../Components/AboutSection'));
const Footer = lazy(() => import('../Components/Footer'));
const WorkSection = lazy(() => import('../Components/WorkSection'));
const NotFound = lazy(() => import('../Components/NotFound'));

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
              <Suspense fallback={
                <section style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <i style={{fontSize: 50, color: '#442467'}} className="fa fa-spinner fa-pulse" />
                </section>
                }>
                <AboutSection />
                <WorkSection />
                <ContactSection />
                <Footer />
              </Suspense>
            </div>
          )}
        />
        <Route render={() => 
          <Suspense fallback={
            <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i style={{ fontSize: 50, color: '#442467' }} className="fa fa-spinner fa-pulse" />
            </section>
          }>
            <NotFound />
          </Suspense>
        } />
      </Switch>
    </div>
  )
}

export default withRouter(Main);
