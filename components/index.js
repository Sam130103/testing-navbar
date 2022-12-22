// import Navbar from './Navbar';
// import  Navbar = dynamic(() => import('./Navbar'), { ssr: false })
import dynamic from 'next/dynamic';
import { TypingText, TitleText } from './CustomTexts';
import ExploreEvent from './Explore_Events';
import InsightCard from './InsightGLS';
import Footer from './Footer';
// import Background from './Background.js';

const Navbar = dynamic(() => import('./Navbar'), {
  ssr: false,
});
const Background = dynamic(() => import('./Background'), {
  ssr: false,
});
const Navbar_copy = dynamic(() => import('./Navbar_copy'), {
  ssr: false,
});
export {
  Background,
  Navbar,
  Navbar_copy,
  TitleText,
  TypingText,
  ExploreEvent,
  InsightCard,
  Footer,
};
