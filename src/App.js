import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Home from './components/layout/Home';
import Login from './components/layout/Login';
import JoinUs from './joint/JointUs';
import { Provider } from 'react-redux';
import store from './store/Index'

class App extends Component {
  render(){
    return(
      <Provider store={store}>
      <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/JoinUs" exact component={JoinUs}/>
          </div>
        </Router>
      </Provider>
      // <Provider store = {store}>
      //   <Home />
      // </Provider>
    );
  }
}

export default App;