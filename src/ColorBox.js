import React, { Component } from 'react';

export default class ColorBox extends Component {
  render() {
    const newOpacity = this.props.opacity - .1

    if (this.props.opacity >= .2){
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={newOpacity} />
        </div>
      )
    } else
    return null

  }
}



// return (
//   <div className="color-box" style={{opacity: 2}}>
//     {this.props.opacity >= .2 ? <ColorBox opacity={this.props.opacity - .1}  /> : null}
//   </div>
// )
