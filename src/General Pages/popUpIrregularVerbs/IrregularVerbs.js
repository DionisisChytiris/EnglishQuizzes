import React from 'react'
import { VerbsData1 } from './irregularVerbsData'
import '../styleGeneral.css'

const IrregularVerbs = () => {
    return (
        <>
            <div className='irregularVerbs'>
                <p>Irregular Verbs</p>
                <div className='irregularVerbs-container'>
                    <div className='irregularVerbs-title'>
                        <div>infinitive</div>
                        <div>past Simple</div>
                        <div>past Participle</div>
                    </div>
                    {VerbsData1.map((a) => {
                        const { infinitive, pastSimple, pastParticiple } = a
                        return (
                            <div className='container-verbs'>
                                <div className="irregularInfinitive">
                                    {infinitive}
                                </div>
                                <div className="irregularPastSimple">
                                    {pastSimple}
                                </div>
                                <div className="irregularPastParticiple">
                                    {pastParticiple}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default IrregularVerbs
