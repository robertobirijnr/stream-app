import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "../components/pages/StreamCreate";
import StreamList from "../components/pages/StreamList";
import StreamEdit from "../components/pages/StreamEdit";
import StreamDelete from "../components/pages/StreamDelete";
import StreamShow from "../components/pages/StreamShow";
import Header from "../components/Header";
import history from "../history";

class App extends Component {
 
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={StreamList} />
              <Route path="/streams/new" exact component={StreamCreate} />
              <Route path="/streams/edit/:id" exact component={StreamEdit} />
              <Route
                path="/streams/delete/:id"
                exact
                component={StreamDelete}
              />
              <Route path="/streams/:id" exact component={StreamShow} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
