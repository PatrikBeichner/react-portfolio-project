import React, { Component } from 'react';
//import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/HomeComponent';
import Header from './components/HeaderComponent';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {
    render() {
        return (
            // <React.Fragment>
            //     <Header />
            //     <Home />
            // </React.Fragment>
            <BrowserRouter>
                 <div className="App">
                     <Main />
                 </div>
            </BrowserRouter>
        );
    }
}

export default App;
