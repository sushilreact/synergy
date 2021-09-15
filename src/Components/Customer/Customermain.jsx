import React from 'react'
import ReactDOM from 'react-dom';
import Customerheader from './Customerheader'
import Customerpage from './Customerpage'
import "./css/Customerstyle.css"


const Customermain = () => {
    return (
        <>
            <div className="container-fluid">
                <Customerheader />
                <Customerpage />
            </div>
        </>
    )
}

export default Customermain;