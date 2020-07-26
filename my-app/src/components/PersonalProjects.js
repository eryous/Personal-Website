import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../profile";
import { Media } from "reactstrap";

class PersonalProjects extends React.Component {
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
    if (isMobile){
      return <Container>
        <Row>
          <Col>
            {profile.personalProjects.map(function (project, i) {
              return (
                <div key={i}>
                  <Media>
                    <Row>
                    <Media left top href={project.url}>
                      <img src={project.logo} alt={project.projectName}/>
                    </Media>
                    </Row>
                    <Row>
                    <Media body>
                      <Media heading>
                        <a href={project.url}>{project.projectName}</a>
                      </Media>
                      <hr></hr>
                          {/* <h5><a href={project.url}>{project.projectName}</a></h5> */}
                          <p className="jobDescription">{project.description}</p>
                    </Media>
                    </Row>
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
            {profile.personalProjects.map(function (project, i) {
              return (
                <div key={i}>
                  <Media>
                    <Media left top href={project.url}>
                      <img src={project.logo} alt={project.projectName}/>
                    </Media>
                    <Media body>
                      <Media heading>
                        <a href={project.url}>{project.projectName}</a>
                      </Media>
                        <p className="jobDescription">{project.description}</p>
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

export default PersonalProjects;