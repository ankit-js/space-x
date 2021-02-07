import React from "react";
import { Link } from "react-router-dom";
import Loader from 'react-loader-spinner';

const MissionInfo = ({ missions, loading }) => {
  const maxTitleLength = 10;
  return (
    <>
      {missions && missions.length && !loading ? (
        missions.map((data) => {
          let missionTitle =
            data.mission_name.length > maxTitleLength
              ? `${data.mission_name.substring(0, maxTitleLength)}...`
              : data.mission_name;
          return (
            <div className="column" key={data.flight_number}>
              <div className="card">
                <div className="cardImage">
                  <img
                    src="https://cdn.arstechnica.net/wp-content/uploads/2018/07/Rocket-Report-Intro-3-800x450.jpg"
                    alt="rocket images"
                  />
                </div>
                <div className="cardContent">
                  <Link to="#" className="cardTitle" title={data.mission_name}>
                    {`${missionTitle} #${data.flight_number}`}
                  </Link>
                  <ul className="contentList">
                    <li className="missionIdWrap">
                      <span className="title">Mission Ids </span>
                      {
                        data.mission_id.length ? <ul className="missionIdList">
                        {data.mission_id.map((mission) => (
                          <li key={mission}>
                            <span className="circle"></span>
                            <span className="content">{mission}</span>
                          </li>
                        ))}
                      </ul> : null
                      }
                    </li>
                    <li>
                      <span className="title">Launch Year </span>
                      <span className="content">{data.launch_year}</span>
                    </li>
                    <li>
                      <span className="title">successful Launch </span>
                      <span className="content">{`${data.launch_success}`}</span>
                    </li>
                    <li>
                      <span className="title">successful Landing </span>
                      <span className="content">
                        {`${data["rocket"]["first_stage"]["cores"][0].land_success !== null ? data["rocket"]["first_stage"]["cores"][0].land_success : 'No Data' }`}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })
      ) : missions && missions.length == 0 ? (
        <h3 className="emptyMission">No missions found</h3>
      ) : (
        <Loader
          type="TailSpin"
          color="grey"
          height={50}
          width={50}
          className="loader"
        />
      )}
    </>
  );
};

export default MissionInfo;
