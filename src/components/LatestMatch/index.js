// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props

  return (
    <div className="latestMatchBg1">
      <div className="cardLeft">
        <p className="heading1">{latestMatch.competing_team}</p>
        <p>{latestMatch.date}</p>
        <p>{latestMatch.venue}</p>
        <p>{latestMatch.result}</p>
      </div>
      <img
        className="teamLogo"
        src={latestMatch.competing_team_logo}
        alt={`latest match ${latestMatch.competing_team}`}
      />
      <div className="cardRight">
        <p>First Innings</p>
        <p>{latestMatch.first_innings}</p>
        <p>Second Innings</p>
        <p>{latestMatch.second_innings}</p>
        <p>Man of The Match</p>
        <p>{latestMatch.man_of_the_match}</p>
        <p>Umpires</p>
        <p>{latestMatch.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
