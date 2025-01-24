import React, { act, useState } from "react";
import "./form.css";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
// import {
//   Fullname,
//   Lastname,
//   Email,
//   WebSiteupdate,
//   Country,
//   PhoneNumber,
//   TextArea,
//   CountineSubmite} from '../store/inputSlice';
import { actions } from "../store/inputSlice";
const Form = () => {
  const [selectedCountry, setSelectedCountry] = useState("US");
   const dispacth =useDispatch();
   const navigate = useNavigate();
   const inputsupdate= useSelector(state => state.updateinput.data);
   console.log("inputsupdate",inputsupdate)

  const countries = [
    { code: "US", dialCode: "+1" },
    { code: "GB", dialCode: "+44" },
    { code: "IN", dialCode: "+91" },
    { code: "DE", dialCode: "+49" },
    { code: "FR", dialCode: "+33" },
    { code: "IT", dialCode: "+39" },
    { code: "AU", dialCode: "+61" },
    { code: "CA", dialCode: "+1" },
    { code: "BR", dialCode: "+55" },
    { code: "JP", dialCode: "+81" }
  ];

  const handleCountryChange = (e) => {
    const selectedCode = e.target.value;
   dispacth(actions.Country(selectedCode));
  };

  const getDialCode = () => {
    const country = countries.find(c => c.code === inputsupdate.cuntrycode);
    return country ? country.dialCode : "+1";
  };

  // const handleInputChanges = (e) => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case "fullnameinput":
  //       dispacth(Fullname(value));
  //       break;
  //     case "lastnameinput":
  //       dispacth(Lastname(value));
  //       break;
  //     case "emailinput":
  //       dispacth(Email(value));
  //       break;
  //     case "website":
  //       dispacth(WebSiteupdate(value));
  //       break;
  //     case "cuntrycode":
  //       dispacth(Country(value));
  //       break;
  //     case "phonenumeber":
  //       dispacth(PhoneNumber(value));
  //       break;
  //     case "textarea":
  //       dispacth(TextArea(value));
  //       break;
  //     default:
  //       break;
  //   }
  // };
  
  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "fullnameinput":
        dispacth(actions.Fullname(value));
        break;
      case "lastnameinput":
        dispacth(actions.Lastname(value));
        break;
      case "emailinput":
        dispacth(actions.Email(value));
        break;
      case "website":
        dispacth(actions.WebSiteupdate(value));
        break;
      case "cuntrycode":
        dispacth(actions.Country(value));
        break;
      case "phonenumeber":
        dispacth(actions.PhoneNumber(value));
        break;
      case "textarea":
        dispacth(actions.TextArea(value));
        break;
      default:
        break;
    }
  };
  
  const handleSubmit=()=>{
    console.log("handleSubmit",inputsupdate)
    dispacth(actions.CountineSubmite(inputsupdate));
    navigate("/data-showing")
  }

  return (
    <div>
      <div className="form-container">
        <div className="form-step">
          <h2>Let's work together</h2>
          <p>
            We're a full-service agency dedicated to helping you go from MVP to
            industry leader. Let our team bring your goals to life.
          </p>
          <form>
            <div className="form-row">
              <div className="input-group" style={{ marginRight: '1rem' }}>
                <label>Full name*</label>
                <input
  type="text"
  placeholder="First name"
  required
  name="fullnameinput"
  value={inputsupdate.fullnameinput || ""}
  onChange={handleInputChanges}
/>
              </div>
              <div className="input-group">
                <label>Last name*</label>
                <input type="text" placeholder="Last name" 
                 name="lastnameinput"
                required 
                value={inputsupdate.lastnameinput || ""}
                onChange={handleInputChanges}
                />
              </div>
            </div>
            <div className="input-group">
              <label>Email*</label>
              <input type="email" placeholder="Email address" required 
               name="emailinput"
                 value={inputsupdate.emailinput || ""}
                 onChange={handleInputChanges}
              />
            </div>
            <div className="input-group">
              <label>Website</label>
              <input type="url" placeholder="Website"
              name="website"
              value={inputsupdate.website || ""}
              onChange={handleInputChanges}
              />
            </div>
            <div className="form-row">
              <div className="input-group">
                <label>Phone number</label>
                <div className="phone-input-wrapper">
                  <select 
                    // value={selectedCountry } 
                    value={inputsupdate.cuntrycode || ""}
                    onChange={handleCountryChange}
                    className="country-select"
                  >
                    {countries.map(country => (
                      <option key={country.code} value={country.code}>
                        {country.code}
                      </option>
                    ))}
                  </select>
                  <input 
                    type="tel" 
                    placeholder={`${getDialCode()} (555) 000-0000`}
                    className="phone-input"
                    name="phonenumeber"
                    value={inputsupdate.phonenumeber || ""}
                    onChange={handleInputChanges} 
                  />
                </div>
              </div>
            </div>
            <div className="input-group">
              <label>How can we help?</label>
              <textarea 
                placeholder="A brief summary of what you need help with, expected timelines, preferred communication method, etc." 
                rows="4"
                 name="textarea"
                value={inputsupdate.textarea || ""}
                onChange={handleInputChanges}
              ></textarea>
            </div>

            <div className="Form-footer">
            <div className="step-indicator">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span>Step 1 of 2</span>
      </div>
              <button type="button" className="continue-btn" onClick={handleSubmit}>Continue</button>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="step-indicator">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span>Step 1 of 2</span>
      </div> */}
    </div>
  );
};

export default Form;
