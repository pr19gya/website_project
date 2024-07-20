import React, { useRef } from 'react';
import { FaGlobeAsia, FaHome } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const circleAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const Content = () => {
  return (
    <div>
      <AnimatedSection
        title="Welcome to Rotaract District 3080"
        content="Join a vibrant community of young leaders dedicated to making a difference! At Rotary International District 3080, we embody the spirit of 'Service Above Self' through impactful projects across Chandigarh, Punjab, Haryana, Uttarakhand, Himachal Pradesh, and Uttar Pradesh."
      />
      <AnimatedSection
        title="Establised in RIY 1984-85"
        content="Rotary International District 3080 (RID 3080) was established in the Rotary International Year (RIY) 1984-85. Since its inception, RID 3080 has been a cornerstone of service and leadership in the Rotaract community."
      />
      <AnimatedSection title="Geographic Reach" />
      <div className="flex flex-wrap justify-center items-center mt-8 lg:mt-16">
        {['Chandigarh (UT)', 'Punjab', 'Haryana', 'Parts of Uttar Pradesh and Uttarakhand'].map((region, index) => (
          <AnimatedCircle key={region} delay={0.2 * index} text={region} />
        ))}
      </div>
      <AnimatedSection
        title="Distinguished Leadership"
        content="RID 3080 is honored to be the home district of Past Rotary International President Rtn. Rajendra K. Saboo, a distinguished leader whose contributions have significantly impacted Rotary's global initiatives."
      />
      <AnimatedSection title="Structure" />
      <div className="flex flex-wrap justify-center items-center mt-8 lg:mt-16">
        {[
          { icon: FaGlobeAsia, label: '60+', subtitle: 'CLUBS' },
          { icon: FaHome, label: '6', subtitle: 'ZONES' },
        ].map((item, index) => (
          <AnimatedCircle
            key={item.label}
            delay={0.2 * index}
            text={
              <div>
                <div className="mx-3 mb-2">
                  <item.icon size={28} />
                </div>
                <div className="font-bold text-2xl">{item.label}</div>
                <div>{item.subtitle}</div>
              </div>
            }
          />
        ))}
      </div>
      <AnimatedSection title="Why Join Us" />
      <div className="w-full my-20">
        {/* <motion.div
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ duration: 0.5, delay: 3.8 }}
          className="w-full text-4xl lg:text-6xl font-bold px-6 lg:px-24 text-center mb-8 lg:mb-0"
        >
          WHY JOIN US
        </motion.div> */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ duration: 0.5, delay: 4.1 }}
          className="w-full flex justify-center items-center mt-10 lg:px-56 text-sm lg:text-lg px-5"
        >
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <p>Joining Rotary International District 3080 is more than just becoming a member of a club; it’s an opportunity to be part of a transformative community dedicated to making a difference.</p>
            <li><b>Prestigious Network:</b> Be a part of an esteemed network with over 60 clubs across Chandigarh (UT), Punjab, Haryana, Himachal Pradesh, Uttarakhand, and Uttar Pradesh.</li>
            <li><b>Mentorship by Leaders:</b> Gain insights and mentorship from distinguished leaders, including Past Rotary International President Rtn. Rajendra K. Saboo.</li>
            <li><b>Meaningful Service:</b> Engage in impactful service projects that improve communities and foster sustainable development.</li>
            <li><b>Leadership Development:</b> Enhance your leadership skills through specialized programs and workshops.</li>
            <li><b>Global Opportunities:</b> Experience cultural exchanges and build a global network through our international partnerships.</li>
            <li><b>Engaging Club Experience:</b> Enjoy a fulfilling Rotaract experience with activities designed to enhance club functionality and member engagement.</li>
            <li><b>Literacy Initiatives:</b> Contribute to promoting literacy, reading, writing, and critical thinking in your community.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

const AnimatedSection = ({ title, content }) => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  return (
    <div className="w-full mt-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={textAnimation}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center mt-28 items-center text-4xl lg:text-6xl font-bold px-6 lg:px-24 text-center mb-8 lg:mb-0"
      >
        {title}
      </motion.div>
      {content && (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={textAnimation}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center items-center mt-10 lg:px-60 text-center text-sm lg:text-lg px-5"
        >
          {content}
        </motion.div>
      )}
    </div>
  );
};

const AnimatedCircle = ({ delay, text }) => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={circleAnimation}
      transition={{ duration: 0.5, delay }}
      className="h-[7rem] lg:h-[10rem] w-[7rem] lg:w-[10rem] m-2 lg:mx-5 rounded-full border-[0.7rem] bg-black text-white border-[#E0218A] text-xs lg:text-lg flex justify-center items-center text-center"
    >
      {text}
    </motion.div>
  );
};

export default Content;
