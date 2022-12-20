import '../styles/globals.css';
import { Background } from '../components';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <Background />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
