const FirstComponent = () =>  
(
     <h1>My first component</h1>
)

const NamedComponent = ({name}) => (
    <p>My name is {name}</p>
)  

const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Three"/>
    </div>
)
ReactDOM.render(<App />, document.getElementById('root'));