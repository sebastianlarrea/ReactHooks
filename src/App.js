import React, { useEffect, useState } from 'react'
import Card from 'components/Card/Card'
//import ToggleCounter from 'components/ToggleCounter/ToggleCounter'
//import Counter from 'components/Counter/Counter'
//import Todo from 'components/Todo/Todo'
//import ListContainer from 'components/List/ListContainer'
import getSoftwareToolsService from 'services/getSoftwareToolsService'

import './App.scss'

function App() {
    const [tools, setTools] = useState(null)

    function getData() {
        getSoftwareToolsService()
            .then(response => {
                if (response.status === 200) {
                    setTools(response?.content)
                } else {
                    console.error('Error')
                }
            })
            .catch(error => console.log('Error', error))
    }

    useEffect(getData, [])

    return (
        <div className="App">
            {tools &&
                tools.map((tool, index) => (
                    <Card
                        key={index}
                        title={tool.name}
                        text={tool.description}
                        titleColor={tool.color}
                    />
                ))}
        </div>
    )
}

export default App

//#61DAFB
//#409042
//#BD012D
//#7248B6
