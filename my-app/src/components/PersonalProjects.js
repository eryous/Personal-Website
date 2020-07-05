import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../profile";
import { Media } from "reactstrap";

class PersonalProjects extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          {profile.personalProjects.map(function (project, i) {
            return (
              <div key={i}>
                <Media>
                  <Media left top href={project.url}>
                    <img src={project.logo}/>
                  </Media>
                  <Media body>
                    <Media heading>
                      <a href={project.url}>{project.companyName}</a>
                    </Media>
                        <h5><a href={project.url}>{project.projectName}</a></h5>
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

export default PersonalProjects;