import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
// import Testimonial from '../components/sections/Testimonial';
// import ScrollingItems from '../components/elements/ScrollingItems'

import RecomSection from '../components/sections/RecomSection'

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <ScrollingItems /> */}
      {/* <Testimonial topDivider /> */}
      <RecomSection />
    </>
  );
}

export default Home;