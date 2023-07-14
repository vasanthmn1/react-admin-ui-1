import './menu.scss'
import { Link } from 'react-router-dom'
import { menu } from '../../data'

const Menu = () => {
    return (
        <div className='menu'>
            {
                menu.map((item) => {
                    return (
                        <div className="item">
                            <span className="title">{item.title}</span>


                            {item.listItems.map((val, idx) => {
                                return (
                                    <Link to={val.url} className='ListItem' key={idx}>
                                        <img src={val.icon} />
                                        <span className='ListItemTitle'>{val.title}</span>
                                    </Link>
                                )
                            })
                            }
                            {/* <img src='/home.svg' />
                                <span className='ListItemTitle'>{item.listItems}</span> */}

                            {/* <Link to={'/home'} className='ListItem'>
                                <img src='/profile.svg' />
                                <span className='ListItemTitle'>profile</span>
                            </Link> */}

                        </div>
                    )
                })
            }


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