

import React from 'react'
import { Link } from 'react-router-dom'




const Categorias = ({ categoria }) => {
    
  return (
    <div>
    <Link to={`/categoria/${categoria}`}>
            <p>{categoria}</p>
    </Link>
        </div>
  )
}

export default Categorias



