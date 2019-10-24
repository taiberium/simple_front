import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {version: ''};
    }
    componentDidMount() {
        axios.get('getVersion')
            .then((data, err) => {
                console.log(data);
                this.setState({...data.data});
                if (err) {
                    console.error(err);
                }
            });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        app version {this.state.version}
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
