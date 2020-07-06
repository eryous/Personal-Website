import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../profile";
import moment from "moment";
import { Media } from "reactstrap";

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
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

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return <Container>
        <Row>
          <Col>
            {profile.experiences.map(function (experience, i) {
              return (
                <div key={i}>
                  <Media>
                    <Row>
                    <Media left top href={experience.url}>
                      <Media object src={experience.logo} alt={experience.companyName}/>
                    </Media>
                    </Row>
                    <br></br>
                    <Media body>
                      <Row>
                      <Media heading>
                        <a href={experience.url}>{experience.companyName}</a>
                      </Media>
                      </Row>
                      <hr></hr>
                      <Row>
                      {experience.roles.map(function (role, i) {
                        const startDate = moment(role.startDate);
                        const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
                        return <div key={i}>
                          <h5><a href={role.link}>{role.title}</a></h5>
                          <span
                            className="jobDuration">{startDate.format('MMM YYYY')} - {role.currentJob ? 'Present' : timeEnd.format('MMM YYYY')}</span>
                          <span className="jobLocation">{role.location}</span>
                          <p className="jobDescription">{role.description}</p>
                        </div>
                      })}
                      </Row>
                    </Media>
                  </Media>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    } else {
      return <Container>
        <Row>
          <Col>
            {profile.experiences.map(function (experience, i) {
              return (
                <div key={i}>
                  <Media>
                    <Media left top href={experience.url}>
                      <Media object src={experience.logo} alt={experience.companyName}/>
                    </Media>
                    <Media body>
                      <Media heading>
                        <a href={experience.url}>{experience.companyName}</a>
                      </Media>
                      <hr></hr>
                      {experience.roles.map(function (role, i) {
                        const startDate = moment(role.startDate);
                        const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
                        return <div key={i}>
                          <h5><a href={role.link}>{role.title}</a></h5>
                          <span
                            className="jobDuration">{startDate.format('MMM YYYY')} - {role.currentJob ? 'Present' : timeEnd.format('MMM YYYY')}</span>
                          <span className="jobLocation">{role.location}</span>
                          <p className="jobDescription">{role.description}</p>
                        </div>
                      })}
                    </Media>
                  </Media>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    }
  }
}

export default Experience;
