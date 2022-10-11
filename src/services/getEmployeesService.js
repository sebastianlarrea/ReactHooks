function getToolsService() {
    const tools = [
        {
            id: 1,
            name: 'ReactJS',
            description: 'La mejor libreria de JavaScript',
            color: '#61DAFB'
        },
        {
            id: 2,
            name: 'AngularJS',
            description: 'El mejor framework de JavaScript',
            color: '#BD012D'
        },
        {
            id: 3,
            name: 'MongoDB',
            description: 'Bases de datos no relacionales',
            color: '#409042'
        },
        {
            id: 4,
            name: 'ReduxJS',
            description: 'Manejo de estado glogal de la aplicacion',
            color: '#7248B6'
        }
    ]

    return Promise.resolve({ status: 200, content: tools })
}

export default getToolsService
