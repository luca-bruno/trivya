import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faClock, faChampagneGlasses, faBan, faCircle} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function MainMenu() {

    const [isAdultMode, setAdultMode] = useState(false)

    const toggleAdultMode = () => {
        setAdultMode(!isAdultMode)
    }

    return (
        <div className='grid justify-center items-center pt-32'>
            <Logo></Logo>
            <div className="grid grid-cols-3 text-tertiary pt-14">
                <div className='m-5'>

                        <button className="bg-primary rounded-lg cursor-pointer w-40 h-40">
                <Link to="/team-selection">
                            <FontAwesomeIcon icon={faClock} className='text-secondary text-5xl flex m-auto pb-3' />
                            <p className='text-secondary text-xl font-medium font-secondary select-none'>Classic Mode</p>
                </Link>
                        </button>
                </div>
                { isAdultMode ? 
                <div className='m-5'>
                        <button className="bg-primary rounded-lg cursor-pointer w-40 h-40">
                <Link to="/team-selection">
                            <FontAwesomeIcon icon={faChampagneGlasses} className='text-secondary text-5xl flex m-auto pb-3' />
                            <p className='text-secondary text-xl font-medium font-secondary select-none'>Adult Mode</p>
                </Link>
                        </button>
                </div>
                :
                null
                }
                    <div className='m-5'>
                        <button className="bg-primary rounded-lg cursor-pointer w-40 h-40">
                <Link to="/customMode">
                            <FontAwesomeIcon icon={faSliders} className='text-secondary text-5xl flex m-auto pb-3' />
                            <p className='text-secondary text-xl font-medium font-secondary select-none'>Custom Mode</p>
                </Link>
                        </button>                    
                    </div>
                <div onClick={() => toggleAdultMode()} className='cursor-pointer absolute right-3 top-1 pt-1'>
                <p className={`${!isAdultMode ? "text-secondary" : "text-primary"} text-3xl font-bold absolute right-5 top-2 pt-1 z-10 select-none`}>18</p>
                
                { isAdultMode ? 
                <FontAwesomeIcon icon={faBan} className='text-red text-5xl absolute right-3 top-1 pt-1 z-20'/>
                :
                <FontAwesomeIcon icon={faCircle} className='text-primary text-5xl absolute right-3 top-1 pt-1 z-0'/>
            }
            </div>
                </div>
        </div>
    )
}

export default MainMenu