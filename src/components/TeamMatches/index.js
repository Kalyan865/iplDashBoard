// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {latestMatchDetails: {}, recentMatches: [], url: '', id: ''}

  componentDidMount() {
    this.apiCall2()
  }

  apiCall2 = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    this.setState({
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      url: data.team_banner_url,
      id: params.id,
    })
  }

  render() {
    const {latestMatchDetails, recentMatches, url, id} = this.state
    return (
      <>
        {recentMatches.length === 0 ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`TeamMatchesBgContainer ${id}`}>
            <img className="teamMatchImage" src={url} alt="team banner" />
            <p className="latestMatchHeading">Latest Match</p>
            <LatestMatch latestMatch={latestMatchDetails} />
            <ul className="ulist2">
              {recentMatches.map(item => (
                <MatchCard item={item} key={item.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
