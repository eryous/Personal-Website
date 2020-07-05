import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../profile";
import { Media, Card, CardImg, CardTitle, CardBody, CardText, CardDeck } from "reactstrap";

class LanguagesAndTechnologies extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
        <br></br>
          {profile.languages.map(function (lang, i) {
            return (
                <CardDeck>
                    <div key={i}>
                        <Card style = {{height: "125px", width: "120px"}}>
                            <span class="border border-info" style = {{height: "125px", width: "120px"}}>
                            <CardImg top embed-responsive-item width="100%" src={lang.logo} alt="Card image cap" style = {{marginTop: "5px", marginLeft: "10px", height: "95px", width: "95px"}}/>
                            <CardBody>
                                <CardTitle card-body align-items-center>{lang.name}</CardTitle>
                            </CardBody>
                            </span>
                        </Card>
                        <br></br>
                    </div>
                </CardDeck>
            );
          })}
        </Col>
      </Row>
    </Container>
  }
}

export default LanguagesAndTechnologies;