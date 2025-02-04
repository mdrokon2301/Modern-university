import React from 'react';
import AcademicsHero from '../components/academics/AcademicsHero';
import FacultyList from '../components/academics/FacultyList';
import UpcomingFaculties from '../components/academics/UpcomingFaculties';
import AcademicResources from '../components/academics/AcademicResources';

export default function Academics() {
  return (
    <>
      <AcademicsHero />
      <FacultyList />
      <UpcomingFaculties />
      <AcademicResources />
    </>
  );
}