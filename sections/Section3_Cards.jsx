'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreEvents } from '../constants'; //  js file for event id
import { staggerContainer } from '../utils/motion';
import { ExploreEvent, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Events" textStyles="text-center" />
        <TitleText
          title={<><span style={{ fontFamily: 'adventure' }}>Highlight </span><span className="font-bold" style={{ color: '#26A699', fontFamily: 'adventure' }}>Events</span> </>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreEvents.map((event, index) => (
            <ExploreEvent
              key={event.id}
              {...event}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
