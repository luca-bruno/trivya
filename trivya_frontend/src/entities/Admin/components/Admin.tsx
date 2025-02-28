/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useState } from "react"
import { Pie } from "react-chartjs-2"
import { Chart, ArcElement, Legend } from "chart.js"
import { useViewAllQuestionsQuery } from "@services/admin"

Chart.register(ArcElement, Legend)

const Admin = () => {
  const dataset = {
    labels: [
      "Red",
      "Blue",
      "Yellow"
    ],
    datasets: [{
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "red",
        "blue",
        "green"
      ]
    }]
  }

  const [currentMode, setCurrentMode] = useState<string>()
  const { data: allQuestions } = useViewAllQuestionsQuery()
  console.log(allQuestions)

  return (
    <div>
      <button
        onClick={() => setCurrentMode("add")}        
        className="bg-primary text-white p-2 rounded-lg m-2" 
        type="button"
        aria-label="bruh"
      >
        {/* <FontAwesomeIcon icon={["fas", icon as IconName]} className="text-secondary text-4xl laptop:text-5xl laptopL:text-6xl flex m-auto pb-3" /> */}
        <p className="text-secondary text-md laptop:text-2xl laptopL:text-3xl font-medium font-secondary select-none">Add new record</p>
      </button>
      <br />
      <button
        onClick={() => setCurrentMode("edit")}
        className="bg-primary text-white p-2 rounded-lg m-2" 
        type="button"
        aria-label="bruh"
      >
        {/* <FontAwesomeIcon icon={["fas", icon as IconName]} className="text-secondary text-4xl laptop:text-5xl laptopL:text-6xl flex m-auto pb-3" /> */}
        <p className="text-secondary text-md laptop:text-2xl laptopL:text-3xl font-medium font-secondary select-none">Edit existing record</p>
      </button>
      <br />
      <button
        onClick={() => setCurrentMode("view")}
        className="bg-primary text-white p-2 rounded-lg m-2" 
        type="button"
        aria-label="bruh"
      >
        {/* <FontAwesomeIcon icon={["fas", icon as IconName]} className="text-secondary text-4xl laptop:text-5xl laptopL:text-6xl flex m-auto pb-3" /> */}
          <p className="text-secondary text-md laptop:text-2xl laptopL:text-3xl font-medium font-secondary select-none">View specific records</p>
      </button>
      <br />
      <button
        onClick={() => setCurrentMode("view")}
        className="bg-primary text-white p-2 rounded-lg m-2" 
        type="button"
        aria-label="bruh"
      >
        {/* <FontAwesomeIcon icon={["fas", icon as IconName]} className="text-secondary text-4xl laptop:text-5xl laptopL:text-6xl flex m-auto pb-3" /> */}
        <p className="text-secondary text-md laptop:text-2xl laptopL:text-3xl font-medium font-secondary select-none">View all records</p>
      </button>
      <br />
      <button
        onClick={() => setCurrentMode("delete")}
        className="bg-primary text-white p-2 rounded-lg m-2" 
        type="button"
        aria-label="bruh"
      >
        {/* <FontAwesomeIcon icon={["fas", icon as IconName]} className="text-secondary text-4xl laptop:text-5xl laptopL:text-6xl flex m-auto pb-3" /> */}
        <p className="text-secondary text-md laptop:text-2xl laptopL:text-3xl font-medium font-secondary select-none">Delete existing record</p>
      </button>
      <br />

      {currentMode === "add" &&
      <>
        <h2 className="text-primary text-2xl">Add New Record</h2>
        <form className="text-primary">
          {/* <label aria-label="bruh">UUID</label>
          <br />
          <input type="text"/>
          <br /> */}
          <label aria-label="bruh">Question content</label>
          <br />
          <input type="text"/>
          <br />
          <label aria-label="bruh">Question content MT</label>
          <br />
          <input type="text"/>
          <br />
          <label aria-label="bruh">Answer 1 content</label>
          <br />
          <input type="text"/>
          <br />
          <label aria-label="bruh">Answer 1 isCorrect</label>
          <br />
          <input type="checkbox"/>
          <br />
          <label aria-label="bruh">Answer 2 content</label>
          <br />
          <input type="text"/>
          <br />
          <label aria-label="bruh">Answer 2 isCorrect</label>
          <br />
          <input type="checkbox"/>
          <br />
          <label aria-label="bruh">Answer 3 content</label>
          <br />
          <input type="text"/>
          <br />
          <label aria-label="bruh">Answer 3 isCorrect</label>
          <br />
          <input type="checkbox"/>
          <br />
          <label aria-label="bruh">Answer 4 content</label>
          <br />
          <input type="text"/>
          <br />
          <label aria-label="bruh">Answer 4 isCorrect</label>
          <br />
          <input type="checkbox"/>
          <br />
          <label aria-label="bruh">Answer 1 content MT</label>
          <br />
          <input type="text"/>
          <br />
          <label aria-label="bruh">Answer 2 content MT</label>
          <br />
          <input type="text"/>
          <br />
          <label aria-label="bruh">Answer 3 content MT</label>
          <br />
          <input type="text"/>
          <br />
          <label aria-label="bruh">Answer 4 content MT</label>
          <br />
          <input type="text"/>
          <br />
          <label aria-label="bruh">Category</label>
          <br />
          <input type="text"/>
          <br />
          <label aria-label="bruh">Fact</label>
          <br />
          <input type="text"/>
          <br />
          <label aria-label="bruh">Fact MT</label>
          <br />
          <input type="text"/>
          <br />
          <label aria-label="bruh">Difficulty</label>
          <br />
          <input type="text"/>
          <br />
        </form>
      </>
      }

      {currentMode === "edit" &&
        <>edit</>
      }

      {currentMode === "view" &&
      <div>
        {
          allQuestions?.map(({ uuid, content, contentMt, category, difficulty, fact, factMt }) => (
            <p className="bg-primary w-full" key={uuid}>{content}</p>
          ))
        }
      </div>
      }

      {currentMode === "delete" &&
        <>delete</>
      }

      {/* <Pie data={dataset} /> */}
    </div>
  )
}

export default Admin
