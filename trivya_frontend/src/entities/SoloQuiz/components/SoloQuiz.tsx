import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Header } from "@shared/Header"
import React, { Component, useRef } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { Link, useNavigate } from "react-router-dom"
// import Score from "./Score"

const SoloQuiz = () => {
  const navigate = useNavigate()
  // componentDidMount = () => {
  //     axios.get("/api").then(res => {
  //         console.log(res);
  //         console.log(res.data[currentQuestion].questionContent);

  //         this.setState({
  //             questions: res.data,
  //             currentQuestionContent: res.data[currentQuestion].questionContent,
  //             currentQuestionContentMT: res.data[currentQuestion].questionContentMT,
  //             currentQuestionAnswers: res.data[currentQuestion].answers,
  //             currentQuestionCategory: res.data[currentQuestion].category,
  //             currentQuestionFact: res.data[currentQuestion].fact,
  //             currentQuestionFactMT: res.data[currentQuestion].factMT,
  //             currentQuestionDifficulty: res.data[currentQuestion].difficulty
  //         })

  //         console.log(currentQuestionAnswers);
  //         console.log(questions);
  //     })

  // }

  // answerClick = (isCorrect) => {
  //     this.setState({
  //         answerPause: true
  //     })
  //     setTimeout(() => {
  //         this.secondClick(isCorrect);

  //     }, 850);

  //     if ((isCorrect && this.context.teamTurn1) === true) { // && turn1
  //         this.setState(st => {
  //             return {
  //                 score1: st.score1 + 1,
  //                 displayCorrect: true
  //             }
  //         });

  //         setTimeout(() => {
  //             this.setState({
  //                 displayCorrect: false
  //             })

  //         }, 1500);
  //     }

  //     if ((isCorrect && this.context.teamTurn2) === true) { // && turn2
  //         this.setState(st => {
  //             return {
  //                 score2: st.score2 + 1,
  //                 displayCorrect: true
  //             }
  //         });

  //         setTimeout(() => {
  //             this.setState({
  //                 displayCorrect: false
  //             })

  //         }, 1500);
  //     }

  //     if (!isCorrect) {
  //         this.setState({
  //             displayIncorrect: true
  //         })

  //         setTimeout(() => {
  //             this.setState({
  //                 displayIncorrect: false
  //             })

  //         }, 1500);
  //     }

  // }

  // secondClick = (isCorrect) => {
  //     const questionArray = this.state.questions;

  //     this.context.swapTurns();

  //     this.setState({
  //         currentQuestionContent: questionArray[this.state.nextQuestion].questionContent,
  //         currentQuestionContentMT: questionArray[this.state.nextQuestion].questionContentMT,
  //         currentQuestionAnswers: questionArray[this.state.nextQuestion].answers,
  //         currentQuestionCategory: questionArray[this.state.nextQuestion].category,
  //         currentQuestionFact: questionArray[this.state.nextQuestion].fact,
  //         currentQuestionFactMT: questionArray[this.state.nextQuestion].factMT,
  //         currentQuestionDifficulty: questionArray[this.state.nextQuestion].difficulty,

  //         answerPause: false
  //     });

  //     this.shuffleAnswerOptions();

  //     if (this.state.nextQuestion < questionArray.length) {
  //         this.setState({
  //             currentQuestion: this.state.nextQuestion++,
  //         });
  //     } else {
  //         this.setState({
  //             hasQuizEnded: true
  //         });
  //     }
  //     if (this.context.teamTurn1 === true) {
  //         this.setState({ // local states for next turn
  //             teamTurn1: true,
  //             teamTurn2: false
  //         });
  //     } else if (this.context.teamTurn2 === true) {
  //         this.setState({ // local states for next turn
  //             teamTurn1: false,
  //             teamTurn2: true
  //         });
  //     }
  // }

  // endTimer = () => {
  //     this.setState({
  //         hasQuizEnded: true
  //     });
  // }

  // // Fisher-Yates randomising shuffle algorithm
  // shuffle(array) {
  //     let currentIndex = array.length, randomIndex;

  //     // While array has elements
  //     while (currentIndex !== 0) {

  //         // Select randomIndex from remaining elements
  //         randomIndex = Math.floor(Math.random() * currentIndex);
  //         currentIndex--;

  //         // Swap values of currentIndex and randomIndex through destructuring assignment
  //         [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  //     }

  //     return array;
  // }

  // shuffleAnswerOptions = () => {
  //     this.state.questions.forEach(question =>
  //         this.state.questions.map((r) => (
  //             this.shuffle(r.answers)
  //         ))
  //     );
  // }

  // Randomising order of questions
  // shuffledQuestions = this.shuffle(questions);

  // TODO: temp
  const hasQuizEnded = false
  const fontColour1 = "text-primary"
  const fontColour2 = "text-secondary"
  const teamName1 = "default1"
  const teamName2 = "default2"
  const score = 99
  const score2 = 5
  const nextQuestion = 1
  const questions = ["answer1", "answer2", "answer3", "answer4"]
  const question = "What year did the Battle of Hastings occur?"
  const question2 = "What year did the Battle of Hastings occur?"
  const currentQuestionNumber = 5
  const totalQuestionsLength = 10

  // TODO: not perfect, rework and test
  const resizeQuestionFont = () => {
    if (question2.length < 40) {
      return "text-3xl"
    }
    if (question2.length < 60) {
      return "text-2xl"
    }
    if (question2.length < 110) {
      return "text-lg"
    }
    if (question2.length < 150) {
      return "text-base"
    }
    if (question2.length < 190) {
      return "text-sm"
    }
    return null
  }

  return (
    <div>
      <Header backNavigationTarget="/number-of-teams" displayBackButton displayCountdownTimer displaySoloScore />

      {/* image */}
      <div className="pt-[90%] relative px-4">
        <img
          alt="question"
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://www.marxist.com/images/stories/france/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg"
        />
      </div>
      {/* question */}
      {/* TODO: regulate char limit of questions and answers from db to 190 for qs - check for answers later */}
      <div className="text-white text-sm my-4 mb-1 mx-4">
        Question&nbsp;
        <span className="font-semibold text-primary">{currentQuestionNumber}</span>
        &nbsp;of
        {" "}
        {totalQuestionsLength}
      </div>
      <div className="text-primary font-semibold text-2xl mx-4 h-24">
        <p className={`text-ellipsis ${resizeQuestionFont()}`}>{question2}</p>
      </div>
      {questions.map(question => (
        <button
          type="button"
          key={question}
          className="w-[90%] flex justify-center text-secondary text-center py-4 my-4 mx-4 font-semibold bg-primary rounded-xl"
        >
          {question}
        </button>
      ))}
    </div>
    // <div>
    //   {hasQuizEnded ? (
    //     <div>
    //       {/* <EndGame /> */}
    //       <div className="flex justify-center items-center flex-col">
    //         <div className="w-[600px] m-5">
    //           <div className="bg-primary flex justify-center text-center tracking-wide">
    //             <h1>Final Scores</h1>
    //           </div>

  //           <div className="inline-flex width-1/2 justify-center">
  //             <h1 className={fontColour1}>{teamName1}</h1>
  //           </div>
  //           <div className="inline-flex width-1/2 justify-center">
  //             <h1 className={fontColour2}>{teamName2}</h1>
  //           </div>
  //           <div className="inline-flex width-1/2 justify-center">
  //             <p className={`${fontColour1} text-md mt-[5px]`}>{score1}</p>
  //           </div>
  //           <div className="inline-flex width-1/2 justify-center">
  //             <p className={`${fontColour1} text-md mt-[5px]`}>{score2}</p>
  //           </div>
  //         </div>
  //         <div className="Teams-button">
  //           <Link to="/teamSelect">
  //             <button type="button" className="confirmation-button">
  //               Play again!
  //             </button>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   ) : (
  //     <div>
  //       <div>
  //         <div>
  //           <div className={`${fontColour1} text-sm left-[95px]`}>{teamName1}</div>
  //           <div className={`${fontColour1} text-sm right-[95px]`}>{teamName2}</div>
  //         </div>
  //       </div>
  //       <div>
  //         <i className="absolute bg-primary top-[87px] left-[39px] fas fa-dice-five fa-2x" />
  //       </div>

  //       <p className={`${fontColour1} text-sm absolute top-[50px] left-[95px]`}>{score1}</p>

  //       <p className={`${fontColour2} text-sm absolute bottom-[50px] right-[95px]`}>{score2}</p>
  //       {/* <p className="Score-title">Score: {score}</p> */}

  //       <div className="countdown">
  //         {/* <CountdownCircleTimer
  //                                         isPlaying
  //                                         duration={65}
  //                                         size={100}
  //                                         colors={'#DF7E00'}
  //                                         trailStrokeWidth={0}
  //                                         strokeWidth={10}
  //                                         onComplete={this.endTimer}
  //                                         style={{ filter: 'drop-shadow(3px 3.5px black)' }}>
  //                                         {({ remainingTime }) => remainingTime}
  //                                     </CountdownCircleTimer> */}
  //       </div>
  //       <div className="flex justify-center items-center flex-col">
  //         <div className="w-[600px] m-[20px]">
  //           <div className="absolute left-0 right-0 top-[100px] m-auto bg-primary text-center">
  //             {/* {displayIncorrect ?
  //                                                 <ImCross className="Questions-incorrect" />
  //                                                 :
  //                                                 null
  //                                             }

  //                                             {displayCorrect ?
  //                                                 <TiTick className="Questions-correct" />
  //                                                 :
  //                                                 null
  //                                             } */}
  //           </div>

  //           <div className="bg-primary justify-center">
  //             <h3 className="text-left">
  //               {`Question
  //               ${nextQuestion} of
  //               ${questions.length}`}
  //             </h3>
  //           </div>
  //           <div className="flex bg-primary justify-center text-center tracking-wide">
  //             {/* <h1 style={{ marginTop: 0, marginBottom: 0 }}>{currentQuestionContent}</h1> */}
  //           </div>
  //           <div className="bg-primary justify-center">{/* <h3 style={{ textAlign: "right" }}>{`Category:${currentQuestionCategory}`}</h3> */}</div>

  //           {/* <div className={correct ? "Questions-correct-button Questions-answer" : "Questions-answer"}> */}
  //           {/* {currentQuestionAnswers.map(a => (
  //               <button type="button" key={a} className="Questions-answer-button" onClick={() => answerClick(a.isCorrect)} disabled={answerPause}>
  //                 {a.answerContent}
  //               </button>
  //             ))} */}
  //           {/* </div> */}
  //         </div>
  //       </div>
  //     </div>
  //   )}
  // </div>
  )
}

export default SoloQuiz
