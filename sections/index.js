import dynamic from 'next/dynamic';
import Title from './Section1_Title';
import About from './Section2_About';
import ExploreEvents from './Section3_Cards';
import PastGLS from './Section6_PastGLS';
import AfterMovie from './Section7_AfterMovie';
import 'bootstrap/dist/css/bootstrap.min.css';

const GLS1 = dynamic(() => import('./Section4_GLS1'), { ssr: false });
const GLS2 = dynamic(() => import('./Section5_GLS2'), { ssr: false });
export {
  Title,
  About,
  ExploreEvents,
  GLS1,
  GLS2,
  PastGLS,
  AfterMovie,
};
