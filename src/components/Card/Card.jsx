import React from 'react'
import './Card.scss'

function Card({ title, text, titleColor }) {
    return (
        <section className="Card">
            <h1
                className="Card__title"
                style={{
                    color: titleColor
                }}
            >
                {title}
            </h1>
            <h2 className="Card__text">{text}</h2>
        </section>
    )
}

export default Card
