import React from 'react'
import { GoHome } from 'react-icons/go'
import { BsArrowReturnLeft } from 'react-icons/bs'
import {FaBookReader} from 'react-icons/fa'

const pick_more = [
    {
        id: 1,
        url: '/pronouns',
        text: <BsArrowReturnLeft/>
    },
    {
        id: 2,
        url: '/quizzes',
        text: 'Quizzes'
    },
    {
        id: 3,
        url: '/',
        text: <GoHome/>
    },
    {
        id: 4,
        url: '/pronouns_grammar',
        text: <FaBookReader />
    },
]
export default pick_more
