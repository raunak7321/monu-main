import React from 'react';
import CaraSoul from '../SubPage/Carasoul';
import MissionVision from '../SubPage/HomeMission';
import Fact from '../SubPage/Fact';
import HomeAbout from '../SubPage/HomeAbout';
import HomeGallerySlide from '../SubPage/HomeGallerySlide';
import ContactSection from '../SubPage/ContactSection';
import TopSellingTVs from '../SubPage/TopSellingTV';
import HomeReview from '../SubPage/HomeReview';


const Home = () => {
  return (
    <div className='pt-24 bg-white'>
      <CaraSoul />
      <HomeAbout />
      <TopSellingTVs />
      <MissionVision />
      <HomeGallerySlide />
      <Fact />
      <HomeReview />
      <ContactSection />
    </div>
    
  );
}

export default Home;