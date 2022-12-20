// import Navbar from './Navbar';
// import  Navbar = dynamic(() => import('./Navbar'), { ssr: false })
import dynamic from 'next/dynamic';
import { TypingText, TitleText } from './CustomTexts';
import ExploreCard from './ExploreCard';
import StartSteps from './StartSteps';
import NewFeatures from './NewFeatures';
import InsightCard from './InsightCard';
import Footer from './Footer';

const Navbar = dynamic(() => import('./Navbar'), {
  ssr: false,
});

export {
  Navbar,
  TitleText,
  TypingText,
  StartSteps,
  NewFeatures,
  ExploreCard,
  InsightCard,
  Footer,
};
