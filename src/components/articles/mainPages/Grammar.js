import React, {useState} from 'react'
import { QuizzesButtonGrammar } from '../../../General Pages/Show Quiz Buttons/QuizzesButton'
import ShowSideBar from '../../../General Pages/ShowSideBar'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    ArticlesGrammarContainer,
    ArticlesSide,
    ArticlesMain,
    ArticlesContainer,
    InsideContainer1,
    ExemptionBox,
    InsideContainer2,
    // Articles1,
} from './grammar.styled'
import {IoIosArrowDown} from 'react-icons/io'
import '../style.css'

const ArticlesGrammar = () => {
    const [showExample8, setShowExample8] = useState(false)
    const [showExample9, setShowExample9] = useState(false)
    const [showExample10, setShowExample10] = useState(false)
    const [showExample11, setShowExample11] = useState(false)
    const [showExample12, setShowExample12] = useState(false)
    const [showExample13, setShowExample13] = useState(false)
    const [showExample14, setShowExample14] = useState(false)
    const [showExample15, setShowExample15] = useState(false)

    return (
        <>
        <div className="fatline"></div>
        <ArticlesGrammarContainer>
            <ShowSideBar/>
            <ArticlesSide>
                <SidebarGrammar/>
            </ArticlesSide>
            <ArticlesMain>
                <h1>Articles</h1>
                <ArticlesContainer>
                    <h1>The definite article: 'the'</h1>
                    <InsideContainer1>
                        <p>The definite article <span>the</span> is used when we are talking about something in particular.</p>
                        <div className="green">In more detail, we use the definite article:</div>
                        
                        <li>to talk about something we have already  mentioned.</li>
                        <div className="example">Sally has got two pieces of luggage: a suitcase and a handbag. The suitcase is very heavy.</div>

                        <li>to talk about something that is unique.</li>
                        <div className="example">The Pope / The moon / the president of France</div>

                        <li>when it is clear from the situation which person or thing we mean.</li>
                        <div className="example">The bus is coming. (=it's the bus we are waiting for)</div>

                        <li>to talk about a system or service.</li>
                        <div className="example">You should call the police.</div>

                        <li>to talk about a type of thing.</li>
                        <div className="example">The crocodile is very dangerous. (this type of animal)</div>

                        <li>with a superlative adjective.</li>
                        <div className="example">This is the oldest building in the town.</div>

                        <li>to talk about groups of people like rich, poor, elderly, unemployed etc.</li>
                        <div className="example">I think the rich should pay more taxes.</div>
                    </InsideContainer1>
                    <div className="exemption">We don't normally use the definite article with NAMES.</div>
                    <div className="green">Check the box below for the exceptions.</div>
                    <ExemptionBox>
                        <div className="exceptions_container1">
                            <div className="exceptions_title1"><span>USE 'THE'</span> </div>
                            <div className="exceptions_content_column">
                                <div className="exceptions_content">
                                    <div className='rule'>• countries contain States, Republic, Kingdom,  Union</div>
                                    <div className='example rule'>the United States, the Czech Republic, the United Kingdom, the European Union</div>
                                </div>
                                <div className="exceptions_content">
                                    <div className='rule'>• countries which have plural nouns as their names</div>
                                    <div className='example rule'>the Netherlands, the Philippines </div>
                                </div>
                                <div className="exceptions_content">
                                    <div className='rule'>• mountain ranges, groups of islands</div>
                                    <div className='example rule'>the Himalayas, the Canary Islands</div>
                                </div>
                                <div className="exceptions_content">
                                    <div className='rule'>• rivers, seas, oceans, canals, deserts</div>
                                    <div className='example rule'> the Thames, the Baltic sea, the Atlantic Ocean, the Panama canal, the Sahara Desert </div>
                                </div>
                                <div className="exceptions_content">
                                    <div className='rule'>• well-known buildings, works of art, museums, theatres</div>
                                    <div className='example rule'>the Empire State Building, the Mona Lisa, the British Museum</div>
                                </div>
                                <div className="exceptions_content">
                                    <div className='rule'>• newspapers, organizations</div>
                                    <div className='example rule'>the Times, the United Nations</div>
                                </div>
                                <div className="exceptions_content">
                                    <div className='rule'>• name contains 'of '</div>
                                    <div className='example rule'>the Tower of London, the Bank of England</div>
                                </div>
                                <div className="exceptions_content">
                                    <div className='rule'>• families</div>
                                    <div className='example rule'>the Simpsons, the Jacksons</div>
                                </div>
                            </div>
                        </div>
                        <div className="exceptions_container2">
                            <div className="exceptions_title2"><span>DO NOT use 'THE'</span><h6>(zero article)</h6></div>
                            <div className="exceptions_content_column">
                                <div className="exceptions_content">
                                    <div className='rule'>• cities, towns, streets, parks, squares</div>
                                    <div className='example rule'>London, Bristol, Oxford Street, Central Park, Trafalgar Square</div>
                                </div>
                                <div className="exceptions_content">
                                    <div className='rule'>• names, nicknames or names with title</div>
                                    <div className='example rule'>William Shakespear, Bono, Mrs Smith, Doctor Martin</div>
                                </div>
                                <div className="exceptions_content">
                                    <div className='rule'>• continents and most the countries </div>
                                    <div className='example rule'>England, Spain, Japan, Thailand, Africa, Asia</div>
                                </div>
                                <div className="exceptions_content">
                                    <div className='rule'>• lakes, single islands, single mountains</div>
                                    <div className='example rule'>Lake Tanganyika, Madagascar, Mount Everest</div>
                                </div>
                                <div className="exceptions_content">
                                    <div className='rule'>• many brands</div>
                                    <div className='example rule'>BMW, Apple, McDonald's</div>
                                </div>
                                <div className="exceptions_content">
                                    <div className='rule'>• two words and the first word is a name</div>
                                    <div className='example rule'>Buckingham Palace, Heathrow Airport</div>
                                </div>
                            </div>
                        </div>
                    </ExemptionBox>
                </ArticlesContainer>

                <ArticlesContainer>
                    <h1>The indefinite article: 'a/an'</h1>
                    <InsideContainer1>
                        <p>The indefinite article <span>a/an</span> is used with <span>singular countable nouns</span> to talk about something in general. </p>
                        <p>We use <span>a</span> before a consonant sound and <span>an</span> before a vowel sound.</p>
                        <div className="return_indefinite_example">
                            <div>e.g</div>
                            <div>
                                <li><span>a b</span>anana</li>
                                <li><span>a u</span>niversity</li>
                                <li><span>an o</span>range</li>
                                <li><span>an h</span>our</li>
                            </div>
                            <div>
                                <li> (consonant letter, /b/)</li>
                                <li> (consonant sound, /j/)</li>
                                <li> (vowel letter, /o/)</li>
                                <li> (vowel sound, /au/)</li>
                            </div>
                        </div>
                        <hr />
                        <br />
                        <div className="green">In more detail, we use the indefinite article:</div>
                        <br />

                        <div className="rule8">Rule 1</div>
                        <button className='show_hide_box' onClick={() =>
                            {
                                setShowExample8(!showExample8)
                                setShowExample9(false)
                                setShowExample10(false)
                                setShowExample11(false)
                            }
                        }>
                            <li>to talk about something we mention for the first time.</li>
                            <i><IoIosArrowDown /></i>
                        </button>
                        {showExample8 && 
                            <div className="return_inside3 ">I live in  <span>a</span> small city.</div>                        
                        }

                        <div className="rule8">Rule 2</div>
                        <button className='show_hide_box' onClick={() =>
                            {
                                setShowExample9(!showExample9)
                                setShowExample8(false)
                                setShowExample10(false)
                                setShowExample11(false)
                            }
                        }>
                            <li>to show that the person or thing is one of a group.</li>
                            <i><IoIosArrowDown /></i>
                        </button>
                        {showExample9 && 
                            <div className="return_inside3 ">She is <span>a</span> pupil at London Road School.</div>                        
                        }

                        <div className="rule8">Rule 3</div>
                        <button className='show_hide_box' onClick={() =>
                             {
                                setShowExample10(!showExample10)
                                setShowExample8(false)
                                setShowExample9(false)
                                setShowExample11(false)
                            }
                        }>
                            <li>to talk about someone's job.</li>
                            <i><IoIosArrowDown /></i>
                        </button>
                        {showExample10 && 
                            <div className="return_inside3 ">She is <span>a</span> teacher.</div>                        
                        }

                        <div className="rule8">Rule 4</div>
                        <button className='show_hide_box' onClick={() =>
                             {
                                setShowExample11(!showExample11)
                                setShowExample8(false)
                                setShowExample9(false)
                                setShowExample10(false)
                            }
                        }>
                            <li>to say what kind of person or thing it is.</li>
                            <i><IoIosArrowDown /></i>
                        </button>
                        {showExample11 && 
                            <div className="return_inside3 ">That's  <span>a</span> very expensive car.</div>                        
                        }
                        
                    </InsideContainer1>
                </ArticlesContainer>

                <ArticlesContainer>
                    <h1>Zero Article</h1>
                    <InsideContainer2>
                        <p>We use <span>Zero Article</span> with plural nouns to talk about something in general. </p>
                        <div className="green">In more detail, we use the zero article:</div>
                        <br />

                        <div className="rule8">Rule 1</div>
                        <button className='show_hide_box' onClick={() =>
                            {
                                setShowExample12(!showExample12)
                                setShowExample13(false)
                                setShowExample14(false)
                                setShowExample15(false)
                           
                            }
                        }>
                            <li>to talk about people or things in general.</li>
                            <i><IoIosArrowDown /></i>
                            {/* <i><IoIosArrowDown /></i> */}
                        </button>
                        {showExample12 && 
                            <div className="return_inside3 ">Cats are beautiful animals. (cats in general)</div>                        
                        }

                        <div className="rule8">Rule 2</div>
                        <button className='show_hide_box' onClick={() =>
                            {
                                setShowExample13(!showExample13)
                                setShowExample12(false)
                                setShowExample14(false)
                                setShowExample15(false)
                            }
                        }>
                            <li>with uncountable nouns when we talk about them in general.</li>
                            <i><IoIosArrowDown /></i>
                        </button>
                        {showExample13 && 
                            <div className="return_inside3 ">Petrol is expensive.</div>                        
                        }

                        <div className="rule8">Rule 3</div>
                        <button className='show_hide_box' onClick={() =>
                             {
                                setShowExample14(!showExample14)
                                setShowExample12(false)
                                setShowExample13(false)
                                setShowExample15(false)
                            }
                        }>
                            <li>with continents, countries, regions, cities, streets, mountains etc</li>
                            <i><IoIosArrowDown /></i>
                        </button>
                        {showExample14 && 
                            <div className="return_inside3 ">Asia, Italy, California, Main St., Mount Everest</div>                        
                        }

                        <div className="rule8">Rule 3</div>
                        <button className='show_hide_box' onClick={() =>
                             {
                                setShowExample15(!showExample15)
                                setShowExample12(false)
                                setShowExample13(false)
                                setShowExample14(false)
                            }
                        }>
                            <li >when we are talking about the idea of school, university, hospital, bed, work</li>
                            <i><IoIosArrowDown /></i>
                        </button>
                        {showExample15 && 
                            <div className="return_inside4">
                                <h4>Compare:</h4>
                                <div className="compare_examples">
                                    <div>The church on our street was built in the 17th Century.</div>
                                    <div>I go to church every Sunday.</div>
                                </div>
                            </div>                        
                        }
                        
                    </InsideContainer2>
                </ArticlesContainer>
            {/* Button */}
            <QuizzesButtonGrammar page='/articles' text='Articles Quizzes'/>
            {/* </div> */}
            </ArticlesMain>
        </ArticlesGrammarContainer>
        </>
    )
}

export default ArticlesGrammar
