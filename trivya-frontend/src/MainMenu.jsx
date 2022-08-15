import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import useReactIpLocation from 'react-ip-details'
import { CircleFlag } from 'react-circle-flags'

function MainMenu () {
  // FIXME: Tailwind background-gradient limitation
  // FIXME: Redundant colour codes same as in tailwind.config.js - required because direct styling of html selector does not support custom colours
  const secondary = '#0F4C81'

  // FIXME: Resets background colour
  useEffect(() => {
    document.querySelector('html').style =
            `background: linear-gradient(180deg, ${secondary} 50%, ${secondary} 50%);`
  }, [])

  const { ipResponse } = useReactIpLocation()

  const [isMaltaLocation, setMaltaLocation] = useState(false)
  const [isModalDisplayed, setModalDisplayed] = useState(false)
  const [isMaltaDisplayed, setMaltaDisplayed] = useState(false)
  const [isMaltaMode, setMaltaMode] = useState(false)
  const [isAdultMode, setAdultMode] = useState(false)

  useEffect(() => {
    if (ipResponse?.country_name === 'Malta') {
      setMaltaLocation(true)
      setModalDisplayed(true)
      console.log('MALTA CONNECTED')
    }
  }, [ipResponse])

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
                        <Link to="/number-of-teams">
                                <FontAwesomeIcon icon={['fas', 'clock']} className='text-secondary text-4xl sm:text-5xl flex m-auto pb-3' />
                                <p className='text-secondary text-md sm:text-xl font-medium font-secondary select-none'>Classic Mode</p>
                        </Link>
                    </button>
                    { isAdultMode &&
                    <button className="bg-primary rounded-lg cursor-pointer w-28 h-28 sm:w-40 sm:h-40">
                        <Link to="/number-of-teams">
                            <FontAwesomeIcon icon={['fas', 'champagne-glasses']} className='text-secondary text-4xl sm:text-5xl flex m-auto pb-3' />
                            <p className='text-secondary text-md sm:text-xl font-medium font-secondary select-none'>Adult Mode</p>
                        </Link>
                    </button>
                    }
                    <button className="bg-primary rounded-lg cursor-pointer w-28 h-28 sm:w-40 sm:h-40">
                        <Link to="/customMode">
                            <FontAwesomeIcon icon={['fas', 'sliders']} className='text-secondary text-4xl sm:text-5xl flex m-auto pb-3' />
                            <p className='text-secondary text-md sm:text-xl font-medium font-secondary select-none'>Custom Mode</p>
                        </Link>
                    </button>
                    <button className="bg-primary rounded-lg cursor-pointer w-28 h-28 sm:w-40 sm:h-40">
                        <Link to="/admin">
                            <FontAwesomeIcon icon={['fas', 'key']} className='text-secondary text-4xl sm:text-5xl flex m-auto pb-3' />
                            <p className='text-secondary text-md sm:text-xl font-medium font-secondary select-none'>Admin</p>
                        </Link>
                    </button>
                    { isMaltaDisplayed &&
                    <div onClick={() => toggleMaltaMode()} className='cursor-pointer absolute right-logo-spacing sm:right-20 top-1 pt-2 z-20 select-none'>
                    { isMaltaMode
                      ? <div>
                            <CircleFlag countryCode="mt" className='w-12' />
                        </div>
                      : <div className='grayscale opacity-80'>
                            <CircleFlag countryCode="mt" className='w-12' />
                        </div>
                        }
                    </div>
                    }
                    <div onClick={() => toggleAdultMode()} className='cursor-pointer absolute right-0 sm:right-3 top-1 pt-1 select-none'>
                        <p className={`${!isAdultMode ? 'text-secondary' : 'text-primary'} text-3xl font-bold absolute right-5 top-2 pt-1 z-10`}>18</p>
                        { isAdultMode
                          ? <FontAwesomeIcon icon={['fas', 'ban']} className='text-red text-5xl absolute right-3 top-1 pt-1 z-20'/>
                          : <FontAwesomeIcon icon={['fas', 'circle']} className='text-primary text-5xl absolute right-3 top-1 pt-1 z-0'/>
                        }
                    </div>
                </div>
            </div>
            { isMaltaLocation && isModalDisplayed &&
            <div className='absolute bottom-0 left-0 right-0 flex m-auto items-center pt-0.5 bg-primary w-72 h-24 rounded-tr-xl rounded-tl-xl'>
                <p className='flex text-secondary text-md sm:text-xl text-left px-3 pt-1'>Joining from Malta?<br/>Would you like for Malta<br/>questions to be included?</p>
                <div className='flex flex-col'>
                    <button onClick={() => { setModalDisplayed(false); setMaltaDisplayed(true); setMaltaMode(true) }}
                    className="w-full rounded-lg text-primary bg-secondary ml-1 p-1 my-1">
                        Yes
                        <FontAwesomeIcon icon={['fas', 'thumbs-up']} className="pl-2"/>
                    </button>
                    <button onClick={() => { setModalDisplayed(false); setMaltaDisplayed(false) }}
                    className="w-full rounded-lg text-primary bg-secondary ml-1 p-1">
                        No
                        <FontAwesomeIcon icon={['fas', 'thumbs-down']} className="pl-2"/>
                    </button>
                </div>
            </div>
            }
        </div>
  )
}

export default MainMenu
