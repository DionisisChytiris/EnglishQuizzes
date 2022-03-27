import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { BsArrowReturnLeft } from 'react-icons/bs'
import { MdFace, MdRowing, MdInsertEmoticon } from 'react-icons/md'
import {  VscRemove} from 'react-icons/vsc'

/* NAVBAR */
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/quizzes',
    text: 'quizzes',
  },
  {
    id: 3,
    url: '/grammar',
    text: 'grammar',
  },
  {
    id: 4,
    url: '/fce_practice',
    text: 'FCE',
  },
  {
    id: 5,
    url: '/about',
    text: 'about',
  },
  {
    id: 6,
    url: '/contact',
    text: 'contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  }
];

/*  GRAMMAR QUIZZES */ 
export const quizzes_links = [
  {
    ids: 1,
    url: '/prepositions',
    text: 'Prepositions',
    info1: 'Prepositions of Time (on, in, at)',
    info2: 'Prepositions of Place (on, in, at)',
    info3: <MdFace/>
  },
  {
    ids: 2,
    url: '/articles',
    text: 'Articles',
    info1: 'Definite Article (the)',
    info2: 'Indefinite Article (a/an)',
    info3: 'No Article'
  },
  {
    ids: 3,
    url: '/pronouns',
    text: 'Pronouns',
    info1: 'Personal Pronouns',
    info2: 'Possessive Pronouns',
    info3: 'Reflexive Pronouns',
    info4: 'Demonstrative Pronouns',
    info5: 'Relative Pronouns',
    info6: 'Interrogative Pronouns',
    info7: 'Indefinite Pronouns',
    info8: 'Reciprocal Pronouns',
  },
  {
    ids: 4,
    url: '/modals',
    text: 'Modals',
    info1: 'modals 1',
    info2: 'modals 2',
    info3: 'modals 3'
  },
  {
    ids: 5,
    url: '/tenses1',
    text: 'Tenses 1',
    info1: 'Present Simple',
    info2: 'Present Continuous',
    info3: 'Past Simple',
    info4: 'Past Continuous',
    info5: 'Future Simple',
    info6: 'Future Continuous'
  },
  {
    ids: 6,
    url: '/tenses2',
    text: 'Tenses 2',
    info1: 'Present Perfect',
    info2: 'Present Perfect Continuous',
    info3: 'Past Perfect',
    info4: 'Past Perfect Continuous',
    info5: 'Future Perfect',
    info6: 'Future Perfect Continuous'
  },
  {
    ids: 7,
    url: '/tenses3',
    text: 'Tenses 3',
    info1: <VscRemove/>,
    info2: 'hello world',
    info3: <MdRowing/>,
  },
  {
    ids: 8,
    url: '/verbs_to_ing',
    text: 'Verbs +to / +ing',
    info1: 'Gerund',
    info2: 'Infinitive',
    info3: <MdInsertEmoticon/>
  },
  {
    ids: 9,
    url: '/passive',
    text: 'Passive Voice',
    info1: 'Passive voice',
    info2: '-',
    info3: <MdInsertEmoticon/>
  },
  {
    ids: 10,
    url: '/conditionals',
    text: 'Conditionals',
    info1: '-',
    info2: 'Conditionals',
    info3: <MdInsertEmoticon />
  },
]

/* FCE PRACTICE */ 
export const fce_practice_links = [
  {
    id: 10,
    url: '/openClose',
    text: 'Open Close',
    info: 'Prepositions of Time I, II'
  },
  {
    id: 20,
    url: '/multipleChoice',
    text: 'Multiple Choice Cloze',
    info: 'hello world'
  },
  {
    id: 30,
    url: '/wordFormation',
    text: 'Word Formation',
    info: 'hello'
  },
  {
    id: 40,
    url: '/keyWordTransformations',
    text: 'Key Word Transformations',
    info: 'hello world'
  }
]

/* FCE PRACTICE - SIDEBARs */
/* Open Close */
export const openClose_links = [
  {
    id: 1,
    url: '/openClose1',
    text: 'Exercise 1'
  },
  {
    id: 2,
    url: '/openClose2',
    text: 'Exercise 2'
  },
  {
    id: 3,
    url: '/openClose3',
    text: 'Exercise 3'
  },
  {
    id: 4,
    url: '/openClose4',
    text: 'Exercise 4',
  },
  // {
  //   id: 5,
  //   url: '/openClose',
  //   text: <BsArrowReturnLeft/>
  // },
  // {
  //   id: 6,
  //   url: '/fce_practice',
  //   text: 'FCE Practice'
  // },
]

/*  Word Formation */
export const wordFormation_links = [
  {
    id: 1,
    url: '/wordFormation1',
    text: 'Exercise 1'
  },
  {
    id: 2,
    url: '/wordFormation2',
    text: 'Exercise 2'
  },
  {
    id: 3,
    url: '/wordFormation3',
    text: 'Exercise 3'
  },
  {
    id: 4,
    url: '/wordFormation4',
    text: 'Exercise 4',
  },
  {
    id: 5,
    url: '/wordFormation5',
    text: 'Exercise 5'
  },
  {
    id: 6,
    url: '/wordFormation6',
    text: 'Exercise 6'
  }, 
]

/*  MULTIPLE CHOICE */
export const multipleChoice_links = [
  {
    id: 1,
    url: '/multipleChoice1',
    text: 'Exercise 1'
  },
  {
    id: 2,
    url: '/multipleChoice2',
    text: 'Exercise 2'
  },
  {
    id: 3,
    url: '/multipleChoice3',
    text: 'Exercise 3'
  },
  {
    id: 4,
    url: '/multipleChoice4',
    text: 'Exercise 4',
  },
  {
    id: 5,
    url: '/multipleChoice5',
    text: 'Exercise 5'
  },
  {
    id: 6,
    url: '/multipleChoice6',
    text: 'Exercise 6'
  }, 
]