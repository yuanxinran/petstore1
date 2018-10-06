import React, { Component } from "react";
import "./App.css";
import Browse from "./Views/browse";
import Detail from "./Views/detail";
import Navbar from "./Components/navbar.jsx";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navbar />
        <div class="mainContainer">
          <BrowserRouter>
            <div>
              <Route
                exact={true}
                path="/browse"
                render={() => (
                  <div className="App">
                    <Browse />
                  </div>
                )}
              />
              <Route
                exact={true}
                path="/detail"
                render={() => (
                  <div className="App">
                    <Detail />
                  </div>
                )}
              />
            </div>
          </BrowserRouter>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
