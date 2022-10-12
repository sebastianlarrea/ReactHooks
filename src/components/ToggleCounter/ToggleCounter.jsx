import React from 'react'
import Counter from 'components/Counter/Counter'
import './ToggleCounter.scss'

function ToggleCounter() {
    const [toggleCounter, setToggleCounter] = React.useState(true)

    const onToggleCounter = () => setToggleCounter(prevToggle => !prevToggle)

    return (
        <div className="ToggleCounter">
            <button className="ToggleCard__button" onClick={onToggleCounter}>
                Mostrar/Ocultar Counter
            </button>
            {toggleCounter && <Counter />}
        </div>
    )
}

export default ToggleCounter
