'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import Loginout from '../pages/loginout';
import { useSession, signIn, signOut } from "next-auth/react";
export default function Navbar() {
  const { data: session } = useSession();
  return (
    <div>
      <Head />

      <header
        // style={{ backgroundColor: '#1A2238' }}
        className="header"
        id="header"
      >
        <nav className="nav container ">
          <div
            style={{
              fontSize: '40px',
              fontWeight: '50px',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div style={{ marginTop: '6px' }}>
              <img
                src="/titlebackground/logo40px.png"
                alt="Cosmos Stars"
              // className="w-full sm:h-[720px] h-[720px] object-cover  z-10 relative"
              />
            </div>
            <a href="/">
              <h1 className="navbarFont ml-3" style={{ color: 'white' }}>
                Techno<span style={{ color: '#26A699' }}>Vanza</span>
              </h1>
            </a>
          </div>

          <motion.div
            initial={{ x: '+100vh' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: '50', duration: 5 }}
            className="nav__menu"
            id="nav-menu"
          >
            <ul className="nav__list ">
              <li className="nav__item " style={{ marginLeft: '15px' }}>
                <a href="/" className="nav__link  ">
                  <i className="bx bx-home-alt nav__icon" />
                  <span className=" nav__name">Home</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="/events" className="nav__link">
                  <i className="bx bx-user nav__icon" />
                  <span className="nav__name">Events</span>
                </a>
              </li>

              <li className="nav__item">
                <Link href="/gls" className="nav__link">
                  <i className="bx bx-book-alt nav__icon" />
                  <span className="nav__name">GLS</span>
                </Link>
              </li>

              <li className="nav__item">
                <a href="/gallery" className="nav__link">
                  <i className="bx bx-briefcase-alt nav__icon" />
                  <span className="nav__name">Gallery</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="/register_team" className="nav__link">
                  <i className="bx bx-message-square-detail nav__icon" />
                  <span className="nav__name">About</span>
                </a>
              </li>
              {
                session ?
                  <>
                    
                  </>
                  :
                  <>
                    <li className="nav__item">
                      <a onClick={() => signIn()} className="nav__link">
                        <i className="bx bx-message-square-detail nav__icon" />
                        <span className="nav__name">Login</span>
                      </a>
                    </li>
                  </>
              }
            </ul>
          </motion.div>
        </nav>
      </header>
    </div>
  );
};
