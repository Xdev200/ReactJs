import React from 'react'
import Header from './components/Header'
import Bg from './components/Bg'
import About from './components/About'

class App extends React.Component{
  render(){
    return(
      <div>
        <div id = 'wrapper'>
          <Header/>
          <div id='main'>
            <About/>
          </div>
        </div>
        <Bg/>
      </div>
    )
  }
}

export default App