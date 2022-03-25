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
    HomeImage,
    HomeWrapper,
    HomeSlide,
    HomeSlider,
    HomeContent,
    HomeButtonTitle,
    HomePart2,
    HomeGrammar,
    ImageSection,
    // TestContainer
}from './Navbar Styles/Home.styled'
import Slide from 'react-reveal/Slide'
import Flash from 'react-reveal/Flash'
import ScrollAnimation from 'react-animate-on-scroll'
    


const Home = () => {
    const [name, setName] = useState(null)
    const [submit, setSubmit] = useState(false)
    const [userName, setUserName] = useState(()=>{
        const local =  localStorage.getItem('userName')
        return local ? JSON.parse(local) : [] 
      })
    const [current, setCurrent] = useState(0)
    const length = HomeData.length
    const timeout = useRef(null)
    
    
    // First method of user input
    // const getName = (val) => {
    //     setName(val.target.value)
    //     setSubmit(false)
    //     console.log(val.target.value)
    // }

    // Second method of user input
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

    

    return (
        <>
            <HomeSection>
                <HomeImageTest>
                    {/* <img src={photo1} alt="this is the photo" /> */}
                </HomeImageTest>
                <Home1>
                    {/* <br/> */}
                    {/* First method of user input */}
                    {/* {
                        submit ? <div>Hello {name}</div> : (
                            <>
                                <input type='text' onChange={getName} placeholder='Enter your name...'/>
                                <button onClick={()=>setSubmit(true)}>Submit</button>
                            </>
                        )
                    } */}
                    {/* Second method of user input */}
                    {
                        submit ? (
                            <div className='show-userName'>
                                <div style={{marginRight: '4px'}}>Hello </div>
                                <div>
                                    {userName.map((userN)=>{
                                        const {id, text} = userN
                                        return (
                                            <>
                                                <div key={id}> {text}</div>
                                                <button onClick={()=> deleteUserName(id)} className='delete-userName'>Delete Name</button>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            ): (
                            <>
                                <form onSubmit={addUserName} className='form'>
                                   <input type='text' name='userName' placeholder='Enter your name...'/>
                                   <input type='submit'/>
                                </form>
                                <div className='show-userName'>
                                    <div>
                                        {userName.map((userN)=>{
                                            const {id, text} = userN
                                            return (
                                                <>
                                                <div style={{marginRight: '4px'}}>Hello </div>
                                                    <div key={id}> {text}</div>
                                                    <button onClick={()=> deleteUserName(id)} className='delete-userName'>Delete Name</button>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </>
                        )
                    }
                    <br/>
                    <h1 className='fade-in'>Refresher Grammar Website</h1>
                    <p>Practise your English grammar with clear grammar explanations and practice exercises to test your understanding. All learners, whatever their level, have questions and doubts about grammar as they're learning English and this guide helps to explain the verb tenses and grammar rules in a clear and simple way.</p>

                    {/* <ScrollAnimation delay={500}animateIn='fadeIn' animateOut='fadeOut'>
                        <Link  className="home-box" to='/fce_practice'>                  
                            <HomeButtonTitle>Practice</HomeButtonTitle>                
                        </Link>              
                    </ScrollAnimation>  */}
                </Home1>
                <Home2>
                    <h1>hello</h1>
                    <p>Practise your English grammar with clear grammar explanations and practice exercises to test your understanding. All learners, whatever their level, have questions and doubts about . </p>
                    <ImageSection>
                        {HomeData.map((pic, index) => {
                            return (
                                <div key={index}>
                                    {index === current && (
                                        <>
                                            <img src={pic.image} alt='photo'/>
                                            <div className='title'>{pic.title}</div>               
                                        </>
                                    )}
                                </div>
                            )
                        })}
                    </ImageSection>

                    {/* <HomeWrapper>
                        {HomeData.map((pic, index) => {
                            return (
                                <HomeSlide key={index}>
                                    {index === current && (
                                        <HomeSlider>
                                            <HomeImage  src={pic.image} />
                                            <HomeContent>
                                                <div>{pic.title}</div>
                                                <div>{pic.text}</div>
                                            </HomeContent>
                                        </HomeSlider>
                                    )}
                                </HomeSlide>
                            )
                        })}
                    </HomeWrapper> */}
                    {/* <br/> */}
                    {/* <p>Practise your English grammar with clear grammar explanations and practice exercises to test your understanding. All learners, whatever their level, have questions and doubts about g</p> */}
                </Home2>
                <Home3>
                    <HomePart2>   
                        <Slide right duration={1000}>
                            <HomeGrammar>
                                <h1>Grammar Quizzes</h1>
                                <p>Practise your English grammar with clear grammar explanations and practice exercises to test your understanding. All learners, whatever their level, have questions and doubts about g</p>
                                <Link className="home-button" to='/quizzes'>
                                    <HomeButtonTitle style={{margin: '40px auto'}}> Grammar Quizzes</HomeButtonTitle>                    
                                </Link>       
                            </HomeGrammar>
                        </Slide>                    
                        <Slide left duration={1000}>
                            <HomeGrammar>
                                <h1>Grammar</h1>
                                <p>Practise your English grammar with clear grammar explanations and practice exercises to test your understanding. All learners, whatever their level, have questions and doubts about g</p>
                                <Link className="home-button" to='/grammar'>
                                    <HomeButtonTitle style={{margin: '40px auto'}}> Grammar</HomeButtonTitle>                    
                                </Link>       
                            </HomeGrammar>  
                        </Slide>  
                        <Flash right>
                            <Link  className="home-boxes1" to='/fce_practice'>                  
                                <HomeButtonTitle>FCE Practice</HomeButtonTitle>                    
                            </Link>       
                        </Flash>  
                        <ScrollAnimation delay={100}animateIn='fadeIn' animateOut='fadeOut'>
                            <Link  className="home-box" to='/fce_practice'>                  
                                <HomeButtonTitle>Practice</HomeButtonTitle>                
                            </Link>              
                        </ScrollAnimation> 
                        <ScrollAnimation delay={200}animateIn='fadeIn' animateOut='fadeOut'>
                            <Link  className="home-box" to='/fce_practice'>                  
                                <HomeButtonTitle>Practice</HomeButtonTitle>                
                            </Link>              
                        </ScrollAnimation> 
                    </HomePart2>
                    
                </Home3>
            </HomeSection>
        </>
    )
}

export default Home
