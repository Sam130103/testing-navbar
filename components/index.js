// import Navbar from './Navbar';
// import  Navbar = dynamic(() => import('./Navbar'), { ssr: false })
import dynamic from 'next/dynamic';
import { TypingText, TitleText } from './CustomTexts';
import ExploreEvent from './Explore_Events';
import StartSteps from './StartSteps';
import NewFeatures from './NewFeatures';
import InsightCard from './InsightCard';
import Footer from './Footer';
// import Background from './Background.js';

const Navbar = dynamic(() => import('./Navbar'), {
  ssr: false,
});
const Background = dynamic(() => import('./Background'), {
  ssr: false,
});
export {
  Background,
  Navbar,
  TitleText,
  TypingText,
  StartSteps,
  NewFeatures,
  ExploreEvent,
  InsightCard,
  Footer,
};
