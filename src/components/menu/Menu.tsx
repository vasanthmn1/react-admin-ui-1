import './menu.scss'
import { Link } from 'react-router-dom'
const Menu = () => {
    return (
        <div className='menu'>
            <div className="item">
                <span className="title"></span>
                <span>Menu</span>
                <Link to={'/home'} className='ListItem'>
                    <img src='/home.svg' />
                    <span className='ListItemTitle'>Home</span>
                </Link>
                <Link to={'/home'} className='ListItem'>
                    <img src='/profile.svg' />
                    <span className='ListItemTitle'>profile</span>
                </Link>

            </div>

            <div className="item">
                <span className="title"></span>
                <span>Menu</span>
                <Link to={'/home'} className='ListItem'>
                    <img src='/home.svg' />
                    <span className='ListItemTitle'>Home</span>
                </Link>
                <Link to={'/home'} className='ListItem'>
                    <img src='/profile.svg' />
                    <span className='ListItemTitle'>profile</span>
                </Link>

            </div>
        </div>
    )
}

export default Menu