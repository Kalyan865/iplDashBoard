// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {itemsList: [], notFetchStatus: true}

  componentDidMount() {
    this.apiCall()
  }

  apiCall = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const freshData = teams.map(item => ({
      id: item.id,
      name: item.name,
      teamImageUrl: item.team_image_url,
    }))
    this.setState({itemsList: freshData, notFetchStatus: false})
  }

  render() {
    const {itemsList, notFetchStatus} = this.state

    return (
      <div className="bg2">
        {notFetchStatus ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="titleLogoContainer">
              <img
                className="titleLogo"
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              />
              <h1 className="titleName">IPL Dashboard</h1>
            </div>
            <ul className="ulistContainer">
              {itemsList.map(item => (
                <TeamCard item={item} key={item.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
