import React, {useState, useEffect, useRef} from 'react'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import { HomeData } from '../Navbar/Navbar Data/HomeData'
import photo1 from '../img/colors.jpg'
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
    HomeContent
}
    from './Navbar Styles/Home.styled'
    


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

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        
        setCurrent(current === length - 1 ?  0 : current + 1)
    }

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
                    <div className="home-boxes">
                        <Link className="home-boxes1" to='/quizzes'>
                            <div className="home_title"> Grammar Quizzes</div>                    
                        </Link>       
                        <Link  className="home-boxes1" to='/grammar'>
                            <div className="home_title">Grammar</div>                    
                        </Link>       
                        <Link  className="home-boxes1" to='/fce_practice'>
                            <div className="home_title">FCE Practice</div>                    
                        </Link>       
                    </div>
                </Home3>
            </HomeSection>
        </>
    )
}

export default Home
