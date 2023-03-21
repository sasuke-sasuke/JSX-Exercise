const Person = ({name, age, hobbies}) => {

    return (
        <div>
            <p>Learn some info about this person</p>
            {age > 18 ? <h3>Please go vote!</h3> : <h3>You must be 18!</h3>}
            <ul>
                <li>Name: {name.length > 6 ? name.slice(0,6): name}</li>
                <li>Age: {age}</li>
                <li>
                    Hobbies: 
                    <ol>
                        {hobbies.map(hobby => <li>{hobby}</li>)}
                    </ol>
                </li>
            </ul>
        </div>

    )
}

const App = () => {
    return (
        <div>
            <Person name='Jeof' age={33} hobbies={['video games', 'eating', 'smoking', 'expanding mind']}/>
            <Person name='Chrystee George' age={34} hobbies={['video games', 'Apex', 'smoking', 'gators']}/>
            <Person name='Jaydn' age={14} hobbies={['Being scared', 'Screaming', 'Eating moms candy', 'screaming', 'scream laughing']}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))