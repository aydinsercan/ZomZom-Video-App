import React from 'react'
import logo from '../../Icons/cuckoo-logo.svg'
import '../Navigation/Navigation.css'

const Navigation = () => {
    return (
        <header className="dropShadow">
            <div className="headerWrapper">
                <div className="headerContainer flex">
                    <div className="headerLogoLinkWrapper">
                        <div className="headerLogoLink">
                        <a href='/'>
                            <div className="headerLogo flex flex-row">
                                <div className="logoImg">
                                    <img src={logo} alt="ZomZom Logo"/>
                                </div>
                                <div className="logoText">
                                    ZomZom
                                </div>
                            </div>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navigation