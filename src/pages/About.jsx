import React from "react";
import ContentAbout from "../components/ContentAbout";
import WhyChooseUs from "../components/WhyChooseUs";
import PhotoGallery from "../components/PhotoGallery";
import ContentContact from "../components/ContentContact";

const About = () => {
  return (
    <>
      <div className="space-navbar-pages"></div>
      <ContentAbout />
      <WhyChooseUs />
      <PhotoGallery />
      <ContentContact />
    </>
  );
};

export default About;
