import React, { PureComponent } from 'react'
import Navbar from './components/Navbar'
import PageHeader from './components/PageHeader'
import SearchResultHolder from './components/SearchResultHolder'
class App extends PureComponent {

  render() {
    return (
      <div>
      <Navbar/>
      <PageHeader/>
      <SearchResultHolder/>
      </div>
    )
  }
}

export default App
