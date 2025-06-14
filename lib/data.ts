import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import tnr from '@/public/tnr.png';
import prnu from '@/public/PRNU.png';
import releaf from '@/public/releaf.png';
import flags from '@/public/flags.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'University of California San Diego',
    location: 'La Jolla, CA',
    description:
      'I graduated with a Bachelor of Science degree in Computer Engineering.',
    icon: React.createElement(LuGraduationCap),
    date: '2012-2016',
  },
  {
    title: 'Network Engineer at AutoChlor-Systems',
    location: 'Mountain View, CA',
    description:
      'Managed and deployed routers, computers, and all technological devices to 60+ branches in our Company',
    icon: React.createElement(CgWorkAlt),
    date: '2018 - 2019',
  },
  {
    title: 'San Jose State University',
    location: 'San Jose, CA',
    description:
      'I graduated with a Master of Science degree in Computer Science. I focused on taking machine learning classes and did my Masters Thesis on Faking Sensor Noise using generative and classifying machine learning models.',
    icon: React.createElement(LuGraduationCap),
    date: '2020 - 2022',
  },
  {
    title: 'Software Developer at Nikaya',
    location: 'Mountain View, CA',
    description:
      'I am working on full stack development for software interfaces for remote patient monitoring. I also design machine learning models for disease classification to demonstrate future endeavors with customer data. Participated in sales presentations about Machine Learning to clinics, partners, and customers.',
    icon: React.createElement(CgWorkAlt),
    date: '2023 - Present',
  },
] as const;

export const projectsData = [
  {
    title: 'Arabic Dialect Detector',
    description:
      'Instructional notebooks for the detection Arabic dialects using the MADAR corpus and NLP techniques, covering over 25 regional variations. The project involved preprocessing raw Arabic text, training BiLSTM and Transformer-based models, and analyzing results through confusion matrices and classification reports.',
    tags: [
      'TensorFlow',
      'PyTorch',
      'Hugging Face',
      'Transformers',
      'BERT',
      'Numpy',
      'Pandas',
      'Keras',
    ],
    imageUrl: flags,
  },
  {
    title: 'TNR-Community',
    description:
      'Working on an application to help local communities facilitate the trap, neuter, returning, and adopting of stray animals. This application is designed to keep volunteers and veterinarians organized. A database of strays will also be managed. ML animal recognition in the near future.',
    tags: [
      'React',
      'Next.js',
      'MongoDB',
      'Tailwind',
      'TypeScript',
      'Framer Motion',
      'Jest',
      'Localization',
    ],
    imageUrl: tnr,
  },
  {
    title: 'Faking Sensor Noise Information',
    description:
      'Designed a GAN and a classifier to analyze state of the art techniques for generating fake sensor noise patterns and classifying pictures based on source camera models. Applied and analyzed various denoising techniques to extract sensor noise patterns.',
    tags: [
      'NumPy',
      'TensorFlow',
      'Scikit-learn',
      'Pandas',
      'Matplotlib',
      'Seaborn',
    ],
    imageUrl: prnu,
  },
  {
    title: 'ReLeaf',
    description:
      'Designed and trained a Neural Network to classify plant leaves and their diseases. Conducted various experiments with different Neural Network architectures. Achieved a training accuracy of 99% and a test accuracy of 75% by applying transfer learning with a pretrained model named Inception V3.',
    tags: [
      'NumPy',
      'TensorFlow',
      'Scikit-learn',
      'Pandas',
      'Matplotlib',
      'Seaborn',
    ],
    imageUrl: releaf,
  },
] as const;

export const skillsData = [
  'Python',
  'NumPy',
  'TensorFlow',
  'PyTorch',
  'Hugging Face',
  'Scikit-learn',
  'Pandas',
  'Matplotlib',
  'Keras',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'Framer Motion',
] as const;
