import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const TeamSelection = () => {

    // FIXME: Tailwind background-gradient limitation
    // FIXME: Redundant colour codes same as in tailwind.config.js - required because direct styling of html selector does not support custom colours
    const primary = '#F96815'
    const secondary = '#0F4C81'
    const red = '#DA291C'
    const redSecondary = '#831F1F'
    const blue = '#4589C6'
    const blueSecondary = '#003098'
    const green = '#01855B'
    const greenSecondary = '#002C17'
    const purple = '#6050A8'
    const purpleSecondary = '#501F60'


    const [tempPlayers, setTempPlayers] = useState(4)


    const [team1Name, setTeam1Name] = useState("Alpha")
    const [team2Name, setTeam2Name] = useState("Beta")
    const [team3Name, setTeam3Name] = useState("Charlie")
    const [team4Name, setTeam4Name] = useState("Delta")
    const [team1TextColour, setTeam1TextColour] = useState("text-primary")
    const [team2TextColour, setTeam2TextColour] = useState("text-primary")
    const [team3TextColour, setTeam3TextColour] = useState("text-primary")
    const [team4TextColour, setTeam4TextColour] = useState("text-primary")
    const [team1BackgroundColour, setTeam1BackgroundColour] = useState(secondary)
    const [team2BackgroundColour, setTeam2BackgroundColour] = useState(secondary)
    const [team3BackgroundColour, setTeam3BackgroundColour] = useState(secondary)
    const [team4BackgroundColour, setTeam4BackgroundColour] = useState(secondary)


    if (tempPlayers == 4){
        // FIXME: Tailwind background-gradient limitation
        document.querySelector("html").style =
            `background: linear-gradient(to right, ${team1BackgroundColour} 0%, ${team1BackgroundColour} 50%, ${team2BackgroundColour} 50%, ${team2BackgroundColour} 100%), 
            linear-gradient(to right, ${team3BackgroundColour} 0%, ${team3BackgroundColour} 50%, ${team4BackgroundColour} 50%, ${team4BackgroundColour} 100%);
            background-size: 100% 50.1%;
            background-position: center top, center bottom;
            background-repeat: no-repeat;`
    } else if (tempPlayers == 3){
        // FIXME: Tailwind background-gradient limitation
        document.querySelector("html").style =
            `background: linear-gradient(to right, ${team1BackgroundColour} 0%, ${team1BackgroundColour} 50%, ${team2BackgroundColour} 50%, ${team2BackgroundColour} 100%), 
            linear-gradient(to right, ${team3BackgroundColour} 0%, ${team3BackgroundColour} 50%, ${team3BackgroundColour} 50%, ${team3BackgroundColour} 100%);
            background-size: 100% 50.1%;
            background-position: center top, center bottom;
            background-repeat: no-repeat;`
    } else {
        // FIXME: Tailwind background-gradient limitation
        document.querySelector("html").style =
            `background: linear-gradient(180deg, ${team1BackgroundColour} 50%, ${team2BackgroundColour} 50%);`
    }

    const handleTeam1Name = (event) => {
        setTeam1Name(event.target.value)
        // this.setState({
        //     hasName1Changed: true
        // })
    }

    const handleTeam2Name = (event) => {
        setTeam2Name(event.target.value)
        // this.setState({
        //     hasName1Changed: true
        // })
    }

    const handleTeam3Name = (event) => {
        setTeam3Name(event.target.value)
        // this.setState({
        //     hasName1Changed: true
        // })
    }

    const handleTeam4Name = (event) => {
        setTeam4Name(event.target.value)
        // this.setState({
        //     hasName1Changed: true
        // })
    }

    const selectTeam1Colour = (event) => {
        let colour = event.target.className
        console.log(colour)

        if(colour.includes("bg-red")){
            setTeam1TextColour("text-red")
            setTeam1BackgroundColour(redSecondary)
        } else if (colour.includes("bg-blue")){
            setTeam1TextColour("text-blue")
            setTeam1BackgroundColour(blueSecondary)
        } else if (colour.includes("bg-green")){
            setTeam1TextColour("text-green")
            setTeam1BackgroundColour(greenSecondary)
        } else if (colour.includes("bg-purple")){
            setTeam1TextColour("text-purple")
            setTeam1BackgroundColour(purpleSecondary)
        }
    }

    const selectTeam2Colour = (event) => {
        let colour = event.target.className
        console.log(colour)

        if(colour.includes("bg-red")){
            setTeam2TextColour("text-red-secondary")
            setTeam2BackgroundColour(red)
        } else if (colour.includes("bg-blue")){
            setTeam2TextColour("text-blue-secondary")
            setTeam2BackgroundColour(blue)
        } else if (colour.includes("bg-green")){
            setTeam2TextColour("text-green-secondary")
            setTeam2BackgroundColour(green)
        } else if (colour.includes("bg-purple")){
            setTeam2TextColour("text-purple-secondary")
            setTeam2BackgroundColour(purple)
        }
    }

    const selectTeam3Colour = (event) => {
        let colour = event.target.className
        console.log(colour)

        if(colour.includes("bg-red")){
            setTeam3TextColour("text-red-secondary")
            setTeam3BackgroundColour(red)
        } else if (colour.includes("bg-blue")){
            setTeam3TextColour("text-blue-secondary")
            setTeam3BackgroundColour(blue)
        } else if (colour.includes("bg-green")){
            setTeam3TextColour("text-green-secondary")
            setTeam3BackgroundColour(green)
        } else if (colour.includes("bg-purple")){
            setTeam3TextColour("text-purple-secondary")
            setTeam3BackgroundColour(purple)
        }
    }

    const selectTeam4Colour = (event) => {
        let colour = event.target.className
        console.log(colour)

        if(colour.includes("bg-red")){
            setTeam4TextColour("text-red")
            setTeam4BackgroundColour(redSecondary)
        } else if (colour.includes("bg-blue")){
            setTeam4TextColour("text-blue")
            setTeam4BackgroundColour(blueSecondary)
        } else if (colour.includes("bg-green")){
            setTeam4TextColour("text-green")
            setTeam4BackgroundColour(greenSecondary)
        } else if (colour.includes("bg-purple")){
            setTeam4TextColour("text-purple")
            setTeam4BackgroundColour(purpleSecondary)
        }
    }

    const handleSubmit = () => {
        // this.context.changeTeamName1(this.state.teamName1);
        // this.context.changeTeamName2(this.state.teamName2);
        // this.context.changeTeamFontColour1(this.state.fontColour1);
        // this.context.changeTeamFontColour2(this.state.fontColour2);

        // // default team names to catch errors
        // if (this.state.teamName1 === undefined) {
        //     this.context.changeTeamName1("Alpha");
        // }
        // if (this.state.teamName2 === undefined) {
        //     this.context.changeTeamName2("Beta");
        // }
    }

    return (
    <>
        <p className={`${team1TextColour} ${team1BackgroundColour} font-secondary text-5xl absolute left-20 top-20`}>{team1Name}</p>
        <p className={`${team2TextColour} ${team2BackgroundColour} font-secondary text-5xl absolute ${tempPlayers >= 3 ? "right-20 top-20" : "right-20 bottom-20"}`}>{team2Name}</p>
        <p className={`${team3TextColour} ${team3BackgroundColour} font-secondary text-5xl absolute ${tempPlayers >= 3 ? "visible" : "hidden"} left-20 bottom-20`}>{team3Name}</p>
        <p className={`${team4TextColour} ${team4BackgroundColour} font-secondary text-5xl absolute ${tempPlayers == 4 ? "visible" : "hidden"} right-20 bottom-20`}>{team4Name}</p>

        <div className=''>
            <div className={`bg-primary m-auto text-center rounded-xl w-80 my-40`}>
                <div className=''>
                    <p className="text-black text-lg">Enter Team 1 name:</p>
                    <form className='flex justify-center'>
                        <input type="text" className='text-3xl w-64 text-center flex mx-5 text-primary bg-secondary border-secondary border-2 rounded-lg' maxlength="10" value={team1Name} onChange={handleTeam1Name} />
                    </form>
                    <p className=''>Select a colour:</p>
                    <div>
                        <button onClick={selectTeam1Colour} className={`h-16 w-16 bg-red-secondary`}></button>
                        <button onClick={selectTeam1Colour} className={`h-16 w-16 bg-blue-secondary`}></button>
                        <button onClick={selectTeam1Colour} className={`h-16 w-16 bg-green-secondary`}></button>
                        <button onClick={selectTeam1Colour} className={`h-16 w-16 bg-purple-secondary`}></button>
                    </div>
                </div>
                <div className=''>
                    <p className="text-black text-lg">Enter Team 2 name:</p>
                    <form className='flex justify-center'>
                        <input type="text" className='text-3xl w-64 text-center flex mx-5 text-primary bg-secondary border-secondary border-2 rounded-lg' maxlength="10" value={team2Name} onChange={handleTeam2Name} />
                    </form>
                    <p className=''>Select a colour:</p>
                    <div>
                        <button onClick={selectTeam2Colour} className={`h-16 w-16 bg-red`}></button>
                        <button onClick={selectTeam2Colour} className={`h-16 w-16 bg-blue`}></button>
                        <button onClick={selectTeam2Colour} className={`h-16 w-16 bg-green`}></button>
                        <button onClick={selectTeam2Colour} className={`h-16 w-16 bg-purple`}></button>
                    </div>
                </div>
                <div className=''>
                    <p className="text-black text-lg">Enter Team 3 name:</p>
                    <form className='flex justify-center'>
                        <input type="text" className='text-3xl w-64 text-center flex mx-5 text-primary bg-secondary border-secondary border-2 rounded-lg' maxlength="10" value={team3Name} onChange={handleTeam3Name} />
                    </form>
                    <p className=''>Select a colour:</p>
                    <div>
                        <button onClick={selectTeam3Colour} className={`h-16 w-16 bg-red`}></button>
                        <button onClick={selectTeam3Colour} className={`h-16 w-16 bg-blue`}></button>
                        <button onClick={selectTeam3Colour} className={`h-16 w-16 bg-green`}></button>
                        <button onClick={selectTeam3Colour} className={`h-16 w-16 bg-purple`}></button>
                    </div>
                </div>
                <div className=''>
                    <p className="text-black text-lg">Enter Team 4 name:</p>
                    <form className='flex justify-center'>
                        <input type="text" className='text-3xl w-64 text-center flex mx-5 text-primary bg-secondary border-secondary border-2 rounded-lg' maxlength="10" value={team4Name} onChange={handleTeam4Name} />
                    </form>
                    <p className=''>Select a colour:</p>
                    <div>
                        <button onClick={selectTeam4Colour} className={`h-16 w-16 bg-red-secondary`}></button>
                        <button onClick={selectTeam4Colour} className={`h-16 w-16 bg-blue-secondary`}></button>
                        <button onClick={selectTeam4Colour} className={`h-16 w-16 bg-green-secondary`}></button>
                        <button onClick={selectTeam4Colour} className={`h-16 w-16 bg-purple-secondary`}></button>
                    </div>
                </div>
            </div>
        </div>


        {/* <div className=''>
            <div className=''>
                <Link to="/dice-roll">
                    <button onClick={handleSubmit} className=''>Confirm</button>
                </Link>
            </div>
            <div className=''>
                <Link to="/">
                    <button className=''>Back to Main Menu</button>
                </Link>
            </div>
        </div> */}
    </>
  )
}

export default TeamSelection