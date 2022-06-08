import React from 'react';
import { useNavigate } from "react-router-dom";

const AboutPage = () => {

  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate(`/`);
  };

  return (
    <div>
      <h1>AboutPage</h1>
      <button onClick={goToHomepage}>Go To Homepage</button>
    </div>
  );
};

export default AboutPage;