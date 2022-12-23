import { useEffect } from 'react';
import { Footer, Navbar } from '../components';
import { About, ExploreEvents, AfterMovie, GLS1, Title, PastGLS, GLS2 } from '../sections';

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = 'black';
  }, []);

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Title />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <ExploreEvents />
      </div>
      <div className="relative">
        <GLS1 />
        <div className="gradient-04 z-0" />
        <GLS2 />
      </div>
      <div className="relative">
        <PastGLS />
        <div className="gradient-04 z-0" />
        <AfterMovie />
      </div>
      <Footer />
    </div>
  );
}

