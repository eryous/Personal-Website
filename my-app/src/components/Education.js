import React from 'react';
import {Container, Row, Col, Media} from 'reactstrap';
import moment from 'moment';
import profile from '../profile.json';

class Education extends React.Component {
  render() {
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
                      "key": "Title",
                      "value": study.title
                    },
                    {
                      "key": "Duration",
                      "value": study.startYear + " - " + study.endYear
                    }
                  ].map(function (object, i) {
                    return <div>
                      <Row>
                        <Col className="formLabel">{object.key}:</Col>
                      </Row>
                      <Row>
                        <Col>{object.value}</Col>
                      </Row>
                    </div>
                  })
                }
              </Media>
            </Media>
          })}
        </Col>
      </Row>
    </Container>
  }
}

export default Education;
