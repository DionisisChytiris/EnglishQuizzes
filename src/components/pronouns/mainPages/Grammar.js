import React, {useState} from 'react'
import ShowSideBar from '../../../General Pages/ShowSideBar'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    PronounsGrammarContainer,
    PronounsSide,
    PronounsMain,
    PronounsContainer1,
    PronounsRules,
    PronounChart,
    PronounsChartIndefinite,
} from './grammar.styled'
import {FaCheck, FaTimes} from 'react-icons/fa'
import { QuizzesButtonGrammar } from '../../../General Pages/QuizzesButton'
import { QuizzesButtonGrammarR } from '../../../General Pages/QuizzesButtonR'
import { Line } from '../../../General Pages/Special Pages/Line'
import DelayLine from '../../../General Pages/Special Pages/DelayLine'

const PronounsGrammar = () => {
    const [personal, setPersonal] = useState()
    const [possessive, setPossessive] = useState()
    const [reflexive, setReflexive] = useState()
    const [demonstrative, setDemonstrative] = useState()
    const [relative, setRelative] = useState()
    const [interrogative, setInterrogative] = useState()
    const [indefinite, setIndefinite] = useState()
    const [reciprocal, setReciprocal] = useState()
    return (
        <>
        <div className="fatline"></div>
        <PronounsGrammarContainer>
            <ShowSideBar/>
            <PronounsSide>
                <SidebarGrammar/>
            </PronounsSide>
            <PronounsMain>
                <PronounsContainer1>
                    <h1><span>Pronouns</span></h1>
                    <DelayLine/>
                    {/* <h3>-</h3> */}
                    <div className='voice'>Pronouns are words that take the place of a noun, noun phrase or noun clause. We use them when we already know which nouns are being referring to.  </div>
                    <br />
                    {/* First example */}
                    <div className='box1'>
                        <div className='example'> 
                        James told me to stay home and relax. <color>He</color> (pronoun) is my doctor.</div>
                        <div className='a'>It's obvious that ' <color>He</color> ' is referred to James. </div>
                        <div className='a'>Even if we don't know what the pronouns are, we use them daily. In the above example, there are 3 pronouns: <color>me, he</color> and <color>my</color>.  </div>
                    </div>
                    <br/>
                    <div className='voice'>Pronouns make our writing and speech faster and more varied. We use <color>them</color>* to avoid repetition.</div>
                    <div className='a'>*  (I guess you have already noticed that the word '<color>them</color>' was used to replace the  word  'Pronouns' above.) </div>
                    <br />
                    {/* Second example */}
                    <div className='box1'>
                        <div className='example1'>
                            <div>
                                <div className='letter'>A</div>
                                <div>- Do you like <italic>our new teacher</italic>?</div>
                                <div>- I don't like <italic>our new teacher</italic>. <italic>Our new teacher</italic> is not friendly.</div>
                            </div>
                            <div className='x'><FaTimes/></div>
                        </div>
                        <div className='example2'>
                            <div>
                                <div className='letter'>B</div>
                                <div>- Do you like <italic>our new teacher</italic>?</div>
                                <div>- I don't like <span>him</span>. <span>He</span> is not friendly.</div>
                            </div>
                            <div className='x'><FaCheck/></div>
                        </div>
                        <div className='a'>
                            <div>
                                In the example <span>A</span>, the same noun phrase (<italic>our new teacher</italic>) is repeated for few times making our writing quite boring.
                            </div>
                            <div>
                                In the example <span>B</span>, the pronouns <color>him, he</color> help us use fewer words and avoid repetition.
                            </div>
                        </div>
                    </div>
                    <br/>
                    {/* QuizButton */}
                    <QuizzesButtonGrammar page='/pronouns'text='Pronouns Quizzes'/>
                    {/* <br/> */}
                    <div className='voice0'>There is a number of different categories of pronouns that we use. Let's look at more detail below.
                    </div>
                    <Line />
                    <DelayLine/>
                    {/* Personal Pronouns */}
                    <PronounsRules>
                        <h1>Personal Pronouns</h1>
                        <div>
                            <li>I, you, he, she, it, we, you, they <black>||</black> me, you , him, her, it, us, you, them 
                            </li>
                        </div>
                        {
                            personal && (
                                <>
                                    {/* <br /> */}
                                    {/* personal pronouns explanation */}
                                    <p className='space'><darkblue>Personal pronouns</darkblue> are always specific and are used in place of the person or people that we are talking about. </p>
                                    <li> <colorOrange>George</colorOrange> is my brother. / <colorOrange>He</colorOrange> is my brother.</li>
                                    <p>The personal pronoun <darkblue>He</darkblue> replaces a specific person, <darkblue>George</darkblue>.</p>
                                    {/* <br /> */}
                                    {/* Subject/Object pronouns */}
                                    <p className='space'><darkblue>Personal pronouns</darkblue> have two main categories: <colorBlue>subject pronouns</colorBlue> and <colorBlue>object pronouns</colorBlue>. </p>
                                    <div className='sub-box'>
                                        <p><colorBlue>Subject pronouns</colorBlue> replace the subject of the sentence.</p>
                                        <p className='nospace'>The subject pronouns are: <darkBlue>I, you, he, she, it, we, you, they</darkBlue>.</p>
                                        <li> <colorOrange>He</colorOrange> is my brother.</li>
                                    </div>
                                    <div className='sub-box'>
                                        <p><colorBlue>Object pronouns</colorBlue> replace the object of the sentence.</p>
                                        <p className='nospace'>The object pronouns are: <darkBlue>me, you, him, her, it, us, you, them</darkBlue>.</p>
                                        <li> She gave <colorOrange>him</colorOrange> a gift.</li>
                                    </div>
                                </>
                            )
                        }
                        <button className='read_more' onClick={() => {
                            setPersonal(!personal)
                        }}>
                            {personal ? 'Read less...' : 'Read more...'}
                        </button>
                        
                    </PronounsRules>
                    {/* Possessive Pronouns */}
                    <PronounsRules>
                        <h1>Possessive Pronouns</h1>
                        <div>
                            <li>my, your, his, her, its, our, your, their <black>||</black> mine, yours, his, hers, its, yours, theirs 
                            </li>
                        </div>
                        {
                            possessive && (
                                <>
                                     {/* <br /> */}
                                    {/* possessive pronouns explanation */}
                                    <p className='space'><darkblue>Possessive pronouns</darkblue> are words that show possession or ownership. They are used to indicate that something belongs to someone or has a direct relationship with someone else. </p>
                                    <li> <colorOrange>Our</colorOrange> house is very big.</li>
                                    {/* Adjective/possessive pronouns */}
                                    <p className='space'><darkblue>Possessive pronouns</darkblue> have two categories: <colorBlue>possessive adjectives</colorBlue> and <colorBlue>possessive pronouns</colorBlue>. </p>
                                    <div className='sub-box'>
                                        <p ><colorBlue>Possessive adjectives</colorBlue> are followed by a noun in a sentence and they modify it.</p>
                                        <p className='nospace'>The possessive adjectives are: <darkBlue>my, your, his, her, its, our, your, their</darkBlue>.</p>
                                        <li>Daniel crashed <colorOrange>his car</colorOrange> yesterday. </li>
                                        <p>The possessive adjective <colorOrange>his</colorOrange> makes clear that the following word 'car' is a specific noun: the car belongs to Daniel.</p>
                                    </div>
                                    <div className='sub-box'>
                                        <p><colorBlue>Possessive pronouns</colorBlue> show possession as well, but they drop the noun they are referring to.</p>
                                        <p className='nospace'>The possessive pronouns are: <darkBlue>mine, yours, his, hers, ours, yours, theirs</darkBlue>.</p>
                                        <li> This jacket is <colorOrange>mine</colorOrange> .</li>
                                    </div>
                                </>
                            )
                        }
                         <button className='read_more' onClick={() => {
                            setPossessive(!possessive)
                        }}>
                            {possessive ? 'Read less...' : 'Read more...'}
                        </button>

                    </PronounsRules>
                    {/* Reflexive Pronouns */}
                    <PronounsRules>
                        <h1>Reflexive Pronouns</h1>
                        <div>
                            <li>myself, yourself, himself, herself, itself, ourselves, yourselves, themselves                           
                            </li>
                        </div>
                        {
                            reflexive && (
                                <>
                                   <p className='space'>We use <darkblue> reflexive pronouns</darkblue> when the subject and the object of a verb are the same.</p>
                                    <li> <colorOrange>I </colorOrange> hurt <colorOrange>myself</colorOrange> when I tried to open the broken window  yesterday.</li>
                                    <p className='space'>We also use <darkblue>reflexive pronouns</darkblue> to add emphasis. </p>
                                    <li> I always do my homework <colorOrange>myself</colorOrange>.  <lightBlack> (Nobody  helps me)</lightBlack></li>
                                    <li> I met the  king <colorOrange>himself</colorOrange>.
                                     <lightBlack> (I met him personally,  not somebody else)</lightBlack></li>
                                    
                                    <br/>
                                </>
                            )
                        }
                        <button className='read_more' onClick={() => {
                            setReflexive(!reflexive)
                        }}>{reflexive ? 'Read less...' : 'Read more...'}
                        </button>
                        
                    </PronounsRules>
                    {/* Pronoun Chart */}
                    <PronounChart>
                        <div className='row'>
                            <div className='empty'></div>
                            <h1> Personal Pronouns</h1>
                            <div className='possessive'> Possessive</div>
                            <h3 className='a' style={{color: '#045370'}}>-</h3>                           
                        </div>
                        <div className='row'>
                            <div className='empty1'></div>
                            <h3> Subject </h3>
                            <h3> Object </h3>
                            <h3> Adjectives </h3>
                            <h3> Pronouns </h3>
                            <h5> Reflexive Pronouns</h5>                           
                        </div>
                        <div className='row'>
                            <h2>1st singular</h2>
                            <h4>I</h4>                           
                            <h4>me</h4>                           
                            <h4>my</h4>                           
                            <h4>mine</h4>                           
                            <h4>myself</h4>                           
                        </div>
                        <div className='row'>
                            <h2>2nd singular</h2>
                            <h4>you</h4>                           
                            <h4>you</h4>                           
                            <h4>your</h4>                           
                            <h4>yours</h4>                           
                            <h4>yourself</h4>                           
                        </div>
                        <div className='row'>
                            <h2>3nd singular (male) </h2>
                            <h4>he</h4>                           
                            <h4>him</h4>                           
                            <h4>his</h4>                           
                            <h4>his</h4>                           
                            <h4>himself</h4>                           
                        </div>
                        <div className='row'>
                            <h2>3nd  singular (female)</h2>
                            <h4>she</h4>                           
                            <h4>her</h4>                           
                            <h4>her</h4>                           
                            <h4>hers</h4>                           
                            <h4>herself</h4>                           
                        </div>
                        <div className='row'>
                            <h2>3nd  singular (neutral)</h2>
                            <h4>it</h4>                           
                            <h4>it</h4>                           
                            <h4>its</h4>                           
                            <h4>not used</h4>                           
                            <h4>itself</h4>                           
                        </div>
                        <div className='row'>
                            <h2>1st plural</h2>
                            <h4>we</h4>                           
                            <h4>us</h4>                           
                            <h4>our</h4>                           
                            <h4>ours</h4>                           
                            <h4>ourselves</h4>                           
                        </div>
                        <div className='row'>
                            <h2>2nd plural</h2>
                            <h4>you</h4>                           
                            <h4>you</h4>                           
                            <h4>your</h4>                           
                            <h4>yours</h4>                           
                            <h4>yourselves</h4>                           
                        </div>
                        <div className='row'>
                            <h2>3nd plural</h2>
                            <h4>they</h4>                           
                            <h4>them</h4>                           
                            <h4>their</h4>                           
                            <h4>theirs</h4>                           
                            <h4>themselves</h4>                           
                        </div>
                        <div className='row'>
                            <div className='empty bottom' style={{color: 'orange', padding: '20px'}}>-</div>
                            <h1 style={{color: '#045370'}}>-</h1>
                            <div className='possessive'></div>
                            <h3 className='b' style={{color: '#045370'}}>-</h3>                           
                        </div>
                        
                    </PronounChart>
                    {/* Demonstrative Pronouns */}
                    <PronounsRules>
                        <h1>Demonstrative Pronouns</h1>
                        <div className='left-line'>
                        <div>
                            <li>this / these <black>||</black> that / those
                            </li>
                        </div>
                        {
                            demonstrative && (
                                <>
                                    <p className='space'>
                                        Like all pronouns, <darkblue> demonstrative pronouns</darkblue> replace nouns or noun phrases.
                                        We use them to point to something specific in a sentence. (called its <lightgreen onClick={() => {
                                            alert(
                                                'An antecedent is the thing represented by a pronoun.'
                                            )
                                        }}>antecedent</lightgreen>) 
                                    </p>
                                    <div className='space-left'>
                                        <p className='small'> <darkblue>- There are a lot of books on the table. Which one is yours?</darkblue></p>
                                        <p className='nospace small'> <darkblue>- <colorOrange>This</colorOrange> is my book. <lightblack>(point to a specific book)</lightblack></darkblue></p>
                                    </div>
                                    <p className='space'>Normally we use <darkblue>demonstrative pronouns</darkblue> for things*. In this case, a <darkblue>demonstrative pronoun</darkblue> can give us information about the following:</p>
                                    <li> whether its antecedent is <colorOrange>singular</colorOrange> or <colorOrange>plural</colorOrange></li>
                                    <li>whether its antecedent is <colorOrange>near</colorOrange> or <colorOrange>distant</colorOrange></li>
                                    <br/>
                                    <div className='sub-box'>
                                        <p><colorBlue>This</colorBlue>  stands in for <colorOrange>near</colorOrange> and <colorOrange>singular</colorOrange> things.</p>
                                        <div className='space-left'>
                                            {/* <p> <darkblue>- There are a lot of books on the table. Which one is yours?</darkblue></p> */}
                                            <p className='nospace small'> <darkblue>- <colorOrange>This</colorOrange> is my jacket. <lightblack>(the single jacket which is next to me)</lightblack></darkblue></p>
                                        </div>
                                        <p><colorBlue>These</colorBlue>  stands in for <colorOrange>near</colorOrange> and <colorOrange>plural</colorOrange> things.</p>
                                        <div className='space-left'>
                                            {/* <p> <darkblue>- There are a lot of books on the table. Which one is yours?</darkblue></p> */}
                                            <p className='nospace small'> <darkblue>- <colorOrange>These</colorOrange> are my books. <lightblack>(the 4 books which are just in front of me)</lightblack></darkblue></p>
                                        </div>
                                        
                                    </div>
                                    <div className='sub-box'>
                                        <p><colorBlue>That</colorBlue>  stands in for <colorOrange>distant</colorOrange> and <colorOrange>singular</colorOrange> things.</p>
                                        <div className='space-left'>
                                            {/* <p> <darkblue>- There are a lot of books on the table. Which one is yours?</darkblue></p> */}
                                            <p className='nospace small'> <darkblue>- <colorOrange>That</colorOrange> looks like my old bicycle. <lightblack>(the bicycle on the other side of the street)</lightblack></darkblue></p>
                                        </div>
                                        <p><colorBlue>Those</colorBlue>  stands in for <colorOrange>distant</colorOrange> and <colorOrange>plural</colorOrange> things.</p>
                                        <div className='space-left'>
                                            {/* <p> <darkblue>- There are a lot of books on the table. Which one is yours?</darkblue></p> */}
                                            <p className='nospace small'> <darkblue>- <colorOrange>Those</colorOrange> are great cars. <lightblack>( the cars at the front of the line down there)</lightblack></darkblue></p>
                                        </div>
                                        
                                    </div>
                                    
                                    <p className='space'>* We can use <darkblue>demonstrative pronouns</darkblue> for people as well when the person is identified. </p>
                                        <li> <colorOrange>This</colorOrange> is James speaking. Is <colorOrange>that</colorOrange> Julia?</li>
                                        <br/>
                                    {/* Demonstrative Adjectives */}
                                    <div>
                                        <h2>Demonstrative Pronouns vs Demonstrative Adjectives</h2>
                                        <p className='space'><colorblue>Although demonstrative pronouns and demonstrative adjectives both have the same terms, the uses differ.</colorblue></p>
                                        <p>Demonstrative adjectives  are used together with the noun and qualify the noun.</p>
                                        <li>This soup is good.</li>
                                        <p>Demonstrative pronouns are not used with the noun but stand in place of the noun.</p>
                                        <li>This is good.</li>
                                        <br/>
                                    </div>
                                </>
                            )
                        }
                        <button className='read_more' onClick={() => {
                            setDemonstrative(!demonstrative)
                        }}>
                            {demonstrative ? 'Read less...' : 'Read more...'}
                        </button>
                        </div>
                    </PronounsRules>
                    {/* Relative Pronouns */}
                    <PronounsRules>
                        <h1>Relative Pronouns</h1>
                        <div className='left-line'>
                        <div>
                            <li>who, whom, whose, which, that
                            </li>
                        </div>
                        {
                            relative && (
                                <>
                                    <p className='space'>We use <darkblue>relative pronouns</darkblue> to introduce relative clauses. <colorOrange>Relative clauses</colorOrange> give extra information and tell us more about people and things. </p>
                                    <li> Daniel, <colorOrange>who is 28</colorOrange>, has just received his PhD in Computer Science.</li>
                                    <li> This is the car <colorOrange>which my brother bought</colorOrange> .</li>
                                    <br/>
                                    <p>We use:</p>
                                    {/* who / whom */}
                                    <div className='sub-box'>
                                        <p><colorBlue>who</colorBlue> (subject) and <colorBlue>whom</colorBlue> (object) for <colorOrange>people</colorOrange> only</p>
                                        <div className='space-left'>
                                            <p className='nospace'> - Mrs Pratt, <colorBlue>who</colorBlue>  I like very much, is my teacher.</p>
                                            <p className='nospace'> - This is George,  <colorBlue>whom</colorBlue> you met at our house last year.</p>
                                        </div>
                                    </div>
                                    {/* which */}
                                    <div className='sub-box'>
                                        <p><colorBlue>which</colorBlue> for <colorOrange>things</colorOrange></p>
                                        <div className='space-left'>
                                            <p className='nospace'> -The car,  <colorBlue>which</colorBlue> I was driving at the time, suddenly caught fire .</p>
                                        </div>
                                    </div>
                                    {/* that */}
                                    <div className='sub-box'>
                                        <p><colorBlue>that</colorBlue> for <colorOrange>people</colorOrange> and <colorOrange>things</colorOrange></p>
                                        <div className='space-left'>
                                            <p className='nospace'> - The person  <colorBlue>that</colorBlue> I phoned last night is my teacher.</p>
                                            <p className='nospace'> - The car <colorBlue>that</colorBlue> I drive is old.</p>
                                        </div>
                                    </div>
                                    {/* whose */}
                                    <div className='sub-box'>
                                        <p><colorBlue>whose</colorBlue>  for <colorOrange>possession</colorOrange> </p>
                                        <div className='space-left'>
                                            <p className='nospace'> - This is Marcus, <colorBlue>whose</colorBlue> brother went to school with me.</p>
                                        </div>
                                    </div>
                                   
                                </>
                            )
                        }
                        <button className='read_more' onClick={() => {
                            setRelative(!relative)
                        }}>
                            {relative ? 'Read less...' : 'Read more...'}
                        </button>
                        </div>
                    </PronounsRules>
                    {/* Interrogative Pronouns */}
                    <PronounsRules>
                        <h1>Interrogative Pronouns</h1>
                        <div>
                            <li>what, which, who, whom, whose
                            </li>
                        </div>
                        {
                            interrogative && (
                                <>
                                    {/* Relativ pronouns */}
                                    <div>
                                        <h2>Interrogative Pronouns vs Relative Pronouns</h2>
                                        <p className='space'> With the exception of <colorBlue>that</colorBlue>,  <darkBlue>interrogative pronouns</darkBlue> are the same as the <darkBlue>relative pronouns</darkBlue>. It's just their function that's different.</p>    
                                        <p>We use <darkblue>interrogative pronouns</darkblue> for asking questions.</p>
                                        <p className='nospace'>We use <darkblue>relative pronouns</darkblue> to add extra information.</p>
                                        <br/>
                                    </div>
                                    <p>There are five interrogative pronouns: <darkBlue>what, which, who, whom, whose</darkBlue>.</p>
                                     {/* what*/}
                                     <div className='sub-box'>
                                        <p><colorBlue>what</colorBlue>  - used to ask questions about <colorOrange>people, animals</colorOrange> and <colorOrange>things</colorOrange></p>
                                        <div className='space-left'>
                                            <p className='nospace'> - <colorBlue>What</colorBlue>  do you want for lunch?</p>
                                            <p className='nospace'> - <colorBlue>What</colorBlue>  is your dog's name?</p>
                                            <p className='nospace'> - <colorBlue>What</colorBlue>  is that?</p>
                                        </div>
                                    </div>
                                    {/* which */}
                                    <div className='sub-box'>
                                        <p><colorBlue>which</colorBlue> - used to ask questions about <colorOrange>people, animals</colorOrange> and <colorOrange>things</colorOrange></p>
                                        <div className='space-left'>
                                            <p className='nospace'> - <colorBlue>Which</colorBlue>  of these ladies is your mother?</p>
                                            <p className='nospace'> - <colorBlue>Which</colorBlue>  is faster? A dog or a horse?</p>
                                            <p className='nospace'> - <colorBlue>Which</colorBlue> is heavier? An apple or an orange?</p>
                                        </div>
                                    </div>
                                    {/* who */}
                                    <div className='sub-box'>
                                        <p><colorBlue>who</colorBlue> - used to ask questions about  <colorOrange>people</colorOrange></p>
                                        <div className='space-left'>
                                            <p className='nospace'> - <colorBlue>Who</colorBlue>  won last Saturday?</p>
                                            <p className='nospace'> - <colorBlue>Who</colorBlue>  is going to take out the trash?</p>
                                        </div>
                                    </div>
                                    {/* whom */}
                                    <div className='sub-box'>
                                        <p><colorBlue>whom</colorBlue> - used to ask questions about  <colorOrange>people</colorOrange><lightBlack>(whom is rarely used in everyday conversation)</lightBlack></p>
                                        <div className='space-left'>
                                            <p className='nospace'> - <colorBlue>Whom</colorBlue>  did you speak to?</p>
                                            <p className='nospace'> - To <colorBlue>whom</colorBlue>  did you sell your old car?</p>
                                        </div>
                                    </div>
                                    {/* whose */}
                                    <div className='sub-box'>
                                        <p><colorBlue>whose</colorBlue> - used to ask questions about  <colorOrange>people</colorOrange> and <colorOrange>things</colorOrange><lightBlack>(shows possession)</lightBlack></p>
                                        <div className='space-left'>
                                            <p className='nospace'> - <colorBlue>Whose</colorBlue> is this (phone)?</p>
                                            <p className='nospace'> - This is John's.</p>
                                        </div>
                                    </div>
                                     {/* Interrogative Determiners */}
                                     <div>
                                        <h2>Interrogative Pronouns vs Interrogative Determiners</h2>
                                        <p className='space'>Some types of <green>pronoun</green> and <green>determiner</green> look very similar. <darkBlue>Interrogative pronouns</darkBlue> and <darkBlue>interrogative determiners</darkBlue> fall into this category. However, there is a clue which can tell us if one of these words is a <green>pronoun</green> or a <green>determiner</green>. Let's first recap quickly these two terms.</p>
                                        <p className='space'>A <green>pronoun</green> is a word which replaces a noun or another pronoun.</p>
                                        <p className='nospace'>A <green>determiner</green> is a word that comes before a noun to introduce it or tell us something about it. </p>
                                        <p className='space'>Compare the examples below.</p>
                                        <p className='large'><colorBlue>Interrogative Pronouns</colorBlue></p>
                                        <li><colorOrange>Which</colorOrange> is faster? <lightBlack>(stand alone)</lightBlack></li>
                                        <p className='large'><colorBlue>Interrogative Determiners</colorBlue><lightBlack>- there are 3 interrogative determiners: <darkBlue>what, which, whose</darkBlue></lightBlack></p>
                                        <li><colorOrange>Which car</colorOrange> is faster? <lightBlack>(do not stand alone)</lightBlack></li>
                                        <br/>
                                    </div>
                                </>
                            )
                        }
                        <button className='read_more' onClick={() => {
                            setInterrogative(!interrogative)
                        }}>
                            {interrogative? 'Read less...' : 'Read more...'}
                        </button>                      
                    </PronounsRules>                  
                    {/* Indefinite Pronouns */}
                    <PronounsRules>
                        <h1>Indefinite Pronouns</h1>
                        <div>
                            <li>anybody, anyone, anything, everybody, everyone, nobody, somebody, each, either...
                            </li>
                        </div>
                        {
                            indefinite && (
                                <>
                                    <p className='space'>We use <darkblue>indefinite pronouns</darkblue> to speak generally about something without saying who or what they are. </p>
                                    <li> <colorOrange>Everybody</colorOrange> enjoyed the concert.</li>
                                    <li> <colorOrange>All</colorOrange> have arrived.</li>
                                    
                                    <p className='space'>Some of the most common <darkblue>indefinite pronouns</darkblue>: </p>
                                    <div className='sub-box'>
                                        <PronounsChartIndefinite>
                                            <ul>
                                                <li className='a'>any-</li>
                                                <li>anybody</li>
                                                <li>anyone</li>
                                                <li>anything</li>
                                                <li>anywhere</li>
                                            </ul>
                                            <ul>
                                                <li className='a'>some-</li>
                                                <li>somebody</li>
                                                <li>someone</li>
                                                <li>something</li>
                                                <li>somewhere</li>
                                            </ul>    
                                            <ul>
                                                <li className='a'>every-</li>
                                                <li>everybody</li>
                                                <li>everyone</li>
                                                <li>everything</li>
                                                <li>everywhere</li>
                                            </ul>
                                            <ul>
                                                <li className='a'>no-</li>
                                                <li>nobody</li>
                                                <li>no one</li>
                                                <li>nothing</li>
                                                <li>nowhere</li>
                                            </ul>
                                                               
                                            <ul>
                                                {/* <li> ~☺~</li> */}
                                                <li >___</li>
                                                <li className='b'>-body</li>
                                                <li className='b'>-one</li>
                                                <li className='b'>-thing</li>
                                                <li className='b'>-where</li>
                                               
                                            </ul>                        
                                        </PronounsChartIndefinite>
                                    </div>
                                    <br/>
                                    {/* -body, -one, -thing, -where */}
                                    <div className='green-box'>
                                    <p className='space exlarge'> <green>-body</green> / <green>-one</green></p>
                                    <p>We use pronouns ending in <span>-body</span> or <span>-one</span> for <colorOrange>people</colorOrange>. The pronouns ending in <span>-one</span> are more common in formal writing.</p>
                                    <li>  <colorBlue>Everybody</colorBlue> loves music.</li>
                                    <li> "<colorBlue>No one </colorBlue> is more hated than he who speaks the truth." - Plato</li>

                                    <p className='space exlarge'> <green>-thing</green></p>
                                    <p>We use pronouns ending in <span>-thing</span> for <colorOrange>things</colorOrange>.</p>
                                    <li>  <colorBlue>Everything</colorBlue> was ready for the party.</li>
                                    <li> I heard <colorBlue>something </colorBlue> outside.</li>

                                    <p className='space exlarge'> <green>-where</green></p>
                                    <p>We use pronouns ending in <span>-where</span>  for <colorOrange>places</colorOrange>.</p>
                                    <li>  <colorBlue>Nowhere</colorBlue> is better than here.</li>
                                    <li> Let's go <colorBlue>somewhere </colorBlue> else.</li>
                                    <br />
                                    </div>
                                    <br/>
                                    <br/>
                                    {/* any-, every-, no-, some- */}
                                    <div className='blue-box'>
                                        <p className='space exlarge'> <darkBlue>Differences between: </darkBlue> <colorBlue>any-, some-, every-, no-</colorBlue></p>
                                        <br/>
                                    {/* any-*/}
                                        <p className='exlarge'><colorBlue>any-</colorBlue> <lightBlack>(referring to a <colorOrange>random</colorOrange> person, thing or place)</lightBlack></p>
                                        <p>We use pronouns starting with <span>any-</span> : </p>
                                        <div className='space-left'>
                                            <p>1. <green>For questions and negative sentences</green></p>
                                            <li> Is there <colorBlue>anything</colorBlue> in the bag?</li>
                                            <li> We didn't go  <colorBlue>anywhere</colorBlue> this weekend.</li>
                                            <p>2. <green>With sentences that have a negative feeling</green></p>
                                            <li> She ate hardly <colorBlue>anything</colorBlue>.</li>
                                            <p>3. <green>After ' if '</green></p>
                                            <li> If <colorBlue>anything</colorBlue> is wrong, you need to phone the reception.</li>
                                        </div>
                                        <p className='underline'></p>
                                    {/* some- */}
                                        <p className='space exlarge'><colorBlue>some-</colorBlue> <lightBlack>(referring to an <colorOrange>unspecified</colorOrange> person, thing or place,  not all of them)</lightBlack></p>
                                        <p>We use pronouns starting with <span>some-</span> : </p>
                                        <div className='space-left'>
                                            <p>1. <green>Mainly in positive sentences</green></p>
                                            <li> I would really like to ask <colorBlue>someone</colorBlue>.</li>
                                            <li> Let's go  <colorBlue>somewhere</colorBlue> this weekend.</li>
                                            <p>2. <green>In questions when they are offers or requests</green></p>
                                            
                                            <li> Would you like  <colorBlue>something</colorBlue> to eat?</li>
                                            <p>3. <green>In questions when we think the answer is yes</green></p>
                                            <li> Are you looking for <colorBlue>something</colorBlue>? <lightBlack>(= I think you're looking for something.)</lightBlack></li>
                                        </div>
                                        <p className='underline'></p>
                                    {/* every- */}
                                        <p className='space exlarge'><colorBlue>every-</colorBlue> <lightBlack>(referring to  <colorOrange>every</colorOrange> individual, thing or place, all together)</lightBlack></p>
                                        <p>We use pronouns starting with <span>every-</span> in positive sentences, negative sentences and questions. </p>
                                        <li>I think she has been <colorBlue> everywhere</colorBlue> in Europe.</li>
                                        <li> He doesn't know <colorBlue>everything</colorBlue>.</li>
                                        <li> Do you know  <colorBlue>everybody</colorBlue> here?</li>
                                        <p className='underline'></p>
                                    {/* no- */}
                                        <p className='space exlarge'><colorBlue>no-</colorBlue> <lightBlack>(referring to  <colorOrange>not one</colorOrange> single person, thing or place)</lightBlack></p>
                                        <p>We use pronouns starting with <span>no-</span> for negative sentences. Usually the sentence with 'no' is stronger and more emphatic.</p>
                                        
                                        <li> There <colorBlue>isn't anything</colorBlue> here =  there is <colorBlue>nobody</colorBlue> here.</li>
                                        <p><red>Be careful!</red></p>
                                        <p className='nospace'> Don't use a negative verb with nobody/nothing/nowhere (Not: <red className='a'>I don't know nobody</red>)</p>
                                        <br/>
                                    </div>
                                    <br />
                                    <br />
                                    <p className='space'>More <darkblue>indefinite pronouns</darkblue>: </p>
                                    <div className='sub-box'>
                                        <PronounsChartIndefinite>
                                            <ul>
                                                <li className='a'>singular</li>
                                                <li>another</li>
                                                <li>each</li>
                                                <li>either</li>
                                                <li>enough</li>
                                            </ul>
                                            <ul>
                                                <li className='a'>singular</li>
                                                <li>less</li>
                                                <li>little</li>
                                                <li>much</li>
                                                <li>neither</li>
                                                <li>other</li>
                                            </ul>
                                            <ul>
                                                <li className='a'>plural</li>
                                                <li>both</li>
                                                <li>few</li>
                                                <li>many</li>
                                                <li>several</li>
                                            </ul>
                                            <ul>
                                                <li className='a'>singular/plural</li>
                                                <li>all</li>
                                                <li>any</li>
                                                <li>more</li>
                                                <li>most</li>
                                                <li>none</li>
                                                <li>such</li>
                                            </ul>
                                                     
                                        </PronounsChartIndefinite>
                                    </div>
                                    
                                </>
                            )
                        }
                        <button className='read_more' onClick={() => setIndefinite(!indefinite)}>
                            {indefinite ? 'Read less...' : 'Read more...'}
                        </button>
                        
                    </PronounsRules>
                    {/* Reciprocal Pronouns */}
                    <PronounsRules>
                        <h1>Reciprocal Pronouns</h1>
                        <div>
                            <li>each other, one another
                            </li>
                        </div>
                        {
                            reciprocal && (
                                <>
                                    <p className='space'>We use  the <darkblue>reciprocal pronouns</darkblue> <span>each other</span> and <span>one another</span> when two or more people do the same thing.</p>
                                    <p className='nospace'><darkblue>Reciprocal Pronouns</darkblue> help prevent repetition within sentences.</p>
                                    
                                    <div className='sub-box'>
                                        <p >When we use these <darkblue> reciprocal pronouns</darkblue>: </p>
                                        <li> there must be two or more people, things or groups involved (so we cannot use reciprocal pronouns with I, you [singular], he/she/it)</li>
                                        <li>they must be doing the same thing</li>
                                    </div>
                                    <p>Look at these examples: </p>
                                    <li> Maria and Juan gave <colorOrange> each other </colorOrange>gold rings on their wedding day.</li>
                                    <li> We gave <colorOrange> each other </colorOrange> gifts.</li>
                                    <li> Why don't you believe<colorOrange> each other </colorOrange>?</li>
                                </>
                            )
                        }
                        <button className='read_more' onClick={() => setReciprocal(!reciprocal)}>
                            {reciprocal ? 'Read less...' : 'Read more...'}
                        </button>
                        
                    </PronounsRules>
                     {/* QuizButton */}
                    <QuizzesButtonGrammarR page='/pronouns' text='Pronouns Quizzes' />
                    
                    {/* <h3></h3> */}
                </PronounsContainer1>
               
            </PronounsMain>          
        </PronounsGrammarContainer>
    </>
    )
}

export default PronounsGrammar
