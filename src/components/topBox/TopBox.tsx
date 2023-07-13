import { topDealUsers } from '../../data'
import './topBar.scss'

const TopBox = () => {
    return (
        <div className="topBox">
            <h1>Top Deals</h1>
            <div className="list">
                {
                    topDealUsers.map((user) => {
                        return (
                            <div className="listItem" key={user.id}>
                                <div className="listuser">
                                    <img src={user.img} alt="" />
                                    <div className="userText">
                                        <span className="userName">{user.username}</span>
                                        <span className="email">{user.email}</span>
                                    </div>
                                </div>
                                <span className="amount">{user.amount}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopBox