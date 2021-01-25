import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    // React says we have to define Render
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat} </div>
        }

        if (!this.errorMessage && !this.state.lat) {
            return <div>Please wait while we fetch your location</div>
        }
    }
}


ReactDOM.render(
    <App />, document.querySelector('#root')
);