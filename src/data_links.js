import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsArrowReturnLeft } from 'react-icons/bs'
import { MdFace, MdMotorcycle, MdRowing, MdInsertEmoticon } from 'react-icons/md'
import { VscEllipsis, VscRemove} from 'react-icons/vsc'

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
    id: 1,
    url: '/prepositions',
    text: 'Prepositions',
    info1: 'Prepositions of Time (on, in, at)',
    info2: 'Prepositions of Place (on, in, at)',
    info3: <MdFace/>
  },
  {
    id: 2,
    url: '/articles',
    text: 'Articles',
    info1: 'Definite Article (the)',
    info2: 'Indefinite Article (a/an)',
    info3: 'No Article'
  },
  {
    id: 3,
    url: '/pronouns',
    text: 'Pronouns',
    info1: 'Personal Pronouns',
    info2: 'Demonstrative Pronouns',
    info3: 'Relative Pronouns'
  },
  {
    id: 4,
    url: '/modals',
    text: 'Modals',
    info1: 'modals 1',
    info2: 'modals 2',
    info3: 'modals 3'
  },
  {
    id: 5,
    url: '/tenses1',
    text: 'Tenses 1',
    info1: 'Present Simple / Present Continuous',
    info2: 'Past Simple / Past Continuous',
    info3: 'Future Simple / Future Continuous'
  },
  {
    id: 6,
    url: '/tenses2',
    text: 'Tenses 2',
    info1: 'Present Perfect / Present Perfect Continuous',
    info2: 'Past Perfect / Past Perfect Continuous',
    info3: 'Future Perfect / Future Perfect Continuous'
  },
  {
    id: 7,
    url: '/tenses3',
    text: 'Tenses 3',
    info1: <VscRemove/>,
    info2: 'hello world',
    info3: <MdRowing/>,
  },
  {
    id: 8,
    url: '/verbs_to_ing',
    text: 'Verbs + to /  + -ing',
    info1: 'Verbs + to + infinitive',
    info2: 'Verbs + -ing',
    info3: <MdInsertEmoticon/>
  },
  {
    id: 9,
    url: '/passive',
    text: 'Passive Voice',
    info1: 'Passive voice',
    info2: '-',
    info3: <MdInsertEmoticon/>
  },
]

/* FCE PRACTICE */ 
export const fce_practice_links = [
  {
    id: 1,
    url: '/openClose',
    text: 'Open Close',
    info: 'Prepositions of Time I, II'
  },
  {
    id: 2,
    url: '/multipleChoice',
    text: 'Multiple Choice Cloze',
    info: 'hello world'
  },
  {
    id: 3,
    url: '/wordFormation',
    text: 'Word Formation',
    info: 'hello'
  },
  {
    id: 4,
    url: '/keyWordTransformations',
    text: 'Key Word Transformations',
    info: 'hello world'
  }
]

/* SIDEBARs */
/* GRAMMAR QUIZZES - SIDEBARs  */
export const prepositions_links = [
  {
    id: 1,
    url: '/quiz1',
    text: '| Quiz 1 (place)',
    level: '(A1-A2)'
  },
  {
    id: 2,
    url: '/quiz2',
    text: '| Quiz 2 (time)'
  },
  {
    id: 3,
    url: '/quiz3',
    text: '| Quiz 3 (place)',
    level: '(B1-B2)'
  },
  {
    id: 4,
    url: '/quiz4',
    text: '| Quiz 4 (time)',
  },
  {
    id: 5,
    url: '/quiz4',
    text: '| Quiz 5',
    level: '(C1-C2)'
  },
  {
    id: 6,
    url: '/quiz4',
    text: '| Quiz 6',
    hola: '==========='
  },
  {
    id: 7,
    url: '/test1prepositions',
    text: 'Test 1',
    hola: '__________'
  },
  {
    id: 8,
    url: '/prepositions',
    text: <BsArrowReturnLeft/>
  },
  {
    id: 9,
    url: '/quizzes',
    text: 'Quizzes'
  },
]

export const pronouns_links = [
  {
    id: 1,
    url: '/quiz5',
    text: 'Quiz 1',
    level: 'Personal Pronouns'
  },
  {
    id: 2,
    url: '/quiz6',
    text: 'Quiz 2',
    level: 'Demonstrative Pronouns'
  },
  {
    id: 2,
    url: '/quiz7',
    text: 'Quiz 3',
    level: 'Relative Pronouns',
    hola: '======='
  },
  {
    id: 3,
    url: '/quiz8',
    text: 'Test',
    // level: 'Test',
    hola: '__________'
  },
  {
    id: 5,
    url: '/pronouns',
    text: <BsArrowReturnLeft/>
  },
  {
    id: 6,
    url: '/quizzes',
    text: 'Quizzes'
  },
]

export const modals_links = [
  {
    id: 1,
    url: '/modal1',
    text: 'Quiz 1',
    level: 'Modals 1'
  },
  {
    id: 2,
    url: '/modal2',
    text: 'Quiz 2',
    level: 'Modals 2'
  },
  {
    id: 2,
    url: '/modal3',
    text: 'Quiz 3',
    level: 'Modals 3',
    hola: '======='
  },
  {
    id: 3,
    url: '/quiz8',
    text: 'Test',
    // level: 'Test',
    hola: '__________'
  },
  {
    id: 5,
    url: '/modals',
    text: <BsArrowReturnLeft/>
  },
  {
    id: 6,
    url: '/quizzes',
    text: 'Quizzes'
  },
]


export const articles_links = [
  {
    id: 0,
    url: '/quiz-9',
    text: '| Quiz 1',
    level: '(A1-A2)'
  },
  {
    id: 1,
    url: '/quiz9',
    text: '| Quiz 2',
    level: '(B1-B2)'
  },
  {
    id: 2,
    url: '/quiz10',
    text: '| Quiz 3'
  },
  {
    id: 3,
    url: '/quiz11',
    text: '| Quiz 4',
    level: '(C1-C2)',
    hola: "========="
  },
  {
    id: 4,
    url: '/quiz12',
    text: ' Test 1',
    hola: '________'
  },
  {
    id: 5,
    url: '/articles',
    text: <BsArrowReturnLeft/>
  },
  {
    id: 6,
    url: '/quizzes',
    text: 'Quizzes'
  },
]


export const tenses1_links = [
  {
    id: 1,
    url: '/tenses1quiz1',
    text: 'Quiz 1',
    level: 'Present Simple/ Present Continuous'
  },
  {
    id: 2,
    url: '/tenses1quiz2',
    text: 'Quiz 2',
    level: 'Past Simple/ Past Continuous'
  },
  {
    id: 3,
    url: '/tenses1quiz3',
    text: 'Quiz 3',
    level: 'Future Simple/ Future Continuous'
  },
  {
    id: 4,
    url: '/tenses1quiz4',
    text: 'Open cloze',
    hola: '----------------'
  },
  {
    id: 5,
    url: '/tenses1',
    text: <BsArrowReturnLeft/>
  },
  {
    id: 6,
    url: '/quizzes',
    text: 'Quizzes'
  },
]

export const tenses2_links = [
  {
    id: 1,
    url: '/tenses2quiz1',
    text: 'Quiz 1',
    level: 'Present Perfect / Present Perfect Continuous'
  },
  {
    id: 2,
    url: '/tenses2quiz2',
    text: 'Quiz 2',
    level: 'Past Perfect / Past Perfect Continuous'
  },
  {
    id: 3,
    url: '/tenses2quiz3',
    text: 'Quiz 3',
    level: 'Future Perfect / Future Perfect Continuous'
  },
  {
    id: 4,
    url: '/tenses2quiz4',
    text: 'Open cloze'
  },
  {
    id: 5,
    url: '/tenses2',
    text: <BsArrowReturnLeft/>
  },
  {
    id: 6,
    url: '/quizzes',
    text: 'Quizzes'
  },
]

export const tenses3_links = [
  {
    id: 1,
    url: '/tenses3quiz1',
    text: 'Quiz 1'
  },
  {
    id: 2,
    url: '/tenses3quiz2',
    text: 'Quiz 2'
  },
  {
    id: 3,
    url: '/tenses3quiz3',
    text: 'Listening'
  },
  {
    id: 4,
    url: '/tenses3quiz4',
    text: 'Open cloze'
  },
  {
    id: 5,
    url: '/tenses3_quizzes',
    text: <BsArrowReturnLeft/>
  },
  {
    id: 6,
    url: '/quizzes',
    text: 'Quizzes'
  },
]

export const verbs_to_ing_links = [
  {
    id: 1,
    url: '/verbs_to_ing_1',
    text: 'Quiz 1'
  },
  {
    id: 2,
    url: '/verbs_to_ing_2',
    text: 'Quiz 2'
  },
  {
    id: 3,
    url: '/verbs_to_ing_3',
    text: 'Quiz 3'
  },
  {
    id: 4,
    url: '/verbs_to_ing_4',
    text: 'Quiz 4'
  },
  {
    id: 5,
    url: '/verbs_to_ing',
    text: <BsArrowReturnLeft/>
  },
  {
    id: 6,
    url: '/quizzes',
    text: 'Quizzes'
  },
]

export const passive_links = [
  {
    id: 1,
    url: '/passive_1',
    text: 'Quiz 1'
  },
  {
    id: 2,
    url: '/passive_2',
    text: 'Quiz 2'
  },
  {
    id: 3,
    url: '/passive_3',
    text: 'Quiz 3'
  },
  {
    id: 4,
    url: '/passive',
    text: <BsArrowReturnLeft/>
  },
  {
    id: 5,
    url: '/quizzes',
    text: 'Quizzes'
  },
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