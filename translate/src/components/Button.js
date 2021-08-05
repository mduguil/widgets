import React from 'react'
import LanguageContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContext'

class Button extends React.Component {
  static contextType = LanguageContext

  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen'
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <ColorContext.Consumer>
      {value => this.renderButton(value)}
      </ColorContext.Consumer>
    )
  }
}

export default Button
