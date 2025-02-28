import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate, useParams } from "react-router-dom"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { InstructionPrompt } from "@shared/InstructionPrompt"
import { useBackgroundGradient } from "@hooks/index"
import { v4 as uuidv4 } from "uuid"
import { Header } from "@shared/Header"

const DiceRoll = () => {
  const navigate = useNavigate()

  const { number_of_players: numberOfPlayers } = useParams()

  const wordToNumber: Record<string, number> = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6
  }

  useBackgroundGradient({
    reset: true
  })

  // TODO: put in custom hook maybe?
  const [teams] = useState(parseInt(numberOfPlayers || "0", 10))

  useEffect(() => {
    if (teams <= 1 || teams > 4 || Number.isNaN(teams)) {
      navigate("/")
    }
  }, [navigate, teams])

  const [dice1Side, setDice1Side] = useState("five")
  const [dice2Side, setDice2Side] = useState("five")
  const [dice3Side, setDice3Side] = useState("five")
  const [dice4Side, setDice4Side] = useState("five")
  const [hasRolled, setHasRolled] = useState(false)
  const [isRolling, setIsRolling] = useState(false)
  const [hasTooManySixes, setHasTooManySixes] = useState(false)
  const [team1Turn, setTeam1Turn] = useState(false)
  const [team2Turn, setTeam2Turn] = useState(false)
  const [team3Turn, setTeam3Turn] = useState(false)
  const [team4Turn, setTeam4Turn] = useState(false)

  const sides = ["one", "two", "three", "four", "five", "six"]

  const generateRandomNumber = () => Math.floor(Math.random() * sides.length)

  const turnSelected = team1Turn || team2Turn || team3Turn || team4Turn

  const rand1 = sides[generateRandomNumber()]
  const rand2 = sides[generateRandomNumber()]
  const rand3 = sides[generateRandomNumber()]
  const rand4 = sides[generateRandomNumber()]

  const diceSixesCombinations: Record<number, boolean> = {
    3: (rand1 === "six" && rand2 === "six") || (rand2 === "six" && rand3 === "six") || (rand1 === "six" && rand3 === "six"),
    4:
      (rand1 === "six" && rand2 === "six") ||
      (rand2 === "six" && rand3 === "six") ||
      (rand3 === "six" && rand4 === "six") ||
      (rand1 === "six" && rand3 === "six") ||
      (rand2 === "six" && rand4 === "six") ||
      (rand1 === "six" && rand4 === "six")
  }

  const allDiceSixesCombinations: Record<number, boolean> = {
    3: rand1 === "six" && rand2 === "six" && rand3 === "six",
    4: rand1 === "six" && rand2 === "six" && rand3 === "six" && rand4 === "six"
  }

  const decideFirstTurn = () => {
    if (diceSixesCombinations[teams] || allDiceSixesCombinations[teams]) setHasTooManySixes(true)
    else if (teams === 2) {
      if (wordToNumber[rand1] % 2 === 0) setTeam2Turn(true)
      else setTeam1Turn(true)
    } else if (teams === 3) {
      if (rand1 === "six") setTeam1Turn(true)
      else if (rand2 === "six") setTeam2Turn(true)
      else if (rand3 === "six") setTeam3Turn(true)
      else console.log("re roll bc no sixes")
    } else if (teams === 4) {
      if (rand1 === "six") setTeam1Turn(true)
      else if (rand2 === "six") setTeam2Turn(true)
      else if (rand3 === "six") setTeam3Turn(true)
      else if (rand4 === "six") setTeam4Turn(true)
      else console.log("re roll bc no sixes")
    }
  }

  const rollDice = () => {
    setHasRolled(true)
    setIsRolling(true)

    setTimeout(() => {
      setIsRolling(false)
      setDice1Side(rand1)
      setDice2Side(rand2)
      setDice3Side(rand3)
      setDice4Side(rand4)
      decideFirstTurn()
      setHasRolled(false)
    }, 700)

    if (turnSelected) {
      navigate("../instructions")
    }
  }

  const teamTurns = [team1Turn, team2Turn, team3Turn, team4Turn]

  const isTrue = (element: boolean) => element === true

  const whichTeam = teams => {
    let text
    if (teams.findIndex(isTrue) !== -1) {
      //  FIXME: Replace with team stored in Redux
      text = `Team ${teams.findIndex(isTrue) + 1} begins!`
    } else if (isRolling) {
      text = "Rolling..."
    } else if (hasRolled && !hasTooManySixes && teams.findIndex(isTrue) === -1) {
      text = "No six rolled - tap to roll again!"
    } else if (hasTooManySixes && teams.findIndex(isTrue) === -1) {
      text = "Too many sixes - tap to re-roll!"
    } else {
      text = "Tap on the dice to roll!"
    }

    return <InstructionPrompt text={text} />
  }

  const renderPlayers = () => {
    switch (teams) {
      case 2:
        return (
          <FontAwesomeIcon
            onClick={rollDice}
            icon={["fas", `fa-dice-${dice1Side}`] as unknown as IconProp}
            className={`text-7xl text-primary ${hasRolled ? "animate-spin-slow" : ""} ${isRolling ? "pointer-events-none animate-spin-slow" : ""}`}
          />
        )
        break

      case 3:
        return (
          <div>
            {[dice1Side, dice2Side].map(el => (
              <FontAwesomeIcon
                onClick={rollDice}
                key={uuidv4()}
                icon={["fas", `fa-dice-${el}`] as unknown as IconProp}
                className={`text-7xl text-primary m-5 ${hasRolled ? "animate-spin-slow" : ""} ${
                  isRolling ? "pointer-events-none animate-spin-slow" : ""
                }`}
              />
            ))}
            <div className="flex justify-center">
              <FontAwesomeIcon
                onClick={rollDice}
                icon={["fas", `fa-dice-${dice3Side}`] as unknown as IconProp}
                className={`text-7xl text-primary m-5 ${hasRolled ? "animate-spin-slow" : ""} ${
                  isRolling ? "pointer-events-none animate-spin-slow" : ""
                }`}
              />
            </div>
          </div>
        )
        break

      case 4:
        return (
          <div>
            {[dice1Side, dice2Side].map(el => (
              <FontAwesomeIcon
                onClick={rollDice}
                key={uuidv4()}
                icon={["fas", `fa-dice-${el}`] as unknown as IconProp}
                className={`text-7xl text-primary m-5 ${hasRolled ? "animate-spin-slow" : ""} ${
                  isRolling ? "pointer-events-none animate-spin-slow" : ""
                }`}
              />
            ))}
            <div>
              {[dice3Side, dice4Side].map(el => (
                <FontAwesomeIcon
                  onClick={rollDice}
                  key={uuidv4()}
                  icon={["fas", `fa-dice-${el}`] as unknown as IconProp}
                  className={`text-7xl text-primary m-5 ${hasRolled ? "animate-spin-slow" : ""} ${
                    isRolling ? "pointer-events-none animate-spin-slow" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        )
        break

      default:
        return null
        break
    }
  }

  return (
    <>
      <Header
        backNavigationTarget={`/team-selection/${numberOfPlayers}`}
        displayBackButton
        nextNavigationTarget="/instructions"
        displayNextButton
        displayNextButtonCondition={turnSelected === true}
      />
      {whichTeam(teamTurns.map(team => team))}
      <div className="flex justify-center items-center m-auto h-full">{renderPlayers()}</div>
    </>
  )
}

export default DiceRoll



// import React, { useEffect, useState } from "react";

// const ShakeDetector = () => {
//   const [shakeDetected, setShakeDetected] = useState(false);

//   useEffect(() => {
//     let lastX = 0;
//     let lastY = 0;
//     let lastZ = 0;
//     let lastTime = 0;
//     const threshold = 15; // Sensitivity for detecting shake

//     const handleMotion = (event) => {
//       const { accelerationIncludingGravity } = event;
//       if (!accelerationIncludingGravity) return;

//       const { x, y, z } = accelerationIncludingGravity;

//       const currentTime = new Date().getTime();
//       const timeDifference = currentTime - lastTime;

//       if (timeDifference > 100) {
//         const deltaX = Math.abs(x - lastX);
//         const deltaY = Math.abs(y - lastY);
//         const deltaZ = Math.abs(z - lastZ);

//         if (
//           deltaX > threshold ||
//           deltaY > threshold ||
//           deltaZ > threshold
//         ) {
//           setShakeDetected(true);
//           setTimeout(() => setShakeDetected(false), 1000); // Reset after a second
//         }

//         lastX = x;
//         lastY = y;
//         lastZ = z;
//         lastTime = currentTime;
//       }
//     };

//     window.addEventListener("devicemotion", handleMotion);

//     return () => {
//       window.removeEventListener("devicemotion", handleMotion);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>{shakeDetected ? "Shake Detected!" : "Shake the phone!"}</h1>
//     </div>
//   );
// };

// export default ShakeDetector;
