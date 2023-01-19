import React from 'react'

const Item = ({producto, i}) => {
  return ( <li key={i}> {producto} </li>
  )
}

export default Item