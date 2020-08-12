import React from 'react';
import {Container, Row, Col, Media} from 'reactstrap';
import profile from '../profile.json';

class Education extends React.Component {
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
            {profile.studies.map(function (study, i) {
              return <Media key={i}>
                <Row>
                <Media left top href={study.url}>
                  <Media object src={study.logo} alt={study.institute}/>
                </Media>
                </Row>
                <Media body>
                  <Row>
                  <Media heading>
                    <a href={study.url}>{study.institute}</a>
                  </Media>
                  </Row>
                  <Row>
                  {
                    [
                      {
                        "key": "Degree",
                        "value": study.degree
                      },
                      {
                        "key": "Major",
                        "value": study.major
                      },
                      {
                        "key": "Duration",
                        "value": study.startYear + " - " + study.endYear
                      }
                    ].map(function (object, i) {
                      return <div key={i}>
                        <Row>
                          <Col className="formLabel">{object.key}:</Col>
                        </Row>
                        <Row>
                          <Col>{object.value}</Col>
                        </Row>
                      </div>
                    })
                  }
                  </Row>
                  <Row>
                  <div>
                    <Row>
                      <Col className="formLabel">Relavent Courses:</Col>
                    </Row>
                    <Row>
                      <Col>
                        {study.relevantCourses.map(function (course, i) {
                              return <div key={i}>
                              <ul>
                                <li>{course.course}</li>
                              </ul>
                              </div>
                        })}
                      </Col>
                    </Row>
                  </div>
                  </Row>
                </Media>
              </Media>
            })}
          </Col>
        </Row>
      </Container>
    } else {
      return <Container>
        <Row>
          <Col>
            {profile.studies.map(function (study, i) {
              return <Media key={i}>
                <Media left top href={study.url}>
                  <Media object src={study.logo} alt={study.institute}/>
                </Media>
                <Media body>
                  <Media heading>
                    <a href={study.url}>{study.institute}</a>
                  </Media>
                  {
                    [
                      {
                        "key": "Degree",
                        "value": study.degree
                      },
                      {
                        "key": "Major",
                        "value": study.major
                      },
                      {
                        "key": "Duration",
                        "value": study.startYear + " - " + study.endYear
                      }
                    ].map(function (object, i) {
                      return <div key={i}>
                        <Row>
                          <Col className="formLabel">{object.key}:</Col>
                        </Row>
                        <Row>
                          <Col>{object.value}</Col>
                        </Row>
                      </div>
                    })
                  }
                  <div>
                    <Row>
                      <Col className="formLabel">Relavent Courses:</Col>
                    </Row>
                    <Row>
                      <Col>
                        {study.relevantCourses.map(function (course, i) {
                              return <div key={i}>
                              <ul>
                                <li>{course.course}</li>
                              </ul>
                              </div>
                        })}
                      </Col>
                    </Row>
                  </div>
                </Media>
              </Media>
            })}
          </Col>
        </Row>
      </Container>
    }
  }
}

export default Education;
