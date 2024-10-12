import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (

      <div>

<div class="top-page-wrapper">
      <div class="row">

        <div class="single-column"><b><i>{this.props.skills.stitle}</i></b></div>

        <div class="double-column">
          
          
          <div class="skill-container">
            <div class="skill-lister">
              <div>
              {this.props.skills.sdesc}
              </div>
              <div>
              {this.props.skills.sdesc}
              </div>
              <div>
              {this.props.skills.sdesc}
              </div>
            </div>

            <div class="skill-lister">
              <div>
              {this.props.skills.sdesc}
              </div>
              <div>
              {this.props.skills.sdesc}
              </div>
              <div>
              {this.props.skills.sdesc}
              </div>
            </div>

            <div class="skill-lister">
              <div>
              {this.props.skills.sdesc}
              </div>
              <div>
              {this.props.skills.sdesc}
              </div>
              <div>
              {this.props.skills.sdesc}
              </div>
            </div>
          </div>


        </div>

        


      

      </div>    
    </div>




    
    <hr></hr>



      </div>
    );

  }
}

export default Skills;