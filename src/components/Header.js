import React from 'react';
import { render } from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <header className="top">
                <h1>Catch
                    <span className="ofThe">
                        <div className="of">of</div>
                        <div className="the">the</div>
                    </span>
                      Day
                </h1>
                <h3 className="tagline">
                    <span>Fresh Daily</span>
                </h3>
            </header>
        )
    }
}

export default Header;