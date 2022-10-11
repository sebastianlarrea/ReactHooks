import React from 'react'
import Card from 'components/Card/Card'
import './ToggleCard.scss'

function ToggleCard() {
    const [toggleCard, setToggleCard] = React.useState(true)

    const onToggleCard = () => setToggleCard(prevToggle => !prevToggle)

    return (
        <div className="ToggleCard">
            <button className="ToggleCard__button" onClick={onToggleCard}>
                Mostrar/Ocultar card
            </button>
            {toggleCard && <Card title="title" text="text" color="red" />}
        </div>
    )
}

export default ToggleCard
