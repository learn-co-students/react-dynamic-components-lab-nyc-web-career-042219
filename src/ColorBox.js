
import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const lowerOpacity = this.props.opacity - .1

    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={lowerOpacity}/>
        </div>
      )
    } else {
      return null
    }
  }
  
}