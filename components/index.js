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
const NavbarCopy = dynamic(() => import('./NavbarCopy'), {
  ssr: false,
});
export {
  Background,
  Navbar,
  NavbarCopy,
  TitleText,
  TypingText,
  ExploreEvent,
  InsightCard,
  Footer,
};
