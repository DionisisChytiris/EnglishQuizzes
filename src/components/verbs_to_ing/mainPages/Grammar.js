import React from 'react'
// import '../style.css'
import { IoArrowRedo } from 'react-icons/io5'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    Verbs_to_ingGrammar,
    Verbs_to_ingSide,
    Verbs_to_ingMain,
    Verbs_to_ingBox1,
    Verbs_to_ingBox2,
    Verbs_to_ingBox3,
    Verbs_to_ingContainer,
} from '../verbs_to_ing.styled'

const Verbs_to_ing_Grammar = () => {
    return (
        <Verbs_to_ingGrammar>
            <Verbs_to_ingSide>
                <SidebarGrammar/>
            </Verbs_to_ingSide>
            <Verbs_to_ingMain>
                <Verbs_to_ingBox1>
                    <Verbs_to_ingContainer>
                        <h1>Verbs -to -ing</h1>
                    </Verbs_to_ingContainer>
                </Verbs_to_ingBox1>
                <Verbs_to_ingBox2>
                    <Verbs_to_ingContainer>
                       World
                    </Verbs_to_ingContainer>
                </Verbs_to_ingBox2>
                <Verbs_to_ingBox3>
                    <Verbs_to_ingContainer>
                        !!!
                    </Verbs_to_ingContainer>
                </Verbs_to_ingBox3>
            </Verbs_to_ingMain>
        </Verbs_to_ingGrammar>
    )
}

export default Verbs_to_ing_Grammar
