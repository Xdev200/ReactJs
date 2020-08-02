import React from 'react'
import Header from './components/Header'
import Bg from './components/Bg'
import About from './components/About'
import Work from './components/Work'

class App extends React.Component{
  render(){
    return(
      <div>
        <div id = 'wrapper'>
          <Header/>
          <div id='main'>
            <About/>
            <Work/>
          </div>
        </div>
        <Bg/>
      </div>
    )
  }
}

export default App