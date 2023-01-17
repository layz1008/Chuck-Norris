import { Link } from 'react-router-dom'
import ChuckyJokes from './ChuckyJokes.jsx';

function Navbar(props) {
    return (
        <header>
        <h1>Ole Chuck</h1>
        
            <nav>
                <button onClick={props.getJoke}>New joke</button>
            </nav>
        </header>
    )
}

export default Navbar;