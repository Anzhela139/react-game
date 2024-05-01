import React from 'react'

function Settings(props) {
    return (
        <div className="wrapper">
            <div>
                Select board size
                <select name="board-size" id="board-size" onChange={props.handleSize}>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>

            <div className="switch_toggle">
                Toggle crosses or icons
                <input
                    id="switch_toggle"
                    type="checkbox"
                    name="toggle"
                    className="switch_toggle-input"
                    onChange={props.handleToggle}
                />
                <label
                    id="switch_toggle-label"
                    htmlFor="switch_toggle"
                    style={
                        props.font === 'cross' ? { paddingRight: '1rem' } : { paddingRight: '3.5rem' }
                    }
                >
                    {props.font === 'cross' ? (
                        'X'
                    ) : (
                        <Icon path={mdiImageOutline} size={2} />
                    )}
                </label>
            </div>
            <div>
                Toggle mode
                <Icon
                    path={mdiWeatherNight}
                    size={2}
                    onClick={props.handleTheme}
                />
            </div>
            <div>
                Login
                <Icon path={mdiAccountCircleOutline} size={2} onClick={handleLogin} />

            </div>
        </div>
    )
}

export default Settings