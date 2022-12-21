'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
// import { startingFeatures } from '../constants';
// import { StartSteps, TitleText, TypingText } from '../components';
// import { StartSteps, TitleText } from '../components';
import { TitleText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GlsAPJ = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/homeGLS/AbdulKalam.png"
          alt="Abdul Kalam"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 1, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        {/* <TypingText title="| Insights of Technovanza" /> */}
        <TitleText title={<><span className="font-bold text-4xl">Dr. A. P. J. Abdul Kalam</span> <br /><span className="text-2xl font-bold">at Techno<span style={{ color: '#26A699' }}>Vanza</span></span> </>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          <div>  <div className={`${styles.flexCenter} flex-row`}>
            <div>
              <p className="font-bold text-[20px] text-white">
                <div>
                  <div className="youtube">
                    <span className="arrow" />
                  </div>
                </div>
              </p>
            </div>
            <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]" style={{ marginTop: "15px" }}>
              Find a world that suits you and you want to enter
            </p>
          </div>
          </div>
          <div>
            <div className={`${styles.flexCenter} flex-row`}>
              <div>
                <p className="font-bold text-[20px] text-white">
                  <div style={{ fontSize: '40px', fontWeight: '20px', marginLeft: '10px' }}>#</div>
                </p>
              </div>
              <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]" style={{ marginTop: '15px', marginLeft: '35px' }}>
                Find a world that suits you and you want to enter
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GlsAPJ;
