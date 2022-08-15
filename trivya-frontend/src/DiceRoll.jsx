import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const DiceRoll = () => {
  const [dice1Side, setDice1Side] = useState('')
  const [dice2Side, setDice2Side] = useState('')
  const [dice3Side, setDice3Side] = useState('')
  const [dice4Side, setDice4Side] = useState('')
  const [hasRolled, setHasRolled] = useState(false)
  const [isRolling, setIsRolling] = useState(false)
  const [hasTooManySixes, setHasTooManySixes] = useState(false)
  const [team1Turn, setTeam1Turn] = useState(false)
  const [team2Turn, setTeam2Turn] = useState(false)
  const [team3Turn, setTeam3Turn] = useState(false)
  const [team4Turn, setTeam4Turn] = useState(false)

  const sides = ['one', 'two', 'three', 'four', 'five', 'six']

  const players = 3
  // keep in global Redux state ^^^

  const rand1 = sides[Math.floor(Math.random() * sides.length)]
  const rand2 = sides[Math.floor(Math.random() * sides.length)]
  const rand3 = sides[Math.floor(Math.random() * sides.length)]
  const rand4 = sides[Math.floor(Math.random() * sides.length)]

  useEffect(() => {
    setDice1Side('five')
    setDice2Side('five')
    setDice3Side('five')
    setDice4Side('five')
  }, [])

  const rollDice = () => {
    setHasRolled(true)
    setIsRolling(true)

    setTimeout(() => {
      setIsRolling(false)
      setDice1Side(rand1)
      setDice2Side(rand2)
      setDice3Side(rand3)
      setDice4Side(rand4)
      decideFirstTurn(rand1, rand2, rand3, rand4)
    }, 700)
  }

  const decideFirstTurn = (rand1, rand2, rand3, rand4) => {
    if (players === 2) {
      if (rand1 % 2 === 0) {
        setTeam2Turn(true)
        console.log('team 2 turn')
      } else {
        setTeam1Turn(true)
        console.log('team 1 turn')
      }
    } else if (players === 3) {
      if ((rand1 === 'six' && rand2 === 'six') || (rand2 === 'six' && rand3 === 'six') ||
                (rand1 === 'six' && rand3 === 'six') || (rand1 === 'six' && rand2 === 'six' && rand3 === 'six')) {
        console.log('re roll too many sixes')
        setHasTooManySixes(true)
      } else if (rand1 === 'six') {
        setTeam1Turn(true)
        console.log('team 1 turn')
        // rollDice()
      } else if (rand2 === 'six') {
        setTeam2Turn(true)
        console.log('team 2 turn')
      } else if (rand3 === 'six') {
        setTeam3Turn(true)
        console.log('team 3 turn')
      } else {
        console.log('re roll bc no sixes')
        // rollDice()
        // SWAP THIS ELSE WITH FIRST CONDITION if possible
      }
    } else if (players === 4) {
      if ((rand1 === 'six' && rand2 === 'six') || (rand2 === 'six' && rand3 === 'six') ||
                (rand3 === 'six' && rand4 === 'six') || (rand1 === 'six' && rand3 === 'six') ||
                (rand2 === 'six' && rand4 === 'six') || (rand1 === 'six' && rand4 === 'six') ||
                (rand1 === 'six' && rand2 === 'six' && rand3 === 'six' && rand4 === 'six')) {
        console.log('re roll too many sixes')
        setHasTooManySixes(true)
      } else if (rand1 === 'six') {
        setTeam1Turn(true)
        console.log('team 1 turn')
        // rollDice()
      } else if (rand2 === 'six') {
        setTeam2Turn(true)
        console.log('team 2 turn')
      } else if (rand3 === 'six') {
        setTeam3Turn(true)
        console.log('team 3 turn')
      } else if (rand4 === 'six') {
        setTeam4Turn(true)
        console.log('team 4 turn')
      } else {
        console.log('re roll bc no sixes')
        // rollDice()
      }
    }
  }

  const teamTurns = [team1Turn, team2Turn, team3Turn, team4Turn]

  const isTrue = (element) => element === true

  const whichTeam = (teams) => {
    return <div className='absolute m-auto left-0 right-0 pt-0.5 bg-secondary w-80 h-9 rounded-br-xl rounded-bl-xl'>
                        <p className='text-primary text-center text-xl px-3 rounded-br-xl rounded-bl-xl'>
                         { teams.findIndex(isTrue) !== -1
                         //  FIXME: Replace with team stored in Redux
                           ? `Team ${teams.findIndex(isTrue) + 1} begins!`
                           : isRolling
                             ? 'Rolling...'
                             : (hasRolled && !hasTooManySixes && teams.findIndex(isTrue) === -1)
                                 ? 'No six rolled - tap to roll again!'
                                 : (hasTooManySixes && teams.findIndex(isTrue) === -1)
                                     ? 'Too many sixes - tap to re-roll!'
                                     : 'Tap on the dice to roll!' }
                        </p>
                    </div>
  }

  return (
        <>
        { whichTeam(teamTurns.map(team => team)) }

            { players === 2
              ? <div className="flex justify-center items-center m-auto h-full">
                {(team1Turn || team2Turn) === false
                  ? <FontAwesomeIcon onClick={rollDice} icon={['fas', `fa-dice-${dice1Side}`]} className={`text-7xl text-primary ${hasRolled ? 'animate-spin-slow' : ''} ${isRolling ? 'pointer-events-none' : ''}`}/>
                  : <Link to="/quiz" className={isRolling ? 'pointer-events-none' : ''}>
                    <FontAwesomeIcon icon={['fas', `fa-dice-${dice1Side}`]} className={`text-7xl text-primary ${hasRolled ? 'animate-spin-slow' : ''} ${isRolling ? 'pointer-events-none' : ''}`}/>
                </Link>
                }
            </div>
              : players === 3
                ? <div className="flex justify-center items-center m-auto h-full">
                {(team1Turn || team2Turn || team3Turn) === false
                  ? <div>
                    <div>
                        <FontAwesomeIcon onClick={rollDice} icon={['fas', `fa-dice-${dice1Side}`]} className={`text-7xl text-primary m-5 ${hasRolled ? 'animate-spin-slow' : ''} ${isRolling ? 'pointer-events-none' : ''}`}/>
                        <FontAwesomeIcon onClick={rollDice} icon={['fas', `fa-dice-${dice2Side}`]} className={`text-7xl text-primary m-5 ${hasRolled ? 'animate-spin-slow' : ''} ${isRolling ? 'pointer-events-none' : ''}`}/>
                    </div>
                    <div className='flex justify-center'>
                        <FontAwesomeIcon onClick={rollDice} icon={['fas', `fa-dice-${dice3Side}`]} className={`text-7xl text-primary m-5 ${hasRolled ? 'animate-spin-slow' : ''} ${isRolling ? 'pointer-events-none' : ''}`}/>
                    </div>
                </div>
                  : <Link to="/quiz" className={isRolling ? 'pointer-events-none' : ''}>
                    <div>
                        <FontAwesomeIcon icon={['fas', `fa-dice-${dice1Side}`]} className={`text-7xl text-primary m-5 ${hasRolled ? 'animate-spin-slow' : ''} ${isRolling ? 'pointer-events-none' : ''}`}/>
                        <FontAwesomeIcon icon={['fas', `fa-dice-${dice2Side}`]} className={`text-7xl text-primary m-5 ${hasRolled ? 'animate-spin-slow' : ''} ${isRolling ? 'pointer-events-none' : ''}`}/>
                    </div>
                    <div className='flex justify-center'>
                        <FontAwesomeIcon icon={['fas', `fa-dice-${dice3Side}`]} className={`text-7xl text-primary m-5 ${hasRolled ? 'animate-spin-slow' : ''} ${isRolling ? 'pointer-events-none' : ''}`}/>
                    </div>
                </Link>
            }
            </div>
                : players === 4 &&
                <div className="flex justify-center items-center m-auto h-full">
                {(team1Turn || team2Turn || team3Turn || team4Turn) === false
                  ? <div>
                    <div>
                        <FontAwesomeIcon onClick={rollDice} icon={['fas', `fa-dice-${dice1Side}`]} className={`text-7xl text-primary m-5 ${hasRolled ? 'animate-spin-slow' : ''} ${isRolling ? 'pointer-events-none' : ''}`}/>
                        <FontAwesomeIcon onClick={rollDice} icon={['fas', `fa-dice-${dice2Side}`]} className={`text-7xl text-primary m-5 ${hasRolled ? 'animate-spin-slow' : ''} ${isRolling ? 'pointer-events-none' : ''}`}/>
                    </div>
                    <div>
                        <FontAwesomeIcon onClick={rollDice} icon={['fas', `fa-dice-${dice3Side}`]} className={`text-7xl text-primary m-5 ${hasRolled ? 'animate-spin-slow' : ''} ${isRolling ? 'pointer-events-none' : ''}`}/>
                        <FontAwesomeIcon onClick={rollDice} icon={['fas', `fa-dice-${dice4Side}`]} className={`text-7xl text-primary m-5 ${hasRolled ? 'animate-spin-slow' : ''} ${isRolling ? 'pointer-events-none' : ''}`}/>
                    </div>
                </div>
                  : <Link to="/quiz" className={isRolling ? 'pointer-events-none' : ''}>
                    <div>
                        <FontAwesomeIcon icon={['fas', `fa-dice-${dice1Side}`]} className={`text-7xl text-primary m-5 ${hasRolled ? 'animate-spin-slow' : ''} ${isRolling ? 'pointer-events-none' : ''}`}/>
                        <FontAwesomeIcon icon={['fas', `fa-dice-${dice2Side}`]} className={`text-7xl text-primary m-5 ${hasRolled ? 'animate-spin-slow' : ''} ${isRolling ? 'pointer-events-none' : ''}`}/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={['fas', `fa-dice-${dice3Side}`]} className={`text-7xl text-primary m-5 ${hasRolled ? 'animate-spin-slow' : ''} ${isRolling ? 'pointer-events-none' : ''}`}/>
                        <FontAwesomeIcon icon={['fas', `fa-dice-${dice4Side}`]} className={`text-7xl text-primary m-5 ${hasRolled ? 'animate-spin-slow' : ''} ${isRolling ? 'pointer-events-none' : ''}`}/>
                    </div>
                </Link>
                }
            </div>
            }
        </>
  )
}

export default DiceRoll
