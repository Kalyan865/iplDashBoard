// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {item} = props
  const {id, name, teamImageUrl} = item

  return (
    <li className="listItemsBox001">
      <Link className="listItemsBox" to={`/team-matches/${id}`}>
        <img className="teamImg" src={teamImageUrl} alt={name} />
        <p className="teamName">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
