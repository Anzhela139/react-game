import React from 'react'

class Footer extends React.Component {
  render() {
    const theme = this.props.theme
    return (
      <footer className="App-footer">
        <a
          className="App-link"
          href="https://github.com/Anzhela139"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anzhela Dev
        </a>
        2024
      </footer>
    )
  }
}

export default Footer