import HeroContent from "../sections/HeroContent";
import HeroImage from "../sections/HeroImage";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-[#BCD0C5]"
    >
      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-300/20 blur-3xl"></div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-8 lg:grid-cols-2 lg:gap-16">

        <HeroContent />

        <HeroImage />

      </div>
    </section>
  );
}

export default Hero;