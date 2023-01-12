import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header>
            <h1>Chuck Norris</h1>
            <nav>
                <Link to="text">Text</Link>
                <Link to="text">Text</Link>
                <Link to="text">Text</Link>
                <Link to="text">Text</Link>
                <Link to="text">Text</Link>
            </nav>
        </header>
    )
}

export default Navbar;