import dynamic from 'next/dynamic';
import Hero from './Section1_Title';
import About from './Section2_About';
import Explore from './Section3_Cards';
import World from './Section6_World';
import Insights from './Section7_PastGLS';
import Feedback from './Section9_Last';
import 'bootstrap/dist/css/bootstrap.min.css';

const GetStarted = dynamic(() => import('./Section4_GLS'), { ssr: false });
const WhatsNew = dynamic(() => import('./Section5_GLS2'), { ssr: false });
export {
  Hero,
  About,
  Explore,
  GetStarted,
  WhatsNew,
  World,
  Insights,
  Feedback,
};
