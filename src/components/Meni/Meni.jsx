import { Link } from 'react-router-dom'


function Meni() {
    return (
        <div className='meni-wrapper'>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>

        </div>
    )
}

export default Meni