import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faClock, faChampagneGlasses, faBan, faCircle} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Logo from './Logo'


function MainMenu() {
    // FIXME: Tailwind background-gradient limitation
    // FIXME: Redundant colour codes same as in tailwind.config.js - required because direct styling of html selector does not support custom colours
    const secondary = '#0F4C81'

    // FIXME: Resets background colour
    useEffect(() => {
        document.querySelector("html").style =
            `background: linear-gradient(180deg, ${secondary} 50%, ${secondary} 50%);`
    }, [])

    const [isAdultMode, setAdultMode] = useState(false)

    const toggleAdultMode = () => {
        setAdultMode(!isAdultMode)
    }

    return (
        <div className='pt-32'>
            <Logo></Logo>
            <div className='flex justify-center items-center m-auto w-11/12 sm:w-screen'>
                <div className="grid grid-cols-3 gap-x-5 place-items-center text-tertiary pt-14 w-screen">
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
        </div>
    )
}

export default MainMenu