import React, { Component } from "react";
import Sidebar from "../../components/noMatch/sidebar/Sidebar";
import MissionsInfoComponent from "../../components/noMatch/missionInfo/MissionInfo";
import { fetchInitialLaunchData, fetchSpaceXLaunchesFilteredData } from '../../service/service'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      activeYear: "",
      launch_success: "",
      land_success: "",
    };
  }
  
  componentDidMount() {
    fetchInitialLaunchData().then(response => {
      if(response && Array.isArray(response)) {
        this.setState({ loading: false, missions: response })
      }
    })
  }

  _handleFilters = (type, value) => {
    if (this.state[type] !== '' && this.state[type] === value) {
      this.setState({ [type]: '', loading: true }, () => {
        this.fetchFilteredData()
      })
    } else {
      this.setState({ [type]: value, loading: true }, () => {
        this.fetchFilteredData()
      })
    }
  }
  
  fetchFilteredData = () => {
    const { launch_success, land_success, activeYear } = this.state
    fetchSpaceXLaunchesFilteredData(launch_success, land_success, activeYear).then(response => {
      if(response && Array.isArray(response)) {
        this.setState({ loading: false, missions: response })
      }
    })
  }

  render() {
    const {
      loading,
      missions,
      activeYear,
      launch_success,
      land_success,
    } = this.state;
    return (
      <div className="container">
        <header>
          <h1 className="mainHeading">spaceX launch programs</h1>
        </header>
        <div className="mainWrapper">
          <Sidebar
            _handleFilters={this._handleFilters}
            activeYear={activeYear}
            launch_success={launch_success}
            land_success={land_success}
          />
          <section className="missionWrapper">
            <MissionsInfoComponent missions={missions} loading={loading} />
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
