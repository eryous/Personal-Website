import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../profile";
import { Card, CardImg, CardTitle, CardBody, CardDeck } from "reactstrap";

class LanguagesAndTechnologies extends React.Component {
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
        <br></br>
        <Row>
          <h2 style={{textAlign: "center", fontSize: "30px", display: "block"}}>
            <a>Languages</a>
          </h2>
          </Row>
          <br></br>
          <Row>
          <CardDeck style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
          {profile.languages.map(function (lang, i) {
                return (
                      <div key={i}>
                          <Card style = {{height: "150px", width: "120px", marginLeft: "auto", marginRight: "auto"}}>
                              <span className="border border-info" style = {{height: "150px", width: "120px"}}>
                              <CardImg top width="100%" src={lang.logo} alt="Card image cap" style = {{marginTop: "5px", marginLeft: "10px", height: "95px", width: "95px"}}/>
                              <CardBody>
                                  <CardTitle style = {{fontSize: "14px"}}>{lang.name}</CardTitle>
                              </CardBody>
                              </span>
                          </Card>
                          <br></br>
                      </div>
                );
              })}
          </CardDeck>
          <Col>
          <br></br>
          </Col>
        </Row>
        <br></br>
        <Row>
          <h2 style={{textAlign: "center", fontSize: "30px", display: "block"}}>
            <a>Technologies</a>
          </h2>
          </Row>
          <br></br>
          <Row>
          <CardDeck style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
          {profile.technologies.map(function (tech, i) {
                return (
                      <div key={i}>
                          <Card style = {{height: "150px", width: "120px"}}>
                              <span className="border border-info" style = {{height: "150px", width: "120px"}}>
                              <CardImg top width="100%" src={tech.logo} alt="Card image cap" style = {{marginTop: "5px", marginLeft: "10px", height: "95px", width: "95px"}}/>
                              <CardBody>
                                  <CardTitle style = {{fontSize: "14px"}}>{tech.name}</CardTitle>
                              </CardBody>
                              </span>
                          </Card>
                          <br></br>
                      </div>
                );
              })}
          </CardDeck>
          <Col>
          <br></br>
          </Col>
        </Row>
      </Container>
    } else {
      return <Container>
        <br></br>
        <Row>
          <h2 style={{textAlign: "center", fontSize: "30px", display: "block"}}>
            <a>Languages</a>
          </h2>
          </Row>
          <br></br>
          <Row>
          <CardDeck style={{marginLeft: "auto", marginRight: "auto"}}>
          {profile.languages.map(function (lang, i) {
                return (
                      <div key={i}>
                          <Card style = {{height: "150px", width: "120px"}}>
                              <span className="border border-info" style = {{height: "150px", width: "120px"}}>
                              <CardImg top width="100%" src={lang.logo} alt="Card image cap" style = {{marginTop: "5px", marginLeft: "10px", height: "95px", width: "95px"}}/>
                              <CardBody>
                                  <CardTitle style = {{fontSize: "14px"}}>{lang.name}</CardTitle>
                              </CardBody>
                              </span>
                          </Card>
                          <br></br>
                      </div>
                );
              })}
          </CardDeck>
          <Col>
          <br></br>
          </Col>
        </Row>
        <br></br>
        <Row>
          <h2 style={{textAlign: "center", fontSize: "30px", display: "block"}}>
            <a>Technologies</a>
          </h2>
          </Row>
          <br></br>
          <Row>
          <CardDeck style={{marginLeft: "auto", marginRight: "auto"}}>
          {profile.technologies.map(function (tech, i) {
                return (
                      <div key={i}>
                          <Card style = {{height: "150px", width: "120px"}}>
                              <span className="border border-info" style = {{height: "150px", width: "120px"}}>
                              <CardImg top width="100%" src={tech.logo} alt="Card image cap" style = {{marginTop: "5px", marginLeft: "10px", height: "95px", width: "95px"}}/>
                              <CardBody>
                                  <CardTitle style = {{fontSize: "14px"}}>{tech.name}</CardTitle>
                              </CardBody>
                              </span>
                          </Card>
                          <br></br>
                      </div>
                );
              })}
          </CardDeck>
          <Col>
          <br></br>
          </Col>
        </Row>
      </Container>
    }
  }
}

export default LanguagesAndTechnologies;