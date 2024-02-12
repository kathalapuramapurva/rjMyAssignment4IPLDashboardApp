import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const newMatchCard = {
    competingTeamLogo: matchCard.competing_team_logo,
    competingTeam: matchCard.competing_team,
    result: matchCard.result,
    matchStatus: matchCard.match_status,
  }

  const {competingTeamLogo, competingTeam, result, matchStatus} = newMatchCard
  const colorClassName = matchStatus === 'Lost' ? 'lost' : 'won'
  return (
    <li className="match-card-content">
      <img
        className="match-card-image"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-heading">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`match-card-match-status ${colorClassName}`}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
