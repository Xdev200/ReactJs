import React from 'react'
import Header from './components/Header'
import Bg from './components/Bg'

class App extends React.Component{
  render(){
    return(
      <div>
        <div id = 'wrapper'>
          <Header/>
        </div>
        <Bg/>
      </div>
    )
  }
}

export default App