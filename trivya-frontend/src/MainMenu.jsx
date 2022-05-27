import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faClock, faChampagneGlasses, faBan, faCircle} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import useReactIpLocation from "react-ip-details"
import { CircleFlag } from 'react-circle-flags'


function MainMenu() {
    // FIXME: Tailwind background-gradient limitation
    // FIXME: Redundant colour codes same as in tailwind.config.js - required because direct styling of html selector does not support custom colours
    const secondary = '#0F4C81'

    // FIXME: Resets background colour
    useEffect(() => {
        document.querySelector("html").style =
            `background: linear-gradient(180deg, ${secondary} 50%, ${secondary} 50%);`
    }, [])
    
    const { ipResponse } = useReactIpLocation()

    const [isMaltaLocation, setMaltaLocation] = useState(false)
    const [isModalDisplayed, setModalDisplayed] = useState(false)
    const [isMaltaDisplayed, setMaltaDisplayed] = useState(false)
    const [isMaltaMode, setMaltaMode] = useState(false)
    const [isAdultMode, setAdultMode] = useState(false)

    useEffect(() => {
        if (ipResponse?.country_name == "Malta"){
            setMaltaLocation(true)
            setModalDisplayed(true)
            console.log("MALTA CONNECTED")
        }
    }, [ipResponse]);

    const toggleMaltaMode = () => {
        setMaltaMode(!isMaltaMode)
    }

    const toggleAdultMode = () => {
        setAdultMode(!isAdultMode)
    }

    return (
        <div className='pt-32'>
            <Logo></Logo>
            <div className='flex justify-center items-center m-auto w-11/12 sm:w-screen'>
                <div className="grid grid-cols-3 gap-x-5 gap-y-3 place-items-center text-tertiary pt-14 w-screen">
                    <button className="bg-primary rounded-lg cursor-pointer w-28 h-28 sm:w-40 sm:h-40">
                        <Link to="/team-selection">
                                <FontAwesomeIcon icon={faClock} className='text-secondary text-4xl sm:text-5xl flex m-auto pb-3' />
                                <p className='text-secondary text-md sm:text-xl font-medium font-secondary select-none'>Classic Mode</p>
                        </Link>
                    </button>
                    { isAdultMode && 
                    <button className="bg-primary rounded-lg cursor-pointer w-28 h-28 sm:w-40 sm:h-40">
                        <Link to="/team-selection">
                            <FontAwesomeIcon icon={faChampagneGlasses} className='text-secondary text-4xl sm:text-5xl flex m-auto pb-3' />
                            <p className='text-secondary text-md sm:text-xl font-medium font-secondary select-none'>Adult Mode</p>
                        </Link>
                    </button>
                    }
                    <button className="bg-primary rounded-lg cursor-pointer w-28 h-28 sm:w-40 sm:h-40">
                        <Link to="/customMode">
                            <FontAwesomeIcon icon={faSliders} className='text-secondary text-4xl sm:text-5xl flex m-auto pb-3' />
                            <p className='text-secondary text-md sm:text-xl font-medium font-secondary select-none'>Custom Mode</p>
                        </Link>
                    </button>                    
                    <button className="bg-primary rounded-lg cursor-pointer w-28 h-28 sm:w-40 sm:h-40">
                        <Link to="/customMode">
                            <FontAwesomeIcon icon={faSliders} className='text-secondary text-4xl sm:text-5xl flex m-auto pb-3' />
                            <p className='text-secondary text-md sm:text-xl font-medium font-secondary select-none'>Custom Mode</p>
                        </Link>
                    </button>                    
                    { isMaltaDisplayed &&
                    <div onClick={() => toggleMaltaMode()} className='cursor-pointer absolute right-14 sm:right-20 top-1 pt-1'>
                        {/* <p className={`${!isInMalta ? "text-secondary" : "text-primary"} text-3xl font-bold absolute right-5 top-2 pt-1 z-10 select-none`}></p> */}
                        { isMaltaMode ? 
                        <div className='relative right-3 top-0 pt-1 z-20'>
                            <CircleFlag countryCode="mt" className='w-12' />
                        </div>
                        :
                        <div className='relative right-3 top-0 pt-1 z-20 grayscale opacity-80'>
                            <CircleFlag countryCode="mt" className='w-12' />
                        </div>                        
                        }
                    </div>
                    }
                    <div onClick={() => toggleAdultMode()} className='cursor-pointer absolute right-0 sm:right-3 top-1 pt-1'>
                        <p className={`${!isAdultMode ? "text-secondary" : "text-primary"} text-3xl font-bold absolute right-5 top-2 pt-1 z-10 select-none`}>18</p>
                        { isAdultMode ? 
                        <FontAwesomeIcon icon={faBan} className='text-red text-5xl absolute right-3 top-1 pt-1 z-20'/>
                        :
                        <FontAwesomeIcon icon={faCircle} className='text-primary text-5xl absolute right-3 top-1 pt-1 z-0'/>
                        }
                    </div>
                </div>
            </div>
            { isMaltaLocation && isModalDisplayed &&
            <div className='absolute bottom-0 left-0 right-0 flex m-auto items-center pt-0.5 bg-primary w-72 h-24 rounded-tr-xl rounded-tl-xl'>
                <p className='flex text-secondary text-md sm:text-xl text-left px-3 pt-1'>Joining from Malta?<br/>Would you like for Malta<br/>questions to be included?</p>
                <div className='flex flex-col'>
                    <button onClick={() => {setModalDisplayed(false); setMaltaDisplayed(true); setMaltaMode(true)}}>yes</button>
                    <button onClick={() => {setModalDisplayed(false); setMaltaDisplayed(false)}}>no</button>
                </div>
            </div>
            }
        </div>
    )
}

export default MainMenu