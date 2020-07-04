import React from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <hr/>
        <Container>
          <a href="https://twitter.com/eryous_ye"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.linkedin.com/in/youssef-errami-709266139/"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/eryous"><FontAwesomeIcon icon={faGithub}  /></a>
        </Container>
      </footer>
    )
  }
}

export default Footer;
