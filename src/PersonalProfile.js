import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (

      <div>
      <div class="top-page-wrapper">

      <div class="row">


        <div class="single-column"><b><i>{this.props.personalProfile.ptitle}</i></b></div>

        <div class="double-column">{this.props.personalProfile.pbody}</div>

      </div>
      </div>    

      <hr></hr>

       </div>
    );

  }
}

export default PersonalProfile;