import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import FilterForm from './components/filterForm'

class App extends React.Component {

  render() {
    //  const anecdotes = this.props.store.getState().anecdote
    let notification = ''

    if (this.props.store.getState().notification) {
      notification = <Notification store={this.props.store} />
    }
    return (
      <div>
        <h1>Programming anecdotes</h1>
        {notification}
        <FilterForm store={this.props.store} />
        <AnecdoteList store={this.props.store} />
        <AnecdoteForm store={this.props.store} />
      </div>
    )
  }
}

export default App