import React from 'react'
import '../../css/train_nav.css'
function Header() {
    return (
        <div>
            <div className="train_nav">
                <div className="station_container">
                   from: <input type='text' /> to <input type='text' />
                </div>
                <div className="date_container">
                    <input type='date' />
                </div>
            </div>
        </div>
    )
}

export default Header
