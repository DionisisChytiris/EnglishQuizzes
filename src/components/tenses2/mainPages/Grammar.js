import React from 'react'
// import '../style.css'
import { IoArrowRedo } from 'react-icons/io5'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    Tenses2Grammar,
    Tenses2Side,
    Tenses2Main,
    Tenses2Box1
} from './grammar.styled'

const Tenses2_Grammar = () => {
    return (
        <Tenses2Grammar>
            <Tenses2Side>
                <SidebarGrammar/>
            </Tenses2Side>
            <Tenses2Main>
                <Tenses2Box1>
                    <div className='title'>Tenses 2</div>
                    <h1>Zero Conditional</h1>
                    <h1>First Conditional</h1>
                </Tenses2Box1>
            </Tenses2Main>
        </Tenses2Grammar>
    )
}

export default Tenses2_Grammar
