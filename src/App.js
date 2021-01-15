import React from 'react'
import Axios from 'axios'

import {Switch, Route} from 'react-router-dom'

import Navigation from './components/navbar'

import Home from './pages/home'

class App extends React.Component {

  componentDidMount () {
    Axios.get(`http://localhost:2000/products`)
    .then((res) => {
      console.log(res.data[0])
    })
    .catch((err) => console.log(Error))
  }

  render () {
    return (
      <div>
        <Navigation/>
        <Switch>
            <Route path= '/' component={Home} exact/>
        </Switch>
      </div>
    )
  }
}

export default App