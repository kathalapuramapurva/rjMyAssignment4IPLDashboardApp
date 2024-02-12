import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCard} = props
  const {id, name, teamImageUrl} = teamCard
  return (
    <li className="each-team-card">
      <Link to={`/team-matches/${id}`}>
        <div className="team-card-content">
          <img className="team-card-image" src={teamImageUrl} alt={name} />
          <p className="team-card-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
