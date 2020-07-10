// npm install --save react-typical

import React, { Component } from 'react'
import Typical from 'react-typical'

class Animated_text extends React.Component {
  render () {
    return (
      <div style={{height:"4em", padding:"0.5em"}}>
      <Typical
        steps={['We serve health...!', 100, 'We serve happiness...!', 100,
        		'We serve nutrients...!', 100, 'We serve love...!', 100]}
        loop={Infinity}
        wrapper="h1"
      />
      </div>
    )
  }
}

export default Animated_text;