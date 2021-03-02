import React from 'react';

class Keys extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { handleKeys } = this.props;
        return ( 
            <div className="wrapper-keys">
                <div className="screen">
                    <h2>Hot keys</h2>
                    <ul>
                        <li>Key 'm' - open and closes menu.</li>
                        <li>Key '3' - change the size of the board to 3.</li>
                        <li>Key '4' - change the size of the board to 4.</li>
                        <li>Key '5' - change the size of the board to 5.</li>
                        <li>Key '6' - change the size of the board to 6.</li>
                        <li>Key 'c' - change font of the game to crosses or icons.</li>
                    </ul>
                </div>
                <div className="fade" onClick={handleKeys}></div>
            </div> 
        );
    }
}
 
export default Keys;