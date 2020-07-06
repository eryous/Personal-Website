import React from 'react';
import {Jumbotron, Container, TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";
import classnames from 'classnames';
import Experience from "./Experience";
import Education from './Education';
import PersonalProjects from './PersonalProjects';
import LanguagesAndTechnologies from './LanguagesAndTechnologies';
import profile from '../profile.json';
import profilePic from "../images/profilePic.jpg";
import bg from "../images/jumbotron_bg.jpg"


class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    if(isMobile) {
      return <div key={profile}>
        <Jumbotron style={{ backgroundImage: `url(${bg})`, backgroundSize: '100% 100%'}}>
          <Row>
            <div className="medmobile" style = {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
              <img src={profilePic} className="profile-pic" alt={profile.title}></img>
            </div>
          </Row>
          <br></br>
          <Row>
            <div className="mmobile">
              <h1 className="display-4">{profile.title}</h1>
              <p className="lead">{profile.summary}</p>
            </div>
          </Row>
        </Jumbotron>

        <Container>
          <Nav tabs>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}>
                Experience
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}>
                Education
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                      onClick={() => { this.toggle('3'); }}>
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '4' })}
                      onClick={() => { this.toggle('4'); }}>
                Languages and Technologies
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Experience/>
            </TabPane>
            <TabPane tabId="2">
              <Education/>
            </TabPane>
            <TabPane tabId="3">
              <PersonalProjects/>
            </TabPane>
            <TabPane tabId="4">
              <LanguagesAndTechnologies/>
            </TabPane>
          </TabContent>
        </Container>
      </div>;
    } else {
      return <div key={profile}>
        <Jumbotron style={{ backgroundImage: `url(${bg})`, backgroundSize: '100% 100%'}}>
          <div className="med">
            <img src={profilePic} className="profile-pic" alt={profile.title}></img>
          </div>
          <div className="m">
            <h1 className="display-4">{profile.title}</h1>
            <p className="lead">{profile.summary}</p>
          </div>
        </Jumbotron>

        <Container>
          <Nav tabs>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}>
                Experience
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}>
                Education
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                      onClick={() => { this.toggle('3'); }}>
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '4' })}
                      onClick={() => { this.toggle('4'); }}>
                Languages and Technologies
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Experience/>
            </TabPane>
            <TabPane tabId="2">
              <Education/>
            </TabPane>
            <TabPane tabId="3">
              <PersonalProjects/>
            </TabPane>
            <TabPane tabId="4">
              <LanguagesAndTechnologies/>
            </TabPane>
          </TabContent>
        </Container>
      </div>;
    }
  }
}

export default Profile;
