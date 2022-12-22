'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
// import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { slideIn, staggerContainer } from '../utils/motion';

const Hero = () => (
  // <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
  <div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        {/* <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Technovanza
        </motion.h1> */}
        {/* <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div> */}
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        // className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] object-fill z-[0] -top-[30px]" />

        <img
          src="/home.jpg"
          alt="Cosmos Stars"
          className="w-full sm:h-[720px] h-[720px] object-cover  z-10 relative"
        />

        <a href="/">
          <div className="w-full flex justify-end sm:-mt-[155px] -mt-[100px] pr-[40px] relative z-10">
            <img
              src="titlebackground/stampLogo.png"
              alt="Techno Logo"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
    {/* </section> */}
  </div>
);

export default Hero;
