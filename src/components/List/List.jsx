import React, { useEffect } from 'react'
import './List.scss'

function List({ getItems }) {
    const [items, setItems] = React.useState([])

    useEffect(() => {
        setItems(getItems())
        console.log('Updating Items...')
    }, [getItems])

    return (
        <div className="List">
            {items.map(item => (
                <div className="List__item" key={item}>
                    {item}
                </div>
            ))}
        </div>
    )
}

export default List
