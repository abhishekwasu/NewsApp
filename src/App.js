import Navbar from "./componenets/Navbar";
import "./App.css";
import News from "./componenets/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { Component } from "react";

export class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  pageSize = 6;
  // apiKey = process.env.NEWS_API;
  apiKey = "23e9599549024e49bb57e20ec4aac303";
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="business"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"business"}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"entertainment"}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="health"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"health"}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="science"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"science"}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="sports"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"sports"}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="technology"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"technology"}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
