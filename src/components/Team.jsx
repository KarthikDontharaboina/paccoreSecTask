import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BiWindow,
  BiPencil,
  BiMobile,
  BiCode,
  BiSearch,
  BiFile,
  BiChart,
  BiSearchAlt,
  BiStar
} from 'react-icons/bi';
import './Team.css';

import { TeamActions } from "../store/TeamSlice";
import {useNavigate} from "react-router-dom";
// import {TeamActions}


const Team = () => {
  const selectedData = useSelector(state => state.TeamReducer.data);
  console.log("selectedData", selectedData)
  const dispatch = useDispatch();
  const [teamSize, setTeamSize] = useState(15);
  const [budget, setBudget] = useState(3000);
  const [selectedServices, setSelectedServices] = useState([]);
  const navigate = useNavigate();

  const services = [
    { id: 1, name: 'Web Design', icon: <BiWindow /> },
    { id: 2, name: 'UI/UX Design', icon: <BiPencil /> },
    { id: 3, name: 'App Design', icon: <BiMobile /> },
    { id: 4, name: 'Development', icon: <BiCode /> },
    { id: 5, name: 'Technical SEO', icon: <BiSearch /> },
    { id: 6, name: 'Content Writing', icon: <BiFile /> },
    { id: 7, name: 'Strategy', icon: <BiChart /> },
    { id: 8, name: 'Research', icon: <BiSearchAlt /> }
  ];

  const handleServiceSelect = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      dispatch(TeamActions.filterRed(serviceId));
    } else {
      dispatch(TeamActions.selectedDataRed(serviceId));
      // selectedData.selectedServices([...selectedServices, serviceId])
      // setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const handleSubmit=()=>{
    console.log("handleSubmit",selectedData)
    dispatch(TeamActions.CountineSubmite(selectedData));
    navigate("/data-showing")
   
  }

  return (
    <div className="team-form-wrapper">
      <div className="team-form-container">
        <div className="team-form-step">
          <h2 className="team-heading">Let's work together</h2>
          <p className="team-description">
            We're a full-service agency dedicated to helping you go from MVP to
            industry leader. Let our team bring your goals to life.
          </p>

          <div className="team-form">
            <div className="team-range-group">
              <label className="team-range-label">Team size*</label>
              <div className="team-range-container">
                <input
                  type="range"
                  min="10"
                  max="20"
                  value={selectedData.teamSize}
                  // onChange={(e) => dispacth((e.target.value)}
                  onChange={(e) => dispatch(TeamActions.teamSizeRed(e.target.value))}
                  className="team-range-input"
                />
                <span className="team-range-value">{selectedData.teamSize} - 20 people</span>
              </div>
            </div>

            <div className="team-range-group">
              <label className="team-range-label">Budget*</label>
              <div className="team-range-container">
                <input
                  type="range"
                  min="1000"
                  max="5000"
                  step="100"
                  value={selectedData.budget}
                  onChange={(e) => dispatch(TeamActions.budgetRed(e.target.value))}
                  className="team-range-input"
                />
                <span className="team-range-value">${selectedData.budget} - $5,000 USD</span>
              </div>
            </div>

            <div className="services-section">
              <h5>What do you need help with?*</h5>
              <div className="services-grid">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`service-card ${selectedData.selectedServices.includes(service.name) ? 'selected' : ''}`}
                    onClick={() => handleServiceSelect(service.name)}
                  >
                    <span className="service-icon">{service.icon}</span>
                    <span className="service-name">{service.name}</span>
                  </div>
                ))}
              </div>

              <div
                className={`service-card other-card ${selectedServices.includes(9) ? 'selected' : ''}`}
                onClick={() => handleServiceSelect("Other")}
              >
                <span className="service-icon"><BiStar /></span>
                <span className="service-name">Other</span>
              </div>

              <div className="footer">
                <div className="step-indicator">
                  <span className="dot"></span>
                  <span className="dot active"></span>
                  <span>Step 1 of 2</span>
                </div>
                <button type="button" className="continue-btn" onClick={handleSubmit}>Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;