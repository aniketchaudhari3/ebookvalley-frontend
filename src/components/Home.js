import React, { PureComponent } from 'react'
import PageHeader from './PageHeader'
import SearchResultHolder from './SearchResultHolder'
class App extends PureComponent {

  render() {
    return (
      <div>
      <PageHeader/>
      <SearchResultHolder/>
      </div>
    )
  }
}

export default App
