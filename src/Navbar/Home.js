import React, {useState, useEffect, useRef} from 'react'
// import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import { HomeData } from '../Navbar/Navbar Data/HomeData'
import {
    HomeImageTest,
    HomeSection,
    Home1,
    Home2,
    Home3,
    // HomeButtonTitle,
    HomePart2,
    HomeGrammar,
    ImageSection,
    // TestContainer
}from './Navbar Styles/Home.styled'
import Slide from 'react-reveal/Slide'
// import Flash from 'react-reveal/Flash'
// import ScrollAnimation from 'react-animate-on-scroll'
import {FaAngleDoubleRight, FaCircle} from 'react-icons/fa'
    

const Home = () => {
    const [submit, setSubmit] = useState(false)
    const [userName, setUserName] = useState(()=>{
        const local =  localStorage.getItem('userName')
        return local ? JSON.parse(local) : [] 
      })
    const [current, setCurrent] = useState(0)
    const length = HomeData.length
    const timeout = useRef(null)
    
    
    //  user input
    const addUserName = (e)=>{
        e.preventDefault()
        const newUserName = {
            id: Math.random().toString(35).substr(2,9),
            text: e.target.userName.value
        }
        setUserName([...userName, newUserName])
        setSubmit(true)
        e.target.userName.value=''
    }

    const deleteUserName = (isDelete)=>{
        setUserName(userName.filter((userN)=>userN.id !== isDelete))
        setSubmit(false)
    }

    useEffect(()=>{
        localStorage.setItem('userName', JSON.stringify(userName))
    },[userName])
    
    useEffect(()=> {
        const json = localStorage.getItem('userName')
        const savedNotes = JSON.parse(json)
        if(savedNotes){
          setUserName(savedNotes)
        }
      }, [])
    
    // photos slider
    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length -1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 3000)

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    // const nextSlide = () => {
    //     if (timeout.current) {
    //         clearTimeout(timeout.current)
    //     }
        
    //     setCurrent(current === length - 1 ?  0 : current + 1)
    // }

    if (!Array.isArray(HomeData) || HomeData.length <= 0) {
        return null
    }

    const help =()=>{
        alert('Optional personalization \n----------------------------------------- \nEnter your name or a nickname for a more personal experience, or just ignore it and go on. \n \nYou can type maximum 10 characters. \n \nIf you want to delete or change your name, press the "Change Name" button which will show up after your submission.')
    }

    return (
        <>
            <HomeSection>
                <HomeImageTest>
                    {/* <img src={photo1} alt="this is the photo" /> */}
                </HomeImageTest>
                <Home1>
                    {/* user input */}
                    {
                        submit ? (
                            <div className='show-userName fade-in'>
                                <div className='show-greeting'>Hey </div>
                                <div>
                                    {userName.map((userN)=>{
                                        const {id, text} = userN
                                        return (
                                            <div key={id}>
                                                <div className='show-name'> {text}</div>
                                                <div className='delete-background1'>
                                                    <button onClick={()=> deleteUserName(id)} className='delete-userName'>Change Name</button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            ): (
                            <>
                                <form onSubmit={addUserName} className='form'>
                                   <input 
                                        type='text' 
                                        name='userName' 
                                        placeholder='Enter your name...' 
                                        maxLength={10}
                                        pattern="[a-zA-Z]+" 
                                        title='Enter only letters, maximum 10.'
                                        required
                                    />
                                   <input type='submit'/>
                                   <div className='help' onClick={help}>?</div>
                                </form>
                                <div className='show-userName '>
                                    <div>
                                        {userName.map((userN)=>{
                                            const {id, text} = userN
                                            return (
                                                <div className='show-flex-row' key={id}>
                                                    <div className='show-greeting fade-in'>Hello </div>
                                                    <div className='show-name fade-in' > {text}!</div>
                                                    <div className='delete-background'>
                                                        <button onClick={()=> deleteUserName(id)} className='delete-userName1'>Change Name</button>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </>
                        )
                    }
                    <br/>
                    {/* <h1 className='fade-in'>Refresher Grammar Website</h1> */}
                    <h1>Refresher Grammar Website</h1>
                    <h1>Refresher Grammar Website</h1>
                    <h1>Refresher Grammar Website</h1>
                    
                    <h1>Test Website</h1>
                    
                   
                    <p>Practise your English grammar with clear grammar explanations and practice exercises to test your understanding. All learners, whatever their level, have questions and doubts about grammar as they're learning English and this guide helps to explain the verb tenses and grammar rules in a clear and simple way.</p>

                    {/* <ScrollAnimation delay={500}animateIn='fadeIn' animateOut='fadeOut'>
                        <Link  className="home-box" to='/fce_practice'>                  
                            <HomeButtonTitle>Practice</HomeButtonTitle>                
                        </Link>              
                    </ScrollAnimation>  */}
                </Home1>
                <Home2>
                    <h1>The importance of learning English</h1>
                    <p>Practice your English grammar with clear grammar explanations and practice exercises to test your understanding. All learners, whatever their level, have questions and doubts about . </p>
                    <ImageSection>
                        {HomeData.map((pic, index) => {
                            return (
                                <div key={index}>
                                    {index === current && (
                                        <>
                                            <img src={pic.image} alt='photography' className='fade'/>
                                            <div className='title fade1'>{pic.title}</div>               
                                            {/* <div className='title fade1'>{pic.text}</div>                */}
                                        </>
                                    )}
                                </div>
                            )
                        })}
                    </ImageSection>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div>English is one of the most widely spoken languages.One in five people in the world (the whole world!) can speak, or at least understand, English</div>
                    <br/>
                    <div>Its a very handy language for travel and communication</div>
                    <br/>
                    <div>English gives you wider access to knowledge</div>
                    <br/>
                    <div>Career booster</div>
                    <br/>
                    <div>Education</div>
                </Home2>
                <Home3>
                    <div className='vertical-line'>
                        <div className='dot a'><FaCircle/></div>
                        <div className='dot b'><FaCircle/></div>
                        <div className='dot c'><FaCircle/></div>
                    <HomePart2>   
                        <Slide right duration={1000}>
                            <HomeGrammar>
                                <h1>Grammar Quizzes</h1>
                                <p>Practise your English grammar with clear grammar explanations and practice exercises to test your understanding. All learners, whatever their level, have questions and doubts about g</p>
                                <Link className='home-button' to='/quizzes'>
                                    <div className='button-flex'>
                                        <div className='button-icon'><FaAngleDoubleRight/></div>
                                        <div className='button-title'> Grammar Quizzes</div>                    
                                    </div>
                                </Link>       
                            </HomeGrammar>
                        </Slide>                    
                        <Slide right duration={1000}>
                            <HomeGrammar>
                                <h1>Grammar</h1>
                                <p>Practice your English grammar with clear grammar explanations and practice exercises to test your understanding. </p>
                                <Link className="home-button a" to='/grammar'>
                                <div className='button-flex'>
                                            <div className='button-icon'><FaAngleDoubleRight/></div>
                                            <div className='button-title'> Grammar</div>                    
                                        </div>                 
                                </Link>       
                            </HomeGrammar>  
                        </Slide>  
                        <Slide right duration={1000}>
                            <HomeGrammar>
                                <h1>FCE Practice</h1>
                                <p>Practice your English grammar with clear grammar explanations and practice exercises to test your understanding. </p>
                                <Link className="home-button b" to='/fce_practice'>
                                <div className='button-flex'>
                                            <div className='button-icon'><FaAngleDoubleRight/></div>
                                            <div className='button-title'>FCE</div>                    
                                        </div>                 
                                </Link>       
                            </HomeGrammar>  
                        </Slide>  
                        {/* <Flash right>
                            <Link  className="home-boxes1" to='/fce_practice'>                  
                                <HomeButtonTitle>FCE Practice</HomeButtonTitle>                    
                            </Link>       
                        </Flash>   */}
                        {/* <ScrollAnimation delay={100}animateIn='fadeIn' animateOut='fadeOut'>
                            <Link  className="home-box" to='/fce_practice'>                  
                                <HomeButtonTitle>Practice</HomeButtonTitle>                
                            </Link>              
                        </ScrollAnimation>  */}
                    </HomePart2>
                    </div>
                </Home3>
            </HomeSection>
        </>
    )
}

export default Home
