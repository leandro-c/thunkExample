import React, { Component } from 'react';
import StuffList from './components/stuffList';
import Players from './containers/players/players'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Players/>
            </div>
        );
    }
}

export default App;