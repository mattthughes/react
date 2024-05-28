import React, { Component } from 'react'
import importedNames from '../components/Names'
import names from '../components/Names'

export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        names: importedNames
      }
    }
    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        const filteredNames = importedNames.filter(name => {
            return name.toLowerCase().includes(inputText)
        })

        this.setState({
            names: filteredNames
        })
    }
  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>Matching names foud: {this.state.names.length}</p>
        <form key={names}>
            <input onChange={(event) => this.handleChange(event)} type='text' placeholder='search names'/>
        </form>
        <div style={{margin: 'auto'}}> 
            {this.state.names.map(name => {
                return <p key={name}>{name}</p>
            })}
        </div>
      </div>
    )
  }
}

export default SearchBar