import React from 'react'
import { actionFor } from '../reducers/anecdoteReducer'
import { actionForNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdotesToShow from './anecdotesToShow'
import anecdoteService from '../services/anecdotes'


class AnecdoteList extends React.Component {

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        {this.props.anecdote.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={async () => {
                const anec = await anecdoteService.vote(anecdote.id)
                this.props.anecdoteVoting(anec)
                this.props.createNotification(`Voted '${anecdote.content}' up`)
              }
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    anecdote: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  anecdoteVoting: actionFor.anecdoteVoting,
  createNotification: actionForNotification.createNotification
}

const connectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default connectedAnecdoteList
