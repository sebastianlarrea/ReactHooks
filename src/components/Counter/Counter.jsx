import React, { useEffect } from 'react'
import './Counter.scss'

const Counter = () => {
    const [counter, setCount] = React.useState(0)
    const [name, setName] = React.useState('Sebastian')

    const decrement = () => setCount(prevCount => prevCount - 1)
    const increment = () => setCount(prevCount => prevCount + 1)
    const changeName = () => setName(prevName => prevName + 'n')

    useEffect(() => {
        console.log('El componente ha sido montado')

        return () => console.log('El componente ha sido desmontado')
    }, [])

    useEffect(() => {
        console.log('El componente se ha actualizado')
    })

    useEffect(() => console.log('El nombre ha cambiado'), [name])

    useEffect(() => console.log('El contador ha cambiado'), [counter])

    return (
        <section className="Counter">
            <span className="Counter__counter">
                {counter} || {name}
            </span>
            <div className="Counter__buttons">
                <button className="Counter__button" onClick={decrement}>
                    Decrementar
                </button>
                <button className="Counter__button" onClick={increment}>
                    Incrementar
                </button>
                <button className="Counter__button" onClick={changeName}>
                    Cambiar nombre
                </button>
            </div>
        </section>
    )
}

export default Counter
