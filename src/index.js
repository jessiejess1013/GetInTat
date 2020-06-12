import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Profile from "../src/Page-Artist/Profile";
import AllArtist from "../src/Page-Artist/AllArtist";
import * as serviceWorker from "./serviceWorker";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}
export default ScrollToTop;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <ScrollToTop>
        <Route exact path="/" component={App} />
        <Route path="/profile" component={Profile} />
        <Route path="/allartist" component={AllArtist} />
      </ScrollToTop>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
