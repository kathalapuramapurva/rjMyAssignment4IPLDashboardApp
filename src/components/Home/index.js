import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLogging: true,
  }

  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedTeamsList = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsList: updatedTeamsList, isLogging: false})
  }

  render() {
    const {teamsList, isLogging} = this.state
    return (
      <div className="main-container">
        {isLogging ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="content-container">
            <div className="logo-container">
              <img
                className="style-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="style-ipl-heading">IPL Dashboard</h1>
            </div>

            <ul className="team-cards-container">
              {teamsList.map(teamCard => (
                <TeamCard teamCard={teamCard} key={teamCard.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
