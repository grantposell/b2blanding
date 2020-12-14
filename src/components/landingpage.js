import { faUnderline } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';


class Landing extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'black', height: '400px', }}>
                <h3 style={{ color: 'white', margin: 0, textAlign: 'center', textDecoration: 'underline', paddingTop: '30px' }}>Coming 2021 </h3><br />
                <p style={{ color: 'white', textAlign: 'center', textDecoration: 'bold',}}>One App to manage all procurement</p>

            </div>
        )
    }
}
export default Landing;