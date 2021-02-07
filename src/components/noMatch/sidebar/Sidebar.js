import React from "react";
import { yearFilterData } from "../../../utils/meta"

const SideBarComponent = ({
  _handleFilters,
  activeYear,
  land_success,
  launch_success,
}) => (
  <aside className="sidebar">
    <h2>Filters</h2>
    <div className="sidebarContent">
      <div className="sidebarTitle">Launch Year</div>
      <ul className="sidebarList">
        {
          yearFilterData.map((yearFilter) => {
            return (
              <li key={yearFilter.id}>
                {
                  yearFilter.child.map(data => {
                    return (
                      <span
                        key={data.id}
                        onClick={() => _handleFilters("activeYear", data.value)}
                        className={activeYear === data.value ? "active" : ""}
                      >
                        {data.title}
                      </span>
                    )
                  })
                }
              </li>
            )
          })
        }
      </ul>
      <div className="sidebarTitle">Successful Launch</div>
      <ul className="sidebarList">
        <li>
          <span
            onClick={() => _handleFilters("launch_success", true)}
            className={launch_success === true ? "active" : ""}
          >
            True
          </span>
          <span
            onClick={() => _handleFilters("launch_success", false)}
            className={launch_success === false ? "active" : ""}
          >
            False
          </span>
        </li>
      </ul>
      <div className="sidebarTitle">Successful Landing</div>
      <ul className="sidebarList">
        <li>
          <span
            onClick={() => _handleFilters("land_success", true)}
            className={land_success === true ? "active" : ""}
          >
            True
          </span>
          <span
            onClick={() => _handleFilters("land_success", null)}
            className={land_success === null ? "active" : ""}
          >
            False
          </span>
        </li>
      </ul>
    </div>
  </aside>
);

export default SideBarComponent;
