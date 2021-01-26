import React from 'react'
import HomePage from './HomePage'

const Dashboard = () => {
    return (
        <div className='container'>
            <header className="header">
                <div className="content-container">
                    <div className="header__content header__title">
                        <h1>Inventory Management</h1>
                    </div>
                </div>
            </header>
            <HomePage />
        </div>
    )
}

export default Dashboard