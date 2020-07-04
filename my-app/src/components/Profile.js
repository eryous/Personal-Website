import React from 'react';
import {Jumbotron, Container, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';
import Experience from "./Experience";
import Education from './Education'
import profile from '../profile.json'
import profilePic from "../images/profilePic.jpg"


class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return <div>
      <Jumbotron>
        <div class="media">
          <img class="mr-3" src={profilePic} className="profile-pic"></img>
          <div class="media-body">
            <h1 className="display-4">{profile.title}</h1>
            <p className="lead">{profile.summary}</p>
          </div>
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
              Personal Projects
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
          {/* <TabPane tabId="3">
            <PersonalProjects/>
          </TabPane>
          <TabPane tabId="4">
            <LanguagesAndTechnologies/>
          </TabPane> */}
        </TabContent>
      </Container>
    </div>;
  }
}

export default Profile;
