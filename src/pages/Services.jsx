import React from "react";
import ContentServices from "../components/ContentServices";
import Departments from "../components/Departments";
import ContentContact from "../components/ContentContact";

const Services = () => {
  return (
    <>
      <div className="space-navbar-pages"></div>
      <ContentServices />
      <Departments />
      <ContentContact />
    </>
  );
};

export default Services;
