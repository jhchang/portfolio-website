'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        I obtained a bachelor of science in
        <span className='font-medium'> Computer Engineering </span>
        at University of California San Diego and a Master of Science in
        <span className='font-medium'> Computer Science </span>
        at San Jose State University. I have experience working as a
        <span className='font-medium'> Network Engineer </span>and a
        <span className='font-medium'> Software Engineer</span>. My primary
        fields of interest are
        <span className='font-medium'> machine learning </span>and
        <span className='font-medium'> full-stack development</span>. These
        interests allow me to pursue my love of problem solving. My core stack
        is
        <span className='font-medium'>
          {' '}
          React, Next.js, Node.js, and MongoDB
        </span>
        . I also utilize Framer Motion and TypeScript in my projects and am
        eager to learn new technologies. I am currently looking for a
        <span className='font-medium'> full-time position </span>as a software
        engineer.
      </p>
      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy reading
        books, cooking, and lifting weights. I also enjoy
        <span className='font-medium'> learning new things</span>. I am
        currently learning how to{' '}
        <span className='font-medium'>
          read, write, and speak the Arabic language
        </span>
        .
      </p>
    </motion.section>
  );
}
