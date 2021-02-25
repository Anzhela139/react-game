import React from 'react';

class Footer extends React.Component {
    render() { 
      const theme = this.props.theme;
        return ( 
            <footer className='App-footer' >
            <a
              className="App-link"
              href="https://github.com/anzhelaAbitova"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anzhela Abitova
            </a>
            2021
            <a 
              href="https://rs.school/js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={theme ? 'https://rs.school/images/rs_school_js.svg' : '../rs_school_js_light.svg'} alt=""/>
            </a>
          </footer>
         );
    }
}
 
export default Footer;