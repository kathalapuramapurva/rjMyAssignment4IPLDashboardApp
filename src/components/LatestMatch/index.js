import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const newLatestMatchDetails = {
    competingTeam: latestMatchDetails.competing_team,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    result: latestMatchDetails.result,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    umpires: latestMatchDetails.umpires,
  }
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = newLatestMatchDetails
  return (
    <div className="latest-match-container">
      <div className="top-container">
        <div className="top-details-container">
          <p className="competing-team-heading">{competingTeam}</p>
          <p className="competing-team-heading">{date}</p>
          <p className="style-venue">{venue}</p>
          <p className="style-venue">{result}</p>
        </div>
        <img
          className="style-latest-match-image"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <hr className="style-line" />
      <div className="bottom-container">
        <p className="first-innings-heading">First Innings</p>
        <p className="style-venue">{firstInnings}</p>
        <p className="first-innings-heading">Second Innings</p>
        <p className="style-venue">{secondInnings}</p>
        <p className="first-innings-heading">Man Of The Match</p>
        <p className="style-venue">{manOfTheMatch}</p>
        <p className="first-innings-heading">Umpires</p>
        <p className="style-venue">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
