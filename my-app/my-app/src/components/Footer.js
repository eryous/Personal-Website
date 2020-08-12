import React from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <hr/>
        <Container>
          <a href="https://twitter.com/eryous_ye"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.linkedin.com/in/youssef-errami-709266139/"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/eryous"><FontAwesomeIcon icon={faGithub}  /></a>
          <a href="mailto:ye.eryous@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
        </Container>
      </footer>
    )
  }
}

export default Footer;
