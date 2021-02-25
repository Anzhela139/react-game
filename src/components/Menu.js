import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import bxMoon from '@iconify/icons-bx/bx-moon';

const modalStyles = {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'height': '100vh',
    'width': '100%',
};

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            canShow: this.props.canShow,
         }
    }

    handleSave = () => {

    }

    handleNew = () => {

    }

    handleResume = () => {

    }

    static getDerivedStateFromProps(props, state) {
        if (props.canShow !== state.canShow) {
          return ({ canShow: props.canShow })
        }
        return null
    }

    handleChange = (event) => {
        this.setState({size: Number(event.target.value)});
    }

    render() { 
        const { handleMenu, handleToggle, handleSize, font } = this.props;
        if (this.state.canShow.canShow) {
            return ( 
                <div className="wrapper-menu" style={modalStyles}>
                    <div className="screen">
                        <select name="board-size" id="board-size" onChange={handleSize}>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <div className="switch_toggle">
                            <input id='switch_toggle' type="checkbox" name="toggle" className="switch_toggle-input" onChange={handleToggle} />
                            <label id='switch_toggle-label' htmlFor="switch_toggle" style={(font === 'cross') ? {paddingRight: '1rem'} : {paddingRight: '1rem'}}>{(font === 'cross') ? 'X' : <Icon icon={bxMoon} style={{color: '#f6f6f6', fontSize: '42px'}} />}</label>
                        </div>
                        <div className="btn_wrapper">
                            <button className='btn btn-secondary' onClick={this.handleSave}>Save game</button>
                            <button className='btn btn-secondary' onClick={this.handleNew}>New game</button>
                            <button className='btn btn-secondary' onClick={this.handleResume}>Resume game</button>
                        </div>
                    </div>
                    <div className="fade" onClick={handleMenu}></div>
                </div>
             );
        } else {
            return null;
        }
        }
}
 
export default Menu;