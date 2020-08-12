import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import "bootstrap/dist/css/bootstrap.css";
import * as loadData from "../load/7301-loader-animation.json";
import * as doneData from "../load/433-checked-done.json";
import Profile from './Profile';
import Footer from './Footer';
import bg from "../images/jumbotron_bg.jpg"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          this.setState({ loading: true });
          setTimeout(() => {
            this.setState({ done: true });
          }, 1000);
        });
    }, 2000);
  }

  render() {
    return (
      <div key={Profile}>
        {!this.state.done ? (
          <FadeIn>
            <div style = {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: "100vh", backgroundImage: `url(${bg})`, backgroundSize: '100% 100%'}}>
              {!this.state.loading ? (
                <Lottie options={defaultOptions} height={240} width={240} />
              ) : (
                <Lottie options={defaultOptions2} height={240} width={240} />
              )}
            </div>
          </FadeIn>
        ) : (
            [
            <Profile />,
            <Footer />
            ]
        )}
      </div>
    );
  }
}