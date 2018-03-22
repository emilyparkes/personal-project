import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'

const App = () => {
  return (
    <div className='app'>
      <div className='app-box'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/about' component={Portfolio} />
          <Route path='/about' component={Blog} />
        </Switch>
      </div>
      <div className='sticky-footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App