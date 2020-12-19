import React from 'react'
import cuckoologo from '../../Icons/cuckoo-logo.svg'
import './Watermark.css'

function Watermark(){
    return (
        <div className="watermark">
            <img className="logoImage" src={cuckoologo} alt="ZomZom Logo"/>
            <span className="logoText">ZomZom</span>
        </div>
    )
}

export default Watermark