// 'use client';

// import { motion } from 'framer-motion';

// import styles from '../styles';
// import { newFeatures } from '../constants';
// import { NewFeatures, TitleText, TypingText } from '../components';
// import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

// const WhatsNew = () => (
//   <section className={`${styles.paddings} relative z-10`}>
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.25 }}
//       className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
//     >
//       <motion.div
//         variants={planetVariants('right')}
//         className={`flex-1 ${styles.flexCenter}`}
//       >
//         <img
//           src="/whats-new.png"
//           alt="Abdul Kalam"
//           className="w-[90%] h-[90%] object-contain"
//         />
//       </motion.div>
//       <motion.div
//         variants={fadeIn('right', 'tween', 0.2, 1)}
//         className="flex-[0.95] flex justify-center flex-col"
//       >
//         <TypingText title="| Whats new?" />
//         <TitleText title={<>What's new about Metaversus?</>} />
//         <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
//           {newFeatures.map((feature) => (
//             <NewFeatures key={feature.title} {...feature} />
//           ))}
//         </div>
//       </motion.div>

//     </motion.div>
//   </section>
// );

// export default WhatsNew;

'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GlsSophia = () => (
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
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Insights of Technovanza" />
        <TitleText title={<><span className="font-bold text-4xl">Dr. A. P. J. Abdul Kalam</span> <br /><span className="text-2xl font-bold">at Techno<span style={{ color: '#26A699' }}>Vanza</span></span> </>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GlsSophia;
