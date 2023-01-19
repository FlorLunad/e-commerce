import React from 'react'
import Item from "../Item/Item"


export const ItemList = ({products}) => {

    return (
        <ul>
            {
                products.map( (producto) => (
                        <Item producto={producto.name}/>
                    )
                )
            }
        </ul>
  )
}

export default ItemList