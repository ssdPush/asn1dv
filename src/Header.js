import React, { Component } from "react";

class Header extends Component {
  render() {
    return (

        <div>
        <div class="top-container">
        <div>
          <div class="nameline"><b>{this.props.personInfo.name}</b> 
          <div class="careerline">{this.props.personInfo.occupation}</div>
        </div>
        </div>
        <div> 
          <div class="detailline"> Email: {this.props.contactInfo.email}</div> 
          <div class="detailline"> Web: {this.props.contactInfo.web} </div>
          <div class="detailline"> Mobile: {this.props.contactInfo.mobile}</div>
       </div> 
      </div>
  
      <div class="yellowborder">
        <hr></hr>
      </div>
      </div>
    );

  }
}

export default Header;