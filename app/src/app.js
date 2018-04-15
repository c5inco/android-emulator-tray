import React, { Component } from 'react'
import { exec } from 'child_process'

export default class App extends Component {
  state = {
    path: ''
  }

  componentDidMount() {
    exec('echo $ANDROID_HOME', (err, stdout, stderr) => {
      if (err) {
        console.err(`exec error: ${err}`)
        return
      }
      console.log(`stdout: ${stdout}`)
      console.log(`stderr: ${stderr}`)
      this.setState({ path: stdout })
    })
  }

  render() {
    const { path } = this.state
    
    return (
      <div className="hello">
        <h1>{path}</h1>
      </div>
    )
  }
}
