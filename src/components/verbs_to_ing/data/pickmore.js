import React from 'react'
import {GoHome} from 'react-icons/go'
import { FaBookReader } from 'react-icons/fa'
import { BsArrowReturnLeft } from 'react-icons/bs'

const pick_more = [
    {
        id: 1,
        url: '/verbs_to_ing',
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
        url: '/verbs_to_ing_grammar',
        text: <FaBookReader />
    },
]
export default pick_more