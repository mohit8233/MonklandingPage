import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-gradient-to-br from-[#EAF4EE] via-[#8fd1a0] to-[#9fd7b7]"
    >
      {/* Top Left Glow */}
      <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-white/25 blur-[120px]" />

      {/* Bottom Right Glow */}
      <div className="absolute -bottom-32 -right-20 h-[420px] w-[420px] rounded-full bg-[#65C18C]/25 blur-[120px]" />

      {/* Small Floating Circle */}
      <div className="absolute left-20 top-28 h-8 w-8 rounded-full bg-white/60 backdrop-blur-md"></div>

      <div className="absolute bottom-40 right-24 h-6 w-6 rounded-full bg-[#65C18C]/60"></div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-8 lg:grid-cols-2 lg:gap-16">
        <HeroContent />
        <HeroImage />
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 180"
          className="relative block h-[100px] w-full lg:h-[140px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#F7FBF8"
            d="M0,96L80,101.3C160,107,320,117,480,128C640,139,800,149,960,138.7C1120,128,1280,96,1360,80L1440,64L1440,181L1360,181C1280,181,1120,181,960,181C800,181,640,181,480,181C320,181,160,181,80,181L0,181Z"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;