import React, { Component } from 'react'
import loading from './loading.gif'

export class Spineer extends Component {
  render() {
    return (
      <div className='text-center'> 
          <img className="my-1" src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spineer