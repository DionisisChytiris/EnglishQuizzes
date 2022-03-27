import React from 'react'
import {GoHome} from 'react-icons/go'
import { FaBookReader } from 'react-icons/fa'
import { BsArrowReturnLeft } from 'react-icons/bs'

const pick_more= [
    {
        id: 1,
        url: '/tenses3',
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
        url: '/tenses3_grammar',
        text: <FaBookReader />
    },
]
export default pick_more