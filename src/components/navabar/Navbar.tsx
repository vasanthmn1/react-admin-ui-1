import './navabar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src="logo.svg" alt="" />
                <span>vasanth</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" className="icon" />
                <img src="/app.svg" alt="" className="icon" />
                <img src="/expand.svg" alt="" className="icon" />
                <div className="notification">
                    <img src="/notifications.svg" alt="" className="icon" />

                    <span>1</span>
                </div>
                <div className="user">
                    <img src='https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png' />
                </div>
                <img src="/setting.svg" alt="" className="icon" />
            </div>

        </div>
    )
}

export default Navbar