import React, { Component } from "react";

class Education extends Component {
  render() {
    return (

      <div>

      <div class="top-page-wrapper">
      
      <div class="row">

        <div class="single-column"><b><i>{this.props.education.etitle}</i></b></div>

        <div class="double-column-g">
          <div class="double-column-g-regline"><b>{this.props.education.euni}</b></div>
          <div class="double-column-g-regline">{this.props.education.em1}</div>
          <div class="double-column-g-regline">{this.props.education.ed1}</div>
          <div class="double-column-g-lastline">{this.props.education.eg1}</div>
          
          <div class="double-column-g-regline"><b>{this.props.education.euni}</b></div>
          <div class="double-column-g-regline">{this.props.education.em2}</div>
          <div class="double-column-g-regline">{this.props.education.ed2}</div>
          <div class="double-column-g-lastline">{this.props.education.eg2}</div>
        </div>

      </div>    
    </div>


      </div>
    );

  }
}

export default Education;