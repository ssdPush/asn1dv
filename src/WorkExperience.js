import React, { Component } from "react";

class WorkExperience extends Component {
  render() {
    return (

      <div>
      <div class="top-page-wrapper">
      <div class="row">

        <div class="single-column"><b><i>{this.props.workExperience.wtitle}</i></b></div>

        <div class="double-column-s">
          <div><b>{this.props.workExperience.wjob1}</b></div>
          <div>{this.props.workExperience.wdesc}</div>
          <div><b>{this.props.workExperience.wjob2}</b></div>
          <div>{this.props.workExperience.wdesc}</div>
        </div>

      </div>    
    </div>



    <hr></hr>
    </div>
    );

  }
}

export default WorkExperience;