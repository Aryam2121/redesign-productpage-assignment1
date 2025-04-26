import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import MainFooter from './components/MainFooter';
import InfoSection from './components/InfoSection';
import FeaturesGrid from './components/FeaturesGrid';
import Testimonials from './components/Testimonials'; // New component for social proof (optional)

const Home: React.FC = () => {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const FqRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const hcf = document.querySelector(".hcf-profile");
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > lastScrollTop) {
        if (hcf) {
          hcf.classList.add("hcf-profile-fixed");
        }
      } else if (scrollTop < lastScrollTop) {
        if (hcf) {
          hcf.classList.remove("hcf-profile-fixed");
        }
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="">
        <HeroSection
          scrollToSection={scrollToSection}
          featuresRef={FqRef}
          contactRef={contactRef}
          aboutRef={aboutRef}
        />
        
        <div className='!bg-[#eff6ff] relative'>
          <FeaturesGrid />
        </div>

        <div className='!bg-white relative' ref={aboutRef}>
          <InfoSection />
        </div>

        {/* Social Proof Section (Testimonial or Logos) */}
        <div className='relative bg-[#f7f7f7]' style={{ padding: '40px 0' }}>
          <Testimonials />  {/* Add this new component */}
        </div>

        <div className='relative bg-white' ref={FqRef}>
          <HomeFAQs />
        </div>

        <div className='bg-white relative' ref={contactRef}>
          <ContactForm />
        </div>

        <div className='bg-white'>
          <MainFooter />
        </div>
      </div>
    </>
  );
};

export default Home;
