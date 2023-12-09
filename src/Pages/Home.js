import React from "react";
import Banner from "../components/Banner";
import ServicesList from "../components/FrontPage/ServicesList";
import AboutUs from "../components/FrontPage/AboutUs";
import CallToAction from "../components/FrontPage/CallToAction";
import OurServices from "../components/FrontPage/OurServices";
import TestimonialSection from "../components/FrontPage/TestimonialSection";
import WhySelectSection from "../components/FrontPage/WhySelectSection";
import OurFeatures from "../components/FrontPage/OurFeatures";
import PricingTable from "../components/FrontPage/PricingTable";
import ContactUs from "../components/FrontPage/ContactUs";

const Home = () => {
  return (
    <main className="main">
      <Banner></Banner>
      <ServicesList></ServicesList>
      <AboutUs></AboutUs>
      <CallToAction></CallToAction>
      <OurServices></OurServices>
      <TestimonialSection></TestimonialSection>
      <WhySelectSection></WhySelectSection>
      <OurFeatures></OurFeatures>
      <PricingTable></PricingTable>
      <ContactUs></ContactUs>
    </main>
  );
};

export default Home;
