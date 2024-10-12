import React, { Component } from 'react';
import "./App.css";
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personInfo:{
        name: "Zh Rimel",
        occupation: "Data Scientist"
      },
      contactInfo: {
        email: "abc@gmail.com",
        web: "abc.github.io/abc",
        mobile: "01234567890"
      },
      personalProfile: {
        ptitle: "Personal Profile",
        pbody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      workExperience: {
        wtitle: "Work Experience",
        wjob1: "Job Title at Company (August 2022 – December 2023)",
        wjob2: "Job Title 2 at Company 2 (August 2020 – December 2021)",
        wdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

      },
      skills: {
        stitle: "Key Skills",
        sdesc: "A Key Skill"
      },
      education: {
        etitle: "Education",
        euni: "New Jersey Institute of Technology",
        em1: "BS in Computer Science",
        em2: "MS in Data Science",
        ed1: "2018-2022",
        ed2: "2022-2023",
        eg1: "GPA: 3.9",
        eg2: "GPA: 4.0"
      }

    }
  }
  render() {
    return (
      <div>
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo}></Header>
        <PersonalProfile personalProfile={this.state.personalProfile}></PersonalProfile>
        <WorkExperience workExperience={this.state.workExperience}></WorkExperience>
        <Skills skills={this.state.skills}></Skills>
        <Education education={this.state.education}></Education>
      </div>
    );
  }
}
export default App;