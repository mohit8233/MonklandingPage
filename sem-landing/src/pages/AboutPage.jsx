import AboutHero from "../components/about/AboutHero";
import CompanyTimeline from "../components/about/CompanyTimeline";
import CoreStrengths from "../components/about/CoreStrengths";
import OurStory from "../components/about/OurStory";
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
    </main>
    <Footer/>
    </>
  );
}