// Write your code here
import './index.css'

const MatchCard = props => {
  const {item} = props

  const colorToggle = item.match_status === 'Won' ? 'green' : 'red'
  return (
    <li className="listItem01">
      <img
        className="img112"
        src={item.competing_team_logo}
        alt={`competing team ${item.competing_team}`}
      />
      <p className="competing_team1">{item.competing_team}</p>
      <p className="competing_team2">{item.result}</p>
      <p className={colorToggle}>{item.match_status}</p>
    </li>
  )
}

export default MatchCard
