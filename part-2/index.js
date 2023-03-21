
// import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';

const Tweet = ({username, fName, date, message}) => {
    return (
        <ul>
            <li>{username}</li>
            <li>{fName}</li>
            <li>{date}</li>
            <li>{message}</li>
        </ul>
    )
}

const App = () => {
    return (
        <div>
            <Tweet username='Dez Eyes' fName='Sasuke' date='Mar 21' message='I hate you Naruto'/>
            <Tweet username='Hokage' fName='Naruto' date='Mar 21' message='Believe it!'/>
            <Tweet username='Silver Fox' fName='OldMan' date='Mar 21' message='Whistling about some candy!'/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));