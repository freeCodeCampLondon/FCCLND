import React, {Component} from 'react';
import Header from '../components/Header';

import SkillsMatterLogo from '../assets/images/skills-matter-logo.png';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        fbText: '',
        skillsMatterText: ''
      }
    };
  }
  render() {
    const {data} = this.state;
    const intro = (
      <div>
        <p>We are a local group for
          <a href="https://freecodecamp.com" target="_blank" rel="noopener noreferrer">
            freeCodeCamp
          </a>
          : an open source community that helps you learn to code.
        </p>
        <p>
          We are open to anyone who wants to learn with freeCodeCamp which currently focuses on full stack JavaScript development.
        </p>
        <p>We organise regular meetups to encourage and support each other through the freeCodeCamp curriculum.</p>
      </div>
    );

    return (
      <div>
        <Header/>
        <div className="jumbotron clearfix" id="main">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              {intro}
              <p>{data.fbText}</p>
              <p>{data.skillsMatterText}</p>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <img src={SkillsMatterLogo} alt="Skills Matter logo"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Main.propTypes = {
//   data: PropTypes.object.isRequired
// };

export default Main;
