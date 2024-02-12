import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLogging: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const newData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({
      teamBannerUrl: newData.teamBannerUrl,
      latestMatchDetails: newData.latestMatchDetails,
      recentMatches: newData.recentMatches,
      isLogging: false,
    })
  }

  render() {
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLogging,
    } = this.state

    return (
      <div className="team-matches-container">
        {isLogging ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches=content">
            <img
              className="style-banner"
              src={teamBannerUrl}
              alt="team banner"
            />
            <h1 className="latest-matches-heading">Latest Matches</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="match-card-container">
              {recentMatches.map(matchCard => (
                <MatchCard matchCard={matchCard} key={matchCard.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches

//   {recentMatches.length !== 0 && (
//     <ul>
//       {newRecentMatches.map(matchCard => (
//         <MatchCard matchCard={matchCard} />
//       ))}
//     </ul>
//   )}

// if (recentMatches.length !== 0) {
//   newRecentMatches = recentMatches.map(eachMatch => ({
//     competingTeamLogo: eachMatch.competing_team_logo,
//     competingTeam: eachMatch.competing_team,
//     result: eachMatch.result,
//     matchStatus: eachMatch.match_status,
//   }))
// }
