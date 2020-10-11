import React from 'react'
import {Link} from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div>
      <p>Page Not Found</p>
      <p><Link to="/">Home page</Link></p>
    </div>
  )
};
