import React from "react"

const TeamSelectionPalette = ({ data, selectTeamColour, teamName, teams }) => (
  <div className="m-auto w-full justify-center items-center flex flex-col rounded-xl">
    <div className="-mb-2">
      {[0, 1].map(el => (
        <React.Fragment key={el}>
          <button
            type="button"
            aria-label={`Select ${teamName} colour`}
            onClick={() => selectTeamColour(data[`btn${el + 1}`][0], data[`btn${el + 1}`][1])}
            className={`h-16 w-16 ${data[`btn${el + 1}`][2]} ${el === 0 ? "rounded-tl-xl" : "rounded-tr-xl"} shadow-lg shadow-black/50`}
          />
        </React.Fragment>
      ))}
    </div>
    <div>
      {[2, 3].map(el => (
        <React.Fragment key={el}>
          <button
            type="button"
            aria-label={`Select ${teamName} colour`}
            onClick={() => selectTeamColour(data[`btn${el + 1}`][0], data[`btn${el + 1}`][1])}
            className={`h-16 w-16 ${data[`btn${el + 1}`][2]} ${el === 3 ? "rounded-br-xl" : "rounded-bl-xl"} shadow-lg shadow-black/50`}
          />
        </React.Fragment>
      ))}
    </div>
  </div>
)

export default TeamSelectionPalette
