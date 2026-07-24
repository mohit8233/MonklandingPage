import AboutHero from "../components/about/AboutHero";
import CompanyTimeline from "../components/about/CompanyTimeline";
import CoreStrengths from "../components/about/CoreStrengths";
import OurDNA from "../components/about/OurDNA";
import OurStory from "../components/about/OurStory";
import TeamSection from "../components/about/TeamSection";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";


export default function About() {
  return (
    <>
    <Navbar/>
    <main className="bg-white">
        <AboutHero/>
        <OurStory/>
      <CompanyTimeline/>
      <CoreStrengths/>
      <OurDNA/>
      <TeamSection/>
    </main>
    <Footer/>
    </>
  );
}