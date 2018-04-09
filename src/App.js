import React, { Component } from 'react';
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import HomePage from './components/pages/homePage'

import './assets/css/default.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        Test

        <Header />

        Body
        <HomePage />
        Ba ba Black sheep

        <Footer />
      </div>
    );
  }
}

export default App;
