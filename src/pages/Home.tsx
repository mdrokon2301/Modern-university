import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import QuickLinks from '../components/home/QuickLinks';
import DiscoverRMU from '../components/home/DiscoverRMU';
import Scholarships from '../components/home/Scholarships';
import Programs from '../components/home/Programs';
import Events from '../components/home/Events';
import Community from '../components/home/Community';
import Testimonials from '../components/home/Testimonials';
import AlumniSuccess from '../components/home/AlumniSuccess';
import UpcomingEvents from '../components/home/UpcomingEvents';
import Map from '../components/home/Map';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <QuickLinks />
      <DiscoverRMU />
      <Scholarships />
      <Programs />
      <Events />
      <Community />
      <Testimonials />
      <AlumniSuccess />
      <UpcomingEvents />
      <Map />
    </>
  );
}