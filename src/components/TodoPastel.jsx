import React from 'react'

function TodoPastel() {
    const [count, setCount] = React.useState(0)
    const [todos, setTodos] = React.useState([])

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    const addTodo = () => {
        setTodos(prevTodos => [...prevTodos, 'New Todo'])
    }

    const expensiveCalculation = num => {
        console.log('Calculating...')
        for (let i = 0; i < 1000000000; i++) {
            num += 1
        }
        return num
    }

    const calculation = React.useMemo(
        () => expensiveCalculation(count),
        [count]
    )

    return (
        <div className="Todo">
            <div className="Todo__box">
                <h2 className="Todo__title">My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })}
                <button className="Todo__button" onClick={addTodo}>
                    Add Todo
                </button>
            </div>
            <div className="Todo__box">
                <p>Count: {count}</p>
                <h2 className="Todo__title">Expensive Calculation</h2>
                {calculation}
                <button className="Todo__button" onClick={increment}>
                    Incrementar
                </button>
            </div>
        </div>
    )
}

export default TodoPastel
