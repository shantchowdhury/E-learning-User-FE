import {useEffect} from "react";
import Accordion from "../../components/Home/Accordion";
import Homeevents from "../../components/Home/HomeEvents";
import Hometestimonials from "../../components/Home/HomeTestimonials";
import Sponsorships from "../../components/Home/Sponsorships";
import Hero from "../../components/Home/Hero";
import HomeCourses from "../../components/Home/HomeCourses";
import HomeStatistics from "../../components/Home/HomeStatistics";
import GenerateTitle from "@/GenerateTitle";

const Home = () => {
  useEffect(() => GenerateTitle("NonAcademy - Unzip your career"), []);
  
  return (
    <div>
      <Hero />
      <Sponsorships />
      <HomeStatistics />
       <HomeCourses />
       <Homeevents /> 
      <Hometestimonials />
      <Accordion />
    </div>
  );
};

export default Home;