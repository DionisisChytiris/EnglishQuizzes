import React, {useState, useEffect, useRef} from 'react'
// import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import { HomeData } from '../Navbar/Navbar Data/HomeData'
// import photo1 from '../img/colors.jpg'
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
    // TestContainer
}from './Navbar Styles/Home.styled'
import Slide from 'react-reveal/Slide'
import Flash from 'react-reveal/Flash'
import ScrollAnimation from 'react-animate-on-scroll'
    


const Home = () => {
    const [name, setName] = useState(null)
    const [submit, setSubmit] = useState(false)
    const [current, setCurrent] = useState(0)
    const length = HomeData.length
    const timeout = useRef(null)

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

    // input 
    const getName = (val) => {
        setName(val.target.value)
        setSubmit(false)
        console.log(val.target.value)
    }

    return (
        <>
            <HomeSection>
                <HomeImageTest>
                    {/* <img src={photo1} alt="this is the photo" /> */}
                </HomeImageTest>
                <Home1>
                    <h1 className='fade-in'>Home</h1>
                    <br/>
                    {
                        submit ? <p>Hello {name}</p> : null
                    }
                    <input type='text' onChange={getName} placeholder='Enter your name...'/>
                    <button onClick={()=>setSubmit(true)}>Submit</button>
                    <ScrollAnimation delay={500}animateIn='fadeIn' animateOut='fadeOut'>
                        <Link  className="home-box" to='/fce_practice'>                  
                            <HomeButtonTitle>Practice</HomeButtonTitle>                
                        </Link>              
                    </ScrollAnimation> 
                </Home1>
                <Home2>
                    <HomeWrapper>
                        {HomeData.map((pic, index) => {
                            return (
                                <HomeSlide key={index}>
                                    {index === current && (
                                        <HomeSlider>
                                            {/* <LazyLoad height={20}>
                                                <HomeImage  src={pic.image} />
                                            </LazyLoad> */}
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
                    </HomeWrapper>
                </Home2>
                <Home3>
                    <HomePart2>   
                        <Slide right duration={2000}>
                            <Link className="home-boxes1" to='/quizzes'>
                                <HomeButtonTitle> Grammar Quizzes</HomeButtonTitle>                    
                            </Link>       
                        </Slide>                    
                        <Slide right duration={1000}>
                            <Link className="home-boxes1" to='/grammar'>
                                <HomeButtonTitle> Grammar</HomeButtonTitle>                    
                            </Link>       
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
