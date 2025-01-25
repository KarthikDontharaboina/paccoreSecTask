import React from "react";
import { useSelector } from "react-redux";

const Datashowing = () => {
  const inputsupdate = useSelector((state) => state.updateinput.data);
  const submittedData = inputsupdate?.submittedData;
  const teamData = useSelector((state) => state.TeamReducer.data);

  const tableStyle = {
    width: "90%",
    margin: "20px auto",
    borderCollapse: "collapse",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
  };

  const thStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
    textAlign: "left",
  };

  const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  };

  

  const rowHover = {
    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
    
  };

  return (
    <div className="displayContainer">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Form Data</h2>
      {submittedData ? (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Field</th>
              <th style={thStyle}>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr style={rowHover}>
              <td style={tdStyle}>Full Name</td>
              <td style={tdStyle}>{submittedData.fullnameinput}</td>
            </tr>
            <tr>
              <td style={tdStyle}>Last Name</td>
              <td style={tdStyle}>{submittedData.lastnameinput}</td>
            </tr>
            <tr>
              <td style={tdStyle}>Email</td>
              <td style={tdStyle}>{submittedData.emailinput}</td>
            </tr>
            <tr>
              <td style={tdStyle}>Website</td>
              <td style={tdStyle}>{submittedData.website}</td>
            </tr>
            <tr>
              <td style={tdStyle}>Country Code</td>
              <td style={tdStyle}>{submittedData.cuntrycode}</td>
            </tr>
            <tr>
              <td style={tdStyle}>Phone Number</td>
              <td style={tdStyle}>{submittedData.phonenumeber}</td>
            </tr>
            <tr>
              <td style={tdStyle}>How Can We Help</td>
              <td style={tdStyle}>{submittedData.textarea}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Teams Data</h1>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Field</th>
                <th style={thStyle}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr style={rowHover}>
                <td style={tdStyle}>Team Size</td>
                <td style={tdStyle}>{teamData.teamSize}</td>
              </tr>
              <tr>
                <td style={tdStyle}>Budget</td>
                <td style={tdStyle}>{teamData.budget}</td>
              </tr>
              {teamData.selectedServices.map((item, index) => (
                <tr key={index} style={rowHover}>
                  <td style={tdStyle}>Selected Service {index + 1}</td>
                  <td style={tdStyle}>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Datashowing;
