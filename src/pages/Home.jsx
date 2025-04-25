import React from "react";
import "../styles/home.css";
import Departments from "../components/Departments";
import ServicesMap from "../components/ServicesMap";
import ContentServices from "../components/ContentServices";
import PhotoGallery from "../components/PhotoGallery";
import ContentContact from "../components/ContentContact";
import WhyChooseUs from "../components/WhyChooseUs";
import ContentHome from "../components/ContentHome";
import ContentPollster from "../components/ContentPollster";
import ContentStats from "../components/ContentStats";
import ContentAbout from "../components/ContentAbout";

const Home = () => {
  return (
    <>
      <ContentHome />
      <ContentAbout />
      <Departments />
      <ServicesMap />
      <WhyChooseUs />
      <ContentStats />
      <ContentServices />
      <ContentPollster />
      <PhotoGallery />
      <ContentContact />
    </>
  );
};

export default Home;
