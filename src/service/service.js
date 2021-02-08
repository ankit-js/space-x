import fetch from "isomorphic-fetch";

export const fetchSpaceXLaunchesFilteredData = (launch = "", land = "", year = "") => {
  let apiEndPoints = "";
  apiEndPoints = encodeURI(
    `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${land}&launch_year=${year}`
  );

  return fetch(apiEndPoints)
    .then((data) => data.json())
    .then((repos) => repos)
    .catch((error) => {
      console.warn(error);
      return null;
    });
}


export const fetchInitialLaunchData = () => {
  let apiEndPoints = "";
  apiEndPoints = encodeURI(
    `https://api.spaceXdata.com/v3/launches?limit=100`
  );

  return fetch(apiEndPoints)
    .then((data) => data.json())
    .then((repos) => repos)
    .catch((error) => {
      console.warn(error);
      return null;
    });
}