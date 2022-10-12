import React from 'react'
import List from 'components/List/List'
import './ListContainer.scss'

function ListContainer() {
    const [number, setNumber] = React.useState(1)
    const [dark, setDark] = React.useState(false)

    const getItems = () => {
        return [number, number + 1, number + 2]
    }

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    const toggleTheme = () => setDark(prevDark => !prevDark)

    return (
        <div className="ListContainer" style={theme}>
            <input
                className="ListContainer__input"
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button className="ListContainer__button" onClick={toggleTheme}>
                Cambiar tema
            </button>
            <List getItems={getItems} />
        </div>
    )
}

export default ListContainer
