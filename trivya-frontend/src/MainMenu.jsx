import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGear, faGear} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function MainMenu() {
    return (
        <div className='grid justify-center items-center pt-32'>
            <Logo></Logo>
            <div className="flex text-tertiary pt-20">
                <Link to="/teamSelect">
                    <div className='px-5'>
                        <button className="bg-primary rounded-lg cursor-pointer w-40 h-40">
                            <FontAwesomeIcon icon={faUserGear} className='text-secondary text-5xl flex m-auto pb-3' />
                            Classic Mode
                        </button>
                    </div>
                </Link>
                <Link to="/customMode">
                    <div className='px-5'>
                        <button className="bg-primary rounded-lg cursor-pointer w-40 h-40">
                            <FontAwesomeIcon icon={faGear} className='text-secondary text-5xl flex m-auto pb-3' />
                            Custom Mode
                        </button>                    
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MainMenu